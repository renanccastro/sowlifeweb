import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import Avatar from 'react-avatar';
import ProfileSource from "../../network/ProfileSource";
import moment from "moment";
import './prayCard.css'
class PrayCard extends Component {
  constructor(props) {
    super(props);
    if(props.profile){
      this.state = {profile: props.profile}
    }else{
      this.state = {profile:{name:"FB", photo:""}};
    }
  }
  componentDidMount(){
    if(this.props.data && this.props.data.Author){
      let key = "p"+this.props.data.Author
      let savedProfile = localStorage[key];
      if(savedProfile && savedProfile != "undefined"){
        let parsedProfile = JSON.parse(savedProfile)
        this.setState({profile:parsedProfile})
        ProfileSource.getUserProfileById(this.props.data.Author, parsedProfile.LastModified).then((response)=>{
          console.log("recebeu response")
          localStorage[key] = JSON.stringify(response)
          this.setState({profile:response})
        })
      }else{
        ProfileSource.getUserProfileById(this.props.data.Author).then((response)=>{
          localStorage[key] = JSON.stringify(response)
          this.setState({profile:response})
        })
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(JSON.stringify(prevProps) != JSON.stringify(this.props)){
      console.log("Author:")
      console.log(this.props.data.Author)
      ProfileSource.getUserProfileById(this.props.data.Author).then((response)=>{
        this.setState({profile:response})
      })
    }
  }

  render() {
    return (
      <div className="css-pray-card ">

        <div className="css-pray-header">
            <div className="css-avatar ">
              <Avatar name={this.state.profile.name} size="70" round={true} src={
                this.state.profile.photo ?
                (
                  this.state.profile.photo.search("data:image/jpeg;base64,") == 0
                  ?
                  this.state.profile.photo :
                  "data:image/jpeg;base64,"+this.state.profile.photo
                )
                : ""
              }/>


            </div>
            <div className="css-name">
              <span className="css-name-span">{this.state.profile.name}</span><br/>
              <span className="css-date-span">Enviado em {
                this.props.newPray ? moment().format("DD/MM/YYYY") :
                moment(this.props.data.CreationDate).format("DD/MM/YYYY")
              }</span>
            </div>
            <div className="css-icon">
              <img className="css-icon-img" role="presentation" height="40px" src="/img/pray.png"/>
            </div>
          </div>

        <div className="css-body-text">
          {
            this.props.newPray ? <textarea className="form-control text-area" onChange={this.props.onChange}/> :
              <span>{this.props.data.Description}</span>
          }
        </div>

        <div className="css-pray-bottom-bar">
          <div className="left-button" onClick={()=>{
            this.props.messageOnClick(this.props.data)
          }}>
            <FontAwesome name='comment-o' size="2x"/>
            <span> Mensagem</span>
          </div>
          <div className="right-button" onClick={()=>{
            this.props.remindOnClick(this.props.data)
          }}>
            <FontAwesome className="valign" name='clock-o' size="2x"/>
            <span> Lembrete</span>
          </div>
        </div>
      </div>
    )
  }
}
export default PrayCard;
