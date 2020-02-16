import React from 'react';
import './LayoverCard.css';
import { Card, Button } from 'react-bootstrap';
import Unsplash from 'unsplash-js';
import { toJson } from "unsplash-js";
const unsplash = new Unsplash({
  accessKey: "8h9wdatDrugd4YLMhWPGyDl-QL2UBQnSrJ3Sn3GKoaU",
  secret: "nxRA_GcpDwKOMpj19ltHwkQ52VTyaEnbM7pbz98tUvA"
});

var airports = require('airport-codes');

class LayoverCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL : "",
    }
  }

  getImages(search){
    unsplash.search.photos(search, 1, 1, { orientation: "portrait" })
  .then(toJson)
  .then(json => {
    this.setState({imgURL: json.results[0].urls.raw});
  });
  }

  render() {
    const { travelData } = this.props;
    const fullCityNameLayover = (airports.findWhere({ iata: travelData.layover }).get('city'));
    const fullCityNameOrigin = (airports.findWhere({ iata: travelData.origin }).get('city'));
    const fullCityNameDestination = (airports.findWhere({ iata: travelData.destination }).get('city'));
    this.getImages(fullCityNameLayover);
    return (
        <div>
          <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" className="cardImg" src={this.state.imgURL} />
            <Card.Body className="test2">
              <Card.Title className="test">{fullCityNameLayover}</Card.Title>
              <Card.Text>
                Leave {fullCityNameOrigin} at {travelData.originDepartureTime.slice(-8)}
                <br/>
                Arrive in {fullCityNameDestination} at {travelData.destinationArrivalTime.slice(-8)}
              </Card.Text>
              <a href="http://localhost:3000/activities">
                <Button variant="primary" >Go!</Button>
              </a>
            </Card.Body>
          </Card>
        </div>

      // <Card className="text-center">
      //   <Card.Header>Alaska</Card.Header>
      //   <Card.Body>
      //     {/* <Card.Title>Special title treatment</Card.Title> */}
      //     <Card.Text>
      //       Leave San Francisco at XX:XX
      //       <br/>
      //      Arrive in Moscow at XX:XX
      //      </Card.Text>
      //     <Button variant="primary">Go somewhere</Button>
      //   </Card.Body>
      //   <Card.Footer className="text-muted">2 days ago</Card.Footer>
      // </Card>
    )
  }
}

export default LayoverCard;
