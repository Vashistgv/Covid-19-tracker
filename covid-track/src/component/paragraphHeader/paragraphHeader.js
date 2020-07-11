import React from "react";
import "./pHeader.scss";
import CardS from '../card/cardsample'

class pHeader extends React.Component {
  render() {
    return (
        <div>
      <div className="paraHeader">
        <p className="paratext">WHAT DO WE DO</p>
      </div>
<CardS/>
      </div>
    );
  }
}
export default pHeader;
