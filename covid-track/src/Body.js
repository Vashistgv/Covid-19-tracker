import React from "react";
import CovidTable from "./component/Table/Table";
import API from "./utils/API";
import DistrictModal from "./component/Modal/DistrictModal";
import "./App.scss";
import * as Icon from "react-feather";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      districts: {},
      eachDistrictData: [],
      displayDist: false,
      Zone: [],
    };
  }

  async componentDidMount() {
    // Load async data.
    let Data = await API.get("/data.json");
    console.log(Data.data.statewise, "api called");
    this.setState({ data: Data.data.statewise, loading: false });

    console.log(Data.data.statewise, "api called");

    let DistrictData = await API.get("/state_district_wise.json");

    let ZoneData = await API.get("/zones.json");
    this.setState({
      data: Data.data.statewise,
      loading: false,
      districts: DistrictData.data,
      Zone: ZoneData.data,
    });
  }

  onStateClicked = (text) => {
    let dist = this.state.districts;
    let Zone = this.state.Zone;
    let arr = [];

    let data = dist[text];
    for (let item in data.districtData) {
      let eachdis = { ...data.districtData[item], dist: item };

      arr.push(eachdis);
    }
    //looping array to compare
    arr = arr.map((district) => {
      if (district.dist !== "Unknown" || district.dist !== "Other State") {
        //filtering the zone which match the district
        let value =
          Zone.zones &&
          Zone.zones.filter((eachzone) => {
            return district.dist === eachzone.district;
          });
        // adding the zone to district object
        if (value[0]) district.zone = value[0].zone;
      }

      return district;
    });

    this.setState({ eachDistrictData: arr, displayDist: true });
  };

  render() {
    return (
      <div className="bodyComponent">
        <div className="table-comp">
          <div>
            <button className="buttoncls" onClick={this.props.onClick}>
              Back
            </button>
          </div>

          <CovidTable
            data={this.state.data}
            loading={this.state.loading}
            onStateClicked={this.onStateClicked}
          />

          {this.state.displayDist ? (
            <DistrictModal
              data={this.state.eachDistrictData}
              loading="false"
              visible="true"
              handleOk={() => this.setState({ displayDist: false })}
              handleCancel={() => this.setState({ displayDist: false })}
            />
          ) : (
            " "
          )}

          <div className="text">
            {" "}
            We stand with everyone fighting on the frontlines
          </div>
          <div className="tags">
          <div className="socialIcons">
              <p>
          <a
          className="covid"
              href="https://www.mygov.in/covid-19"
              target="_blank"
              rel="noopener noreferrer"
            >
              covid19india
            </a>
            </p>
              <p>
            <a
              className="facebook"
              href="http://www.facebook.com/pages/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon.Facebook />
              <span>View updates on Facebook</span>
            </a>
            </p>
            <p>
            <a className="twitter" href="https://twitter.com/login">
              <Icon.Twitter />
              <span>View updates on Twitter</span>
            </a>
            </p>
            <p>
            <a
            className="gmail"
             href="https://www.gmail.com">
              <Icon.Mail />
              <span>View updates on Mail</span>
            </a>
            </p>
            <p>
            <a
            className="linkdin"
            href="http://www.linkedin.com/in">
              <Icon.Linkedin />
              <span>View updates on Linkedin</span>
            </a>
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Body;
