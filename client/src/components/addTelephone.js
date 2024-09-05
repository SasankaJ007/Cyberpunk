import React,{ Component } from 'react';
import axios from 'axios';


export default class addTelephone extends Component{
  constructor(props){
     super(props);
     this.state={
         PID:"",
         BID:"",
         PhoneNumber:"",
         SID:"",
         month:"",
         Date:"",
         errors:{}


     }
  }

  handleInputChange = (e) =>{      
       const{name,value} =e.target;

       this.setState({
         ...this.state,
          [name]:value
       })
      
  }

  formValidation=()=>{
    const{BID,NoOfUnit,Amount}=this.state;
    let isValid=true;
    const errors={};
    if(BID.trim().length<3){
      errors.BIDlength="Building id must length or greater";
      isValid=false;
    }
    if(!BID.includes("B")){
      errors.BIDB="Building id should include B";
      isValid=false;
    }
  
   this.setState({errors});
   return isValid;
  }
 
   /*function validateForm() {
      let x = document.forms["myForm"]["fname"].value;
      if ((x == "") || (x== "/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g")){
        alert("Name must be filled out");
        return false;
      }
    }
    function formatPhoneNumber(phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3];
      }
      return null;
    }
    let nam = e.target.name;
    let val = e.target.value;
    let err = '';
    if (nam === "PhoneNumber") {
      if (val !="" && !formatPhoneNumber(val)) {
        err = <strong>PhoneNumber must be a number</strong>;
        $("phoneNumber").val("");
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  }*/
  onSubmit =(e) =>{
    e.preventDefault();
    const isValid=this.formValidation();

    if(isValid){ 
    const{PID,PhoneNumber,BID, SID,month,Date} = this.state;

    const data ={
      PID:PID,
      PhoneNumber:PhoneNumber,
      BID:BID,
      SID:SID,
      month:month,
      Date:Date
    }

      console.log(data)
      axios.post("/phone/add",data).then((res) =>{
        if(res.data.success){
          alert("Added Successfully!")
           this.setState({
               PID:"",
               PhoneNumber:"",
               BID:"",
               SID:"",
               month:"",
               Date:""
           }
           )
          }
      });
     
  }

}
render() {
  const{PID,PhoneNumber,BID,SID,month,Date,errors}=this.state
  return(
    
    <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal" > ADD TELEPHONES</h1>
        <form  onSubmit={this.onSubmit}>
           <div className="form-group"  style={{marginBottom:'15px'}}>
             <label style={{marginBottom:'5px'}}> PID </label>
             <input type="text"
             className="form-control"
             name="PID"
             placeholder="enter phoneID" 
             value={this.state.PID}
             onChange={this.handleInputChange}required/>
             
             </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Telephone Number</label>
                <input type ="number"
                className="form-control"
                name="PhoneNumber"
                placeholder="Enter phone Number"
                pattern="/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g"
                value={this.state.PhoneNumber}
                maxlength = "10"
                minLength ="10"
                onChange={this.handleInputChange}required/>
           
            </div>
            
            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>BID</label>
                <input type="text"
                className="form-control"
                name="BID"
                placeholder="Enter Description"
                value={this.state.BID}
                onChange={this.handleInputChange}required/>
               
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>SID</label>
                <input type="text"
                className="form-control"
                name="SID"
                placeholder="Enter StockID"
                value={this.state.SID}
                onChange={this.handleInputChange}required/>
              
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Month</label>
                <input type="number"
                className="form-control"
                name="month"
                placeholder="Enter Month you add the phone"
                min="1" max="12"
                value={this.state.month}
                onChange={this.handleInputChange}required/>
                 
            </div>

            <div className="form-group" style={{marginBotton:'15px'}}>
                <label style={{marginBotton:'5px'}}>Date</label>
                <input type="number"
                className="form-control"
                name="Date"
                placeholder="Enter Date you add the phone"
                min="1" max="31"
                value={this.state.Date}
                onChange={this.handleInputChange}required/>
               
            </div>

           
            
            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
             &nbsp; ADD PHONE
            </button>

            {Object.keys(errors).map((key)=>{
      return <div key={key}>{errors[key]}</div>
    })}
           
         </form>
         </div>
    
    )
  }
}

 

















