import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
console.log(GoogleMapReact);

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Landing extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Map-Container">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          style={{ height: "300px" }}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={"Google Map"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Landing.defaultProps = {
  center: { lat: 59.95, lng: 30.33 },
  zoom: 11
};

export default Landing;
