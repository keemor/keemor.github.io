import { h, render, Component } from 'preact';
import Card from 'preact-material-components/Card';
import HighLightJS from '~/components/highlight';

import 'preact-material-components/Card/style.css';

export default class WhereAmI extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var output = document.getElementById('out');

        if (!navigator.geolocation) {
            output.innerHTML = '<p>Geolocation is not supported by your browser</p>';
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

            var img = new Image();
            img.src =
                'https://maps.googleapis.com/maps/api/staticmap?center=' +
                String(latitude) +
                ',' +
                String(longitude) +
                '&zoom=13&size=300x300&sensor=false' +
                '&key=AIzaSyCgZJHiaOZl_RhpFRXM9gXX8yiYPB-mYbU';

            output.appendChild(img);
        }

        function error() {
            output.innerHTML = 'Unable to retrieve your location';
        }

        output.innerHTML = '<p>Locating…</p>';

        navigator.geolocation.getCurrentPosition(success, error);
    }

    render() {
        const demo = ``;

        return (
            <Card>
                <Card.Media>
                    <div id="out" />
                    {/* <HighLightJS code={demo} /> */}
                </Card.Media>
            </Card>
        );
    }
}
