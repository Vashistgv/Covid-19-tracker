import React from 'react';
import CovidTable from './component/Table/Table'
import API from "./utils/API";
//import StateTable from './component/Table/StatewiseTable';


class Body extends React.Component {
   constructor(props){
       super(props)
       this.state = {
        
        loading : true ,
        data : [],
        //sdata: []
    }
   }


    async  componentDidMount() {
        
        // Load async data.
        let Data = await API.get('/data.json');
         console.log(Data.data.statewise , "api called")       
  this.setState({ data : Data.data.statewise , loading  : false })

//   let sData = await API.get('/state_district_wise.json');
//          console.log(sData.data , "Dapi called")       
//   this.setState({ sdata : sData.data , loading  : false })
    }

    render() {
        return (
            <div>

                <CovidTable  data={this.state.data} loading = {this.state.loading} />
                {/* <StateTable data={this.state.sdata} loading={this.state.loading} /> */}
            </div>
        )
    }

}

export default Body