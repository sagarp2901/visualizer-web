import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Bars from './components/bars/bars';
import Dashboard from './components/dashboard/dashboard';
import MapsComponent from './components/map/map';
import TimeSeries from './components/timeSeries/timeSeries';
import './App.scss';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `full-width-tab-${index}`,
		'aria-controls': `full-width-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#e0e0e0',
		padding: '0'
	}
}));

export default function App() {
	const classes = useStyles();
	const theme = useTheme();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const imageUrl = require('./assets/images/rsz_covid.png');

	return (
		<div className={classes.root}>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<img className='image-container' src={imageUrl} />
					<Typography variant='h6' className={classes.title}>
						Viru Saastrabuddhe - COVID-19 Data Visualizer
					</Typography>
				</Toolbar>
			</AppBar>
			<AppBar position='static' color='default'>
				<Tabs centered value={value} onChange={handleChange} indicatorColor='primary' textColor='primary'>
					<Tab label='Dashboard' {...a11yProps(0)} />
					<Tab label='Heat Map' {...a11yProps(1)} />
					<Tab label='Top 15' {...a11yProps(2)} />
					<Tab label='Time Series' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel className='padd' value={value} index={0}>
				<Dashboard />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<MapsComponent />
			</TabPanel>
			<TabPanel className='padd' value={value} index={2}>
				<Bars />
			</TabPanel>
			<TabPanel className='padd' value={value} index={3}>
				<TimeSeries />
			</TabPanel>
			<hr />
			<div className='disclaimer'>
				<p>
					Viru Saastrabuddhe (A COVID-19 Data Visualizer) is built using the data from{' '}
					<a target='blank' href='https://github.com/CSSEGISandData'>
						John Hopkins CSSE GitHub Repo
					</a>. It displays interactive visuals and map to provide best available information on the current
					global issue of COVID-19.
				</p>
				<p>
					As stated in the mentioned repo's Terms of Use, the data is provided to the public strictly for
					educational and academic research purposes. The data comes from multiple publicly available sources,
					that do not always agree.
				</p>
				<p>This App is strictly for the purpose of information and education and not for commercial use.</p>
				<p>
					<a target='blank' href='https://phil.cdc.gov/Details.aspx?pid=23312'>
						Coronavirus Image Source{' '}
					</a>- CDC/ Alissa Eckert, MS; Dan Higgins, MAM
				</p>
			</div>
		</div>
	);
}
