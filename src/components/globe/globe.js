import React from 'react';
import ReactGlobe from 'react-globe';
import { getDailyReport, formatGlobeMarkers } from '../../services/FetchData';
import { readString } from 'react-papaparse';

const getTooltipContent = (marker) => {
	return `${marker.country}
    Confirmed:${marker.confirmed},
    Recovered: ${marker.recovered},
    Deceased: ${marker.dead}`;
};

const globe = 'globe_dark.jpg';

export default class Globe extends React.Component {
	constructor() {
		super();
		this.state = {
			markers: [],
			loaded: false
		};
	}

	async componentDidMount() {
		try {
			// Get map data
			const jsonResponse = await getDailyReport(false);
			const dataJson = await readString(jsonResponse, { header: true });
			if (dataJson && dataJson.data) {
				this.setState({ markers: formatGlobeMarkers(dataJson.data) });
				//console.log(this.state.markers);
			}
		} catch (e) {
			console.warn(e);
		}
	}

	render() {
		const { markers } = this.state;
		return (
			<div style={{ width: '100vw', height: '50vh' }}>
				<ReactGlobe
					markers={markers}
					markerOptions={{ getTooltipContent }}
					globeOptions={{
						texture: `https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/${globe}`
					}}
					onTextureLoaded={() => this.setLoaded(true)}
				/>
			</div>
		);
	}

	setLoaded = (loaded) => {
		this.setState({ loaded });
	};
}
