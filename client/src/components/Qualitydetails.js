import React,{ Component } from "react";
import axios from "axios";
import { CalendarComponent} from '@syncfusion/ej2-react-calendars';



 export default class Qualitydetails extends Component{

    constructor(props){
    super(props);
    this.state={
        month:{}
    };

    }
componentDidMount(){

    const id=this.props.match.params.id;
    axios.get(`/month/${id}`).then((res)=>{

    if (res.data.success){
        this.setState({
            month:res.data.month
        });
        console.log(this.state.month);
    }


    })
}


 render(){

   const{month,PH_vale,Temperature,Turbidity_level,BOD_value,Hardness,Chloride,DissolvedOxygen,publicsheddate}=this.state.month;

     return(

        <div className="container">
         <div style={{marginTop:'20px'}}>

       <h1>{month}</h1>
       <hr/>
       <dl className="row">

       <dt className="col-sm-3">PH_vale</dt>
       <dd className="col-sm-9">{PH_vale}</dd>

       <dt className="col-sm-3">Temperature</dt>
       <dd className="col-sm-9">{Temperature}</dd>

       <dt className="col-sm-3">Turbidity_level</dt>
       <dd className="col-sm-9">{Turbidity_level}</dd>

       <dt className="col-sm-3">BOD_value</dt>
       <dd className="col-sm-9">{BOD_value}</dd>


       <dt className="col-sm-3">Hardness</dt>
       <dd className="col-sm-9">{Hardness}</dd>
       
       <dt className="col-sm-3">Chloride</dt>
       <dd className="col-sm-9">{Chloride}</dd>

       <dt className="col-sm-3">DissolvedOxygen</dt>
       <dd className="col-sm-9">{DissolvedOxygen}</dd>








       </dl>

       <br/>
       
       <p><b>publicshed on</b> </p>
        <CalendarComponent value={publicsheddate} />

         </div>
         </div>
     )
 }
 


 }