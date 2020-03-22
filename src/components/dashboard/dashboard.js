import React from 'react';
import './dashboard.scss';
import Card from '@material-ui/core/Card';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { formatDashboardData, getCases } from '../../services/FetchData';
import { readString } from 'react-papaparse';

const getConfig = (data) => ({
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false
	},
	title: {
		text: '<b>Total Cases</b>',
		align: 'center',
		verticalAlign: 'middle',
		y: 100
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	plotOptions: {
		pie: {
			size: '100%',
			allowPointSelect: true,
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				distance: -10
			},
			startAngle: -90,
			endAngle: 90,
			center: [ '50%', '75%' ]
		}
	},
	series: [
		{
			type: 'pie',
			name: 'Count',
			innerSize: '50%',
			colorByPoint: true,
			data: [
				{
					name: 'Confirmed',
					color: '#F9D93E',
					y: data.count[0].value || 1
				},
				{
					name: 'Recovered',
					color: '#4caf50',
					y: data.count[1].value || 1
				},
				{
					name: 'Deceased',
					color: '#e53935',
					y: data.count[2].value || 1
				}
			]
		}
	],
	credits: {
		enabled: false
	},
	exporting: {
		enabled: false
	}
});

export default class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
			count: [
				{ name: 'Total Confirmed', value: 0, class: 'yellow' },
				{ name: 'Total Recovered', value: 0, class: 'green' },
				{ name: 'Total Deceased', value: 0, class: 'red' }
			]
		};
	}

	async componentDidMount() {
		try {
			const responseConfirmed = await getCases('CONFIRMED');
			const dataConfirmed = await readString(responseConfirmed);
			const responseRecovered = await getCases('RECOVERED');
			const dataRecovered = await readString(responseRecovered);
			const responseDead = await getCases('DEATHS');
			const dataDead = await readString(responseDead);
			if (dataConfirmed && dataRecovered && dataDead) {
				const formattedConfirmed = formatDashboardData(dataConfirmed.data);
				const formattedRecovered = formatDashboardData(dataRecovered.data);
				const formattedDead = formatDashboardData(dataDead.data);
				// Creating dashboard count
				let count = this.state.count;
				count[0].value = formattedConfirmed;
				count[1].value = formattedRecovered;
				count[2].value = formattedDead;
				this.setState({ count });
			}
		} catch (e) {
			console.warn(e);
		}
	}

	render() {
		const { count } = this.state;
		const chartConfig = getConfig({ count });

		return (
			<div className='dashboard-container'>
				<div className='pie-chart'>
					<HighchartsReact highcharts={Highcharts} options={chartConfig} />
				</div>
				<div className='tiles'>
					{this.state.count.map((item, index) => (
						<Card key={index} className='tile'>
							<div>{item.name}</div>
							<div className={item.class}>{item.value}</div>
						</Card>
					))}
				</div>
			</div>
		);
	}
}
