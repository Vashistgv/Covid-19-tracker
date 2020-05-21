import React from "react";
import { button, Carousel } from "antd";
import "./backgroundImage.scss";
import Paragraph from '../Paragrph/Paragraph'

class Images extends React.Component {
  render() {
    return (
        <div>
      <div className="images">
        <Carousel autoplay effect="fade" dots>
          <div className="masks-covid-19-china">
            <p>
              My co-resident had to transport a coronavirus patient without a
              mask because our hospital ran out. I’m pretty sure he’s infected
              now too.
              <br />
         
            </p>
          </div>
          <div className="mask-woman">
            <p>
              We need to be testing millions of people for coronavirus per day.
              In the U.S, we currently only test 250,000+ people per day.
             
            </p>
          </div>
          <div className="mask-sanitizer">
            <p>
              Over 24% of NYC frontline workers are at or below twice the
              poverty line.
            
            </p>
          </div>
          <div className="sneezing">
            <p>
              Majority of healthcare workers surveyed said they have less than 2
              weeks of PPE supply remaining
             
            </p>
          </div>
          <div className="womanmask">
            <p>
              My co-resident had to transport a coronavirus patient without a
              mask because our hospital ran out. I’m pretty sure he’s infected
              now too
             
            </p>
          
          </div>
          <div className="coronavirs">
              <p className="stay">
                  Stay Safe
              </p>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
      <Paragraph onClick={this.props.onClick} />
      </div>
    );
  }
}
export default Images;
