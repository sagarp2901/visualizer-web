import React from 'react';
import GoogleMapReact from 'google-map-react';
import { getDailyReport, formatDailyMarkers } from '../../services/FetchData';
import { readString } from 'react-papaparse';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const INITIAL_REGION = {
	latitude: 43.6372866,
	longitude: -79.4036979,
	latitudeDelta: 8.5,
	longitudeDelta: 8.5
};
export default class MapContainer extends React.Component {
	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};

	constructor(props) {
		super(props);
		this.state = {
			markersConfirmed: [],
			markersDead: [],
			markersRecovered: [],
			markers: [],
			initialRegion: INITIAL_REGION
		};
		//this.setCurrentLocation = this.setCurrentLocation.bind(this);
	}

	async componentDidMount() {
		try {
			//this.setCurrentLocation();
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
			// Important! Always set the container height explicitly
			<div style={{ height: '100vh', width: '100%' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyDEDlsTIDM12nZXq9_jrUZOJroDTeL0YS0' }}
					defaultCenter={this.props.center}
					defaultZoom={this.props.zoom}>
					{this.state.markers.map((marker, index) => (
						<AnyReactComponent
							key={index}
							lat={marker.coordinates.latitude}
							lng={marker.coordinates.longitude}
							text='My Marker'
						/>
					))}
				</GoogleMapReact>
			</div>
		);
	}
}

const styles = {
	mapContainer: {
		width: '100%',
		height: '100%'
	},
	map: {
		width: '100%',
		height: '100%'
	}
};
