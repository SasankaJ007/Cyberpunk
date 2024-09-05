import React,{ Component } from 'react';
import axios from 'axios';




export default class TelephoneDetails extends Component{ 
    constructor(props){
        super(props);

        this.state={
           phones:{}
        }
    }
    
  componentDidMount(){
     const id = this.props.match.params.id;

    axios.get(`/phone/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
              phones:res.data.post
           });
            console.log(this.state.phones);
        }
     });
    } 
  render() {
      const{PID,PhoneNumber,BID,SID,month,Date} = this.state.phones;
    return(
      <div style ={{marginTop:'20px'}} >
        <h4>{PID}</h4>
        <hr/>

        <dl className ="row">
          <dt className="col-sm-3">PhoneNumber</dt>
          <dd className="col-sm-9">{PhoneNumber}</dd>
           
          <dt className="col-sm-3">BID</dt>
          <dd className="col-sm-9">{BID}</dd>

          <dt className="col-sm-3">PID</dt>
          <dd className="col-sm-9">{PID}</dd>

          <dt className="col-sm-3">SID</dt>
          <dd className="col-sm-9">{SID}</dd>

          <dt className="col-sm-3">month</dt>
          <dd className="col-sm-9">{month}</dd>

          <dt className="col-sm-3">Date</dt>
          <dd className="col-sm-9">{Date}</dd>


        
        </dl>
      </div>
    
    )
    }
  }
