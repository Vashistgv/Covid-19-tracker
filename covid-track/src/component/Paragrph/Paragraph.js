import React from "react";
import button from "antd";
import './Paragraph.scss'
import PHeader from '../paragraphHeader/paragraphHeader'

class paragraph extends React.Component {
  render() {
    return (
        <div>
      <div className="para">
        <h1 className="headertext">OUR MISSION</h1>
        <p className="paragraphText">
          Our mission is to provide essential medical supplies to those who need
          it most. We achieve this by analyzing data to identify the most urgent
          need, with an emphasis on marginalized communities in the areas hit
          hardest by COVID-19.
        </p>
      </div>
      <div className="buttoncls">
      <button className="buttonD">Donate</button>
      </div>
      <div>
      <PHeader/>
      </div>
      </div>
    );
  }
}
export default paragraph