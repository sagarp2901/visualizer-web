import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Bars from './components/bars/bars';
import Dashboard from './components/dashboard/dashboard';
import MapsComponent from './components/map/map';
import TimeSeries from './components/timeSeries/timeSeries';

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

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs centered value={value} onChange={handleChange} indicatorColor='primary' textColor='primary'>
					<Tab label='Dashboard' {...a11yProps(0)} />
					<Tab label='Heat Map' {...a11yProps(1)} />
					<Tab label='Top 10' {...a11yProps(2)} />
					<Tab label='Time Series' {...a11yProps(3)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<Dashboard />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<MapsComponent />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Bars />
			</TabPanel>
			<TabPanel value={value} index={3}>
				<TimeSeries />
			</TabPanel>
		</div>
	);
}
