import React from 'react';
import Highcharts from 'highcharts/highstock';
import HSIndicators from 'highcharts/indicators/indicators.js';
import HighchartsReact from 'highcharts-react-official';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { formatChartData, getCases, formatDropdownCountries } from '../../services/FetchData';
import { readString } from 'react-papaparse';
import Card from '@material-ui/core/Card';
import './timeseries.scss';

HSIndicators(Highcharts);

const getConfig = (data) => ({
	title: {
		text: 'Confirmed/Recovered/Deceased By Country'
	},
	chart: {
		type: 'spline'
	},
	yAxis: {
		title: { text: 'Total Count' }
	},
	xAxis: {
		categories: data.xAxis,
		type: 'datetime',
		labels: {
			format: '{value:%e-%b}'
		}
	},

	rangeSelector: {
		inputEnabled: false,
		buttonSpacing: 10,
		buttonTheme: {
			// styles for the buttons
			r: 8,
			fill: 'none',
			stroke: 'none',
			width: 60,
			height: 18,
			style: {
				color: '#039',
				fontSize: '13px'
			},
			states: {
				hover: {
					fill: '#333333',
					stroke: '#333333'
				},
				select: {
					fill: '#039',
					style: {
						color: 'white'
					}
				}
			}
		},
		buttons: [
			{
				type: 'day',
				count: 10,
				text: '10 Days'
			},
			{
				type: 'day',
				count: 20,
				text: '20 Days'
			},
			{
				type: 'day',
				count: 30,
				text: '30 Days'
			},
			{
				type: 'all',
				count: data.confirmedSeries.length - 1,
				text: 'All'
			}
		]
	},

	series: [ data.confirmedSeries, data.deadSeries, data.recoveredSeries ],
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	}
});

export default class TimeSeries extends React.Component {
	constructor(props) {
		super(props);
		this.allowChartUpdate = true;
		this.state = {
			country: { value: 'China', label: 'China' },
			countries: [],
			confirmedSeries: [],
			deadSeries: [],
			recoveredSeries: [],
			countConfirmed: 0,
			countRecovered: 0,
			countDead: 0,
			xAxis: []
		};

		this.createChart = this.createChart.bind(this);
		this.updateCountry = this.updateCountry.bind(this);
		//this.renderChart = this.renderChart.bind(this);
		//this.renderLegends = this.renderLegends.bind(this);
	}

	async componentDidMount() {
		await this.createChart();
	}

	async createChart() {
		try {
			this.allowChartUpdate = false;

			const responseConfirmed = await getCases('CONFIRMED');
			const dataConfirmed = await readString(responseConfirmed, { header: true });

			const responseDeaths = await getCases('DEATHS');
			const dataDeaths = await readString(responseDeaths, { header: true });

			const responseRecovered = await getCases('RECOVERED');
			const dataRecovered = await readString(responseRecovered, { header: true });

			//Dynamically set countries from confirmed dataset here since it does not work at setState line 145
			if (dataConfirmed) {
				let uniqueCountries = formatDropdownCountries(dataConfirmed.data);
				// Making this drowpdown array here since formatDropdownCountries is being used as a common function for Bars as well
				const countries = uniqueCountries.map((item) => {
					return { label: item, value: item };
				});
				this.setState({ countries });
			}

			if (dataConfirmed && dataDeaths && dataRecovered) {
				const formattedConfirmed = formatChartData(dataConfirmed.data, this.state.country.value);
				const formattedDeaths = formatChartData(dataDeaths.data, this.state.country.value);
				const formattedRecovered = formatChartData(dataRecovered.data, this.state.country.value);
				let seriesConfirmed = formattedConfirmed;
				seriesConfirmed.name = 'Confirmed';
				seriesConfirmed.color = '#fbc02d';
				let seriesRecovered = formattedRecovered;
				seriesRecovered.name = 'Recovered';
				seriesRecovered.color = '#00c853';
				let seriesDead = formattedDeaths;
				seriesDead.name = 'Deceased';
				seriesDead.color = '#f44336';
				this.setState({
					confirmedSeries: seriesConfirmed,
					deadSeries: seriesDead,
					recoveredSeries: seriesRecovered,
					countConfirmed: seriesConfirmed.data[seriesConfirmed.data.length - 1][1] || 0,
					countDead: seriesDead.data[seriesDead.data.length - 1][1] || 0,
					countRecovered: seriesRecovered.data[seriesRecovered.data.length - 1][1] || 0,
					xAxis: seriesConfirmed.data.map((item) => {
						return item[0];
					})
				});
			}
		} catch (e) {
			console.warn(e);
		}
	}

	async updateCountry(country) {
		this.setState({ country });
		await this.createChart();
	}

	render() {
		const { confirmedSeries, recoveredSeries, deadSeries, xAxis, country, countries } = this.state;
		const chartConfig = getConfig({ confirmedSeries, recoveredSeries, deadSeries, xAxis });
		return (
			<div className='tiles'>
				<div className='tile'>
					<Dropdown
						options={countries}
						onChange={this.updateCountry}
						value={country}
						placeholder='Select an option'
					/>
				</div>
				<Card className='chart'>
					<HighchartsReact
						constructorType={'stockChart'}
						containerProps={{ style: { minWidth: '375px', width: '90vw', height: '80vh' } }}
						highcharts={Highcharts}
						options={chartConfig}
					/>
				</Card>
			</div>
		);
	}
}
