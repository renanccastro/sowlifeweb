import React, { Component } from 'react';
import "./home.css"
import PrayRequestSource from "../../network/PrayRequestSource"
import PrayCard from '../PrayCard/prayCard';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    PrayRequestSource.getUserPrayRequests().then((response)=>{
      this.setState({data:response})
    })
  }


  render() {
    return (
      <div className="row list-view">
        {this.state.data.map(
          (obj) => {
            return <PrayCard data={obj} messageOnClick={(data)=>{

            }}></PrayCard>
          }
        )
        }
      </div>

    );
  }
}

export default Home;
