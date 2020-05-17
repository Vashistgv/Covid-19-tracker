import React from 'react'
import TestTable from './component/Table/TestTable'
import API from './utils/API'

class TestBody extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
 async   componentDidMount() {
        let Data = await API.get('/data.json')
        this.setState({
            data: Data.data.statewise
        })
    }
    render() {
        return(
            <div>
                <TestTable data={this.state.data} />
            </div>
        )
    }
}
export default TestBody