import React,{ Component } from "react";
import axios from "axios";



 export default class Editmonth extends Component{

    constructor(props){
        super(props);
        this.state={
            
    month:"",
    PH_vale:"",
    Temperature:"",
    Turbidity_level:"",
    BOD_value:"",
    Hardness:"",
    Chloride:"",
    DissolvedOxygen:"",
    Ammonium:"",
    publicsheddate:""
        
        }
        
        }
        
        
        
        handleInputChange = (e) =>{
        
            const {name,value}=e.target;
        
            this.setState({
           ...this.state,
           [name]:value
        
        
            })
        
        }
        
        
          onSubmit=(e)=>{
          e.preventDefault();
          const id=this.props.match.params.id;
          const{month,PH_vale,Temperature,Turbidity_level,BOD_value,Hardness,Chloride,DissolvedOxygen,Ammonium,publicsheddate}=this.state;
          
          const data={
            month:month,
            PH_vale:PH_vale,
            Temperature:Temperature,
            Turbidity_level:Turbidity_level,
            BOD_value:BOD_value,
            Hardness:Hardness,
            Chloride:Chloride,
            DissolvedOxygen:DissolvedOxygen,
            Ammonium:Ammonium,
            publicsheddate:publicsheddate
          }
        
        console.log(data);

        axios.put(`/month/update/${id}`,data).then((res)=>{
          if(res.data.success){
              alert("month's details update successfully")
              this.setState(
              {
                month:"",
                PH_vale:"",
                Temperature:"",
                Turbidity_level:"",
                BOD_value:"",
                Hardness:"",
                Chloride:"",
                DissolvedOxygen:"",
                Ammonium:"",
                publicsheddate:""
        
              }
        
              )
          }
        
        })
        
          }

    componentDidMount(){

        const id=this.props.match.params.id;
        axios.get(`/month/${id}`).then((res)=>{
    
        if (res.data.success){
            this.setState({
                month:res.data.month.month,
                PH_vale:res.data.month.PH_vale,
                Temperature:res.data.month.Temperature,
                Turbidity_level:res.data.month.Turbidity_level,
                BOD_value:res.data.month.BOD_value,
                Hardness:res.data.month.Hardness,
                Chloride:res.data.month.Chloride,
                DissolvedOxygen:res.data.month.DissolvedOxygen,
                Ammonium:res.data.month.Ammonium,
                publicsheddate:res.data.month.publicsheddate
            
            });
            console.log(this.state.month);
        }
    
    
        })
    }



 render(){
    return(

      
      <div>
    <h1 >Edite  Month's details</h1>
   
           
      <form className="need-validation" noValidate>
      <div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
      <h2>Water Quality Parameeters</h2>
				<img src="/Home/wquality1.png"  width="200" height="200"alt="image"/>
			
			</div>
		</div>


       <div class="col-md-9">
       <div class="contact-form">

      <div class="row">
       <div class="col-md-4 ">

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Month</label>
    <input type="month" 
    className="form-control" 
    name="month"
    placeholder="Enter the month"
    value={this.state.month}
    onChange={this.handleInputChange}/>
   
  </div>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}> PH value</label>
    <input type="text" 
    className="form-control" 
    name="PH_vale"
    placeholder="Enter the PH value"
    value={this.state.PH_vale}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Temperature</label>
    <input type="text" 
    className="form-control" 
    name="Temperature"
    placeholder="Enter the Temperature"
    value={this.state.Temperature}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Turbidity_level</label>
    <input type="text" 
    className="form-control" 
    name="Turbidity_level"
    placeholder="Enter the month"
    value={this.state.Turbidity_level}
    onChange={this.handleInputChange}/>
   
  </div>

  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>BOD value</label>
    <input type="text" 
    className="form-control" 
    name="BOD_value"
    placeholder="Enter the BOD value"
    value={this.state.BOD_value}
    onChange={this.handleInputChange}/>
   
  </div>
</div>
<div class="col-md-4 ">

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Hardness (as CaCO3) </label>
    <input type="text" 
    className="form-control" 
    name="Hardness"
    placeholder="Enter the Hardness"
    value={this.state.Hardness}
    onChange={this.handleInputChange}/>
   
  </div>

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Chloride</label>
    <input type="text" 
    className="form-control" 
    name="Chloride"
    placeholder="Enter the Chloride"
    value={this.state.Chloride}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>DissolvedOxygen level </label>
    <input type="text" 
    className="form-control" 
    name="DissolvedOxygen"
    placeholder="Enter the DissolvedOxygen"
    value={this.state.DissolvedOxygen}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Ammonium</label>
    <input type="text" 
    className="form-control" 
    name="Ammonium"
    placeholder="Enter the Ammonium"
    value={this.state.Ammonium}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>publicsheddate</label>
    <input type="date" 
    className="form-control" 
    name="publicsheddate"
    placeholder="Enter the publicsheddate"
    value={this.state.publicsheddate}
    onChange={this.handleInputChange}/>
   
  </div>

 </div>
</div>
  






 <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
     <i className="far fa-check-square"></i>
     &nbsp;
     update</button>
     </div>
  </div>
 
  </div>
</div>
</form>

        </div>
        
    )
 }
 


 }