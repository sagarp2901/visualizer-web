import React, { Component } from 'react';
import { getDailyReport, formatDailyMarkers } from '../../services/FetchData';
import { readString } from 'react-papaparse';
import './map.scss';

const { compose, withProps, withHandlers } = require('recompose');
const { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } = require('react-google-maps');
const { MarkerClusterer } = require('react-google-maps/lib/components/addons/MarkerClusterer');

const MapWithAMarkerClusterer = compose(
	withProps({
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyDEDlsTIDM12nZXq9_jrUZOJroDTeL0YS0&v=3.exp&libraries=geometry,drawing,places',
		loadingElement: <div style={{ height: `100%` }} />,
		containerElement: <div style={{ height: '100vh' }} />,
		mapElement: <div style={{ height: `100%` }} />
	}),
	withHandlers({
		onMarkerClustererClick: () => (markerClusterer) => {
			const clickedMarkers = markerClusterer.getMarkers();
			console.log(`Current clicked markers length: ${clickedMarkers.length}`);
			console.log(clickedMarkers);
		}
	}),
	withScriptjs,
	withGoogleMap
)((props) => (
	<GoogleMap defaultZoom={3} defaultCenter={{ lat: 25.0391667, lng: 121.525 }}>
		<MarkerClusterer onClick={props.onMarkerClustererClick} averageCenter enableRetinaIcons gridSize={60}>
			{props.markers.map((marker, index) => <CustomMarker key={index} marker={marker} />)}
		</MarkerClusterer>
	</GoogleMap>
));

export default class MapsComponent extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			markers: []
		};
	}

	/* onClick = (e) => {
		this.setState({
			showInfoWindow: !this.state.showInfoWindow
		});
		setTimeout(() => {
			this.setState({
				showInfoWindow: !this.state.showInfoWindow
			});
		}, 200);
	};
	handleMouseOver = (e) => {
		this.setState({
			showInfoWindow: true
		});
	};
	handleMouseExit = (e) => {
		this.setState({
			showInfoWindow: false
		});
	}; */

	async componentDidMount() {
		try {
			// Get map data
			const jsonResponse = await getDailyReport(false);
			const dataJson = await readString(jsonResponse, { header: true });
			if (dataJson && dataJson.data) {
				this.setState({ markers: formatDailyMarkers(dataJson.data) });
				console.log(this.state.markers);
			}
		} catch (e) {
			console.warn(e);
		}
	}

	render() {
		return (
			<div style={{ width: '100%', height: '100vh' }}>
				<MapWithAMarkerClusterer markers={this.state.markers} />
			</div>
		);
	}
}

class CustomMarker extends Component {
	state = {
		showInfoWindow: false
	};
	onClick = (e) => {
		this.setState({
			showInfoWindow: !this.state.showInfoWindow
		});
		setTimeout(() => {
			this.setState({
				showInfoWindow: !this.state.showInfoWindow
			});
		}, 200);
	};
	handleMouseOver = (e) => {
		this.setState({
			showInfoWindow: true
		});
	};
	handleMouseExit = (e) => {
		this.setState({
			showInfoWindow: false
		});
	};
	render() {
		const { showInfoWindow } = this.state;
		const { marker } = this.props;
		return (
			<Marker
				position={{ lat: marker.coordinates.latitude, lng: marker.coordinates.longitude }}
				onClick={this.onClick}
				onMouseOver={this.handleMouseOver}
				onMouseOut={this.handleMouseExit}>
				{showInfoWindow && (
					<InfoWindow>
						<div className='markerContainer'>
							<div className='yellow'>Confirmed: {marker.confirmed}</div>
							<div className='green'>Recovered: {marker.recovered}</div>
							<div className='red'>Deceased: {marker.dead}</div>
						</div>
					</InfoWindow>
				)}
			</Marker>
		);
	}
}
