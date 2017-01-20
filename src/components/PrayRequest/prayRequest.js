import React, {Component} from 'react';
import PrayCard from '../PrayCard/prayCard';
import './prayRequest.css'
class PrayRequest extends Component{
    render() {
        return (
          <div className="css-pray-container">
              <PrayCard id={this.props.id} data={{}}></PrayCard>
          </div>
        );
    }
}
export default PrayRequest;
