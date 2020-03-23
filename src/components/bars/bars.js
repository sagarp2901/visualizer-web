import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { getDailyReport, formatByCountry, formatSeries } from '../../services/FetchData';
import { readString } from 'react-papaparse';
import './bars.scss';

const getConfig = (data) => ({
	chart: {
		type: 'bar',
		height: '100%'
	},
	title: {
		text: 'Top 15 Affected Countries'
	},
	xAxis: {
		categories: data.countries
	},
	legend: {
		reversed: false
	},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true
			},
			groupPadding: 0.2
		}
	},
	series: data.series,
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	}
});
export default class Bars extends React.Component {
	constructor(props) {
		super(props);
		Highcharts.setOptions({
			lang: {
				thousandsSep: ','
			}
		});
		this.allowChartUpdate = true;
		this.state = {
			series: [],
			countries: []
		};
		this.createChart = this.createChart.bind(this);
	}

	async componentDidMount() {
		await this.createChart();
	}

	async createChart() {
		try {
			this.allowChartUpdate = false;
			const jsonResponse = await getDailyReport(false);
			const dataJson = await readString(jsonResponse, { header: true });
			if (dataJson) {
				const formatted = formatByCountry(dataJson.data);
				const formattedFinal = formatSeries(formatted);
				this.setState({ series: formattedFinal.series, countries: formattedFinal.countries });
			}
		} catch (e) {
			console.warn(e);
		}
	}

	render() {
		const { series, countries } = this.state;
		const chartConfig = getConfig({ series, countries });
		return (
			<div className='card'>
				<HighchartsReact
					containerProps={{
						style: { minWidth: '375px', width: '100%' }
					}}
					highcharts={Highcharts}
					options={chartConfig}
				/>
			</div>
		);
	}
}
