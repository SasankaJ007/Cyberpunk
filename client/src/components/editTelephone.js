import React,{ Component } from 'react';
import axios from 'axios';



 export default class editTelephone extends Component{

    constructor(props){
        super(props);
        this.state={  
          PID:"",
          PhoneNumber:"",
          BID:"",
          SID:"",
          month:"",
          Date:"",
        
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
          const{PID,PhoneNumber,BID,SID,month,Date}=this.state;
          
          const data={
              PID:PID,
              PhoneNumber:PhoneNumber,
              BID:BID,
              SID:SID,
              month:month,
              Date:Date,
          }
        
        console.log(data);

        axios.put(`/phone/update/${id}`,data).then((res)=>{
          if(res.data.success){
              alert("Updated Succesfully!")
              this.setState(
              {
                PID:"",
                PhoneNumber:"",
                BID:"",
                SID:"",
                month:"",
                Date:""

        
              }
        
              )
          }
        
        })
        
          }

    componentDidMount(){

        const id=this.props.match.params.id;
        axios.get(`/phone/${id}`).then((res)=>{
    
        if (res.data.success){
            this.setState({
              PID:res.data.post.PID,
              PhoneNumber:res.data.post.PhoneNumber,
              BID:res.data.post.BID,
              SID:res.data.post.SID,
              month:res.data.post.month,
              Date:res.data.post.Date,
            });
            console.log(this.state.post); //post or phones
        }
    
    
        })
    }



 render(){
    return(


        <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal">Edit Telephones</h1>
        <form className="need-validation" noValidate>
   

  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>PID</label>
    <input type="text" 
    className="form-control" 
    name="PID"
    placeholder="Enter phoneID"
    value={this.state.PID}
    onChange={this.handleInputChange}/>
   
  </div>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}> Telephone Number</label>
    <input type="text" 
    className="form-control" 
    name="PhoneNumber"
    placeholder="Enter PhoneNumber"
    value={this.state.PhoneNumber}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Temperature</label>
    <input type="text" 
    className="form-control" 
    name="BID"
    placeholder="Enter the BID"
    value={this.state.BID}
    onChange={this.handleInputChange}/>
   
  </div>
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>StockID</label>
    <input type="text" 
    className="form-control" 
    name="SID"
    placeholder="Enter the month"
    value={this.state.SID}
    onChange={this.handleInputChange}/>
   
  </div>

  
  <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Enter Month</label>
    <input type="text" 
    className="form-control" 
    name="month"
    placeholder="Enter month"
    value={this.state.month}
    onChange={this.handleInputChange}/>
  </div>

    <div className="form-group" style={{marginBottom:'15px'}}>
    <label style={{marginBottom:'5px'}}>Enter Date</label>
    <input type="text" 
    className="form-control" 
    name="Date"
    placeholder="Enter Date"
    value={this.state.Date}
    onChange={this.handleInputChange}/>
  </div>


 <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
     <i className="far fa-check-square"></i>
     &nbsp;
     update
     </button>
     </form>

        </div>
    )
 }
 

 }
 