import React from 'react';
import './dashboard.scss';
import Card from '@material-ui/core/Card';

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
	render() {
		return (
			<div className='dashboard-container'>
				<div className='pie-chart' />
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
