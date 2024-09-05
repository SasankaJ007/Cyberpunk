import React, { Component } from 'react';
import axios from 'axios';

export default class AddExportItems extends Component{

  constructor(props){
    super(props);
    this.state={
      itemID:"",
      itemName:"",
      itemCode:"",
      quantity:"",
      exportDate:"",
      exportAddress:"",
      itemCategory:"",
      errors:{}
    }
  }

  handleInputChange = (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  formValidation=()=>{
    const{itemID,itemCode}=this.state;
    let isValid=true;
    const errors={};

    if(itemID.trim().length<3){
      errors.itemIDlength="Item id must be of length 3 or higher";
      isValid=false;
    }

    if(!itemCode.includes("EX")){
      errors.itemCodeName="Item code must include EX";
      isValid=false;
    }
  
   this.setState({errors});
   return isValid;
  }

  onSubmit=(e) =>{
    e.preventDefault();
    const isValid=this.formValidation();

    if(isValid){
      const{itemID,itemName,itemCode,quantity,exportDate,exportAddress,itemCategory} = this.state;

      const data={
        itemID:itemID,
        itemName:itemName,
        itemCode:itemCode,
        quantity:quantity,
        exportDate:exportDate,
        exportAddress:exportAddress,
        itemCategory:itemCategory
      }

      console.log(data);

      axios.post(`/exportItem/add`,data).then((res) =>{

        if(res.data.success){
              this.setState(
              {
                itemID:"",
                itemName:"",
                itemCode:"",
                quantity:"",
                exportDate:"",
                exportAddress:"",
                itemCategory:""
              }
        
              )
          }  
      })
    }
    
  }

  render() {
    const{itemID,itemName,itemCode,quantity,exportDate,exportAddress,itemCategory,errors} = this.state;

    return(
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Add Export Item</h1>

      <form className="need-validation" noValidate>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>SID</label>
          <input type="text" 
          className="form-control" 
          name="itemID"
          placeholder="Enter the item id"
          value={this.state.itemID}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Item Name</label>
          <input type="text" 
          className="form-control" 
          name="itemName"
          placeholder="Enter the item name"
          value={this.state.itemName}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Item Code</label>
          <input type="text" 
          className="form-control" 
          name="itemCode"
          placeholder="Enter the item code"
          value={this.state.itemCode}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Quantity</label>
          <input type="number" 
          className="form-control" 
          name="quantity"
          placeholder="Enter the quantity"
          value={this.state.quantity}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Export Date</label>
          <input type="text" 
          className="form-control" 
          name="exportDate"
          placeholder="Enter the import date"
          value={this.state.exportDate}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Export Address</label>
          <input type="text" 
          className="form-control" 
          name="exportAddress"
          placeholder="Enter the import address"
          value={this.state.exportAddress}
          onChange={this.handleInputChange}/>
        </div>

        <div className="form-group" style={{marginBottom:'15px'}}>
          <label style={{marginBottom:'5px'}}>Item Category</label>
          <input type="text" 
          className="form-control" 
          name="itemCategory"
          placeholder="Enter the item category"
          value={this.state.itemCategory}
          onChange={this.handleInputChange}/>
        </div>


        <button type="submit" class="btn btn-success" style={{marginBottom:'15px'}} onClick={this.onSubmit}>
          <i className="far fa-check-square"></i>
          &nbsp;Submit Details
        </button>

        {Object.keys(errors).map((key)=>{
          return <div key={key}>{errors[key]}</div>
        })}
        
      </form>

  </div> 
    );
  }
}