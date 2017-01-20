import React, {Component} from 'react';
import PrayCard from '../PrayCard/prayCard';
import './prayRequest.css'
import PrayRequestSource from "../../network/PrayRequestSource"

class PrayRequest extends Component{
  constructor(props) {
    super(props);
    this.state = {data:{}};
  }

  componentDidMount() {
    console.log(this.props)
    PrayRequestSource.getById(this.props.params.id).then((response)=>{
      console.log(response)
      this.setState({data:response})
    })
  }

  render() {
      return (
        <div className="css-pray-container">
            <PrayCard data={this.state.data}></PrayCard>
        </div>
      );
  }
}
export default PrayRequest;
