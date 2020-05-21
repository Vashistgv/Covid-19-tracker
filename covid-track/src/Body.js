import React from 'react';
import CovidTable from './component/Table/Table'
import API from "./utils/API";
import DistrictModal from './component/Modal/DistrictModal';
import './App.scss';
class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            loading: true,
            data: [],
            districts: {} ,
            eachDistrictData : [] ,
            displayDist : false 
        }
    }


    async  componentDidMount() {

        // Load async data.
        let Data = await API.get('/data.json');
         console.log(Data.data.statewise , "api called")       
  this.setState({ data : Data.data.statewise , loading  : false })

        console.log(Data.data.statewise, "api called")


        let DistrictData = await API.get('/state_district_wise.json');
        this.setState({ data: Data.data.statewise, loading: false, districts: DistrictData.data })
        console.log(DistrictData, "this is data")
    }


    onStateClicked = (text) => {
        console.log("clickedd")
        let dist = this.state.districts
        let arr = []
       let data =  dist[text]
       for (let item in data.districtData){
       let eachdis = {... data.districtData[item] , dist : item} 
       
          arr.push(eachdis)
       }
          this.setState({eachDistrictData : arr , displayDist : true } )
    
    }

    render() {
        return (
            <div className="table-comp">
                <div>
                    <button 
                    className="buttoncls"
                    onClick={this.props.onClick}>Back</button>
                </div>

                <CovidTable data={this.state.data} loading={this.state.loading} onStateClicked={this.onStateClicked} />
                     
                      {this.state.displayDist ? <DistrictModal
                       data={this.state.eachDistrictData} 
                       loading="false" 
                       visible = "true" 
                       handleOk = { () => this.setState({displayDist : false})}
                       handleCancel = {() => this.setState({displayDist : false})}
                        /> :
                         " "}
            </div>
        )
    }

}

export default Body