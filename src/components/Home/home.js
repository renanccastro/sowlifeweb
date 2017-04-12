import React, { Component } from 'react';
import "./home.css"
import moment from "moment"
import PrayRequestSource from "../../network/PrayRequestSource"
import PrayCard from '../PrayCard/prayCard';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    PrayRequestSource.getUserPrayRequests().then((response)=>{
      response.sort((a, b)=>{
        let findFunction = (item) => {
          let id = Object.keys(item)[0];
          if ( id == localStorage._id)
            return id;
        };
        let dateA = a.GotDate.find(findFunction)
        let dateB = b.GotDate.find(findFunction)
        let momentA = moment(dateA[localStorage._id])
        let momentB = moment(dateB[localStorage._id])

        if (momentA > momentB) return -1;
        else if (momentA < momentB) return 1;
        else return 0;
      })
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
