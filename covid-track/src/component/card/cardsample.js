import React from "react";
import { Row, Col } from "antd";
import "../paragraphHeader/pHeader.scss";

class cardS extends React.Component {
  render() {
    return (
      <div className="cardss">
        <Row>
          <Col>
            <img className="maskimage"></img>
            <h1>1 BILLION PPE FOR THE FRONTLINES</h1>
            <p className="iconpara">
              We acquire and donate FDA-approved PPE to the people that need it
              the most, including frontline workers, nursing homes, first
              responders, local clinics, and hospitals across the United States.
            </p>
          </Col>
          <Col>
            <img className="gifticon" style={{ width: "100%" }}></img>
            <h1>COMMUNITY PPE PROGRAMS</h1>
            <p className="iconpara">
              The foundation has designed auxiliary programs to provide care
              packages and educational materials to marginalized communities
              that are currently most vulnerable to COVID-19.
            </p>
          </Col>
          <Col>
            <img className="light" style={{ width: "100%" }}></img>
            <h1>COVID-19 TESTING MOBILE UNITS</h1>
            <p className="iconpara">
              The availability of testing is critical to the fight against
              COVID-19. We have partnered with Clutter to leverage their fleet
              of trucks to offer mobile testing units in the communities hardest
              hit.
            </p>
          </Col>
          <Col>
            <img className="thermometer" style={{ width: "100%" }}></img>
            <h1>NURTURING INNOVATION</h1>
            <p className="iconpara">
              The foundation strives to be a central hub for funding efforts
              related to COVID-19 and provide a platform for COVID-19 related
              professionals to exchange knowledge or establish partnership.
            </p>
          </Col>
        </Row>
        <hr/>
      </div>
    );
  }
}
export default cardS;
