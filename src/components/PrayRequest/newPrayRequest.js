import React, {Component} from 'react';
import PrayCard from '../PrayCard/prayCard';
import './newPrayRequest.css'
import PrayRequestSource from "../../network/PrayRequestSource"
import Message from "../message";

class NewPrayRequest extends Component{
  constructor(props) {
    super(props);
    this.state = {data:{}, description:"", error:[]};
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
      return (
        <div className="row">
          <Message message={this.state.error}/>
          <div className="css-pray-new-container">
              <PrayCard profile={JSON.parse(localStorage.profile)} newPray={true} onChange={
                (event) => {
                  this.setState({description: event.target.value})
                }
              }></PrayCard>
          </div>
          <br/>
          <div className="col-sm-offset-2 col-sm-8 col-md-offset-2 col-md-8">
            <button type="button" className="btn btn-success btn-block" onClick={()=>{
              if(this.state.description == "" || !this.state.description){
                this.setState({error: {message:"Digite uma mensagem!", type:"danger"}})
                return
              }
              PrayRequestSource.postNewPray(this.state.description).then((response)=>{
                this.setState({error: {message:"Oração enviada com sucesso!", type:"success"}})
              }).catch(()=>{
                this.setState({error: {message:"Ocorreu um erro, tente novamente mais tarde!", type:"danger"}})
              })
            }}>ENVIAR PEDIDO</button>
          </div>
        </div>
      );
  }
}
export default NewPrayRequest;
