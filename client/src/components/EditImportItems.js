import React, { Component } from 'react';
import axios from 'axios';

export default class EditImportItems extends Component{

  constructor(props){
    super(props);
    this.state={
      itemID:"",
      itemName:"",
      itemCode:"",
      quantity:"",
      importDate:"",
      itemCategory:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value}=e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }

  onSubmit=(e) =>{
    e.preventDefault();
    const id=this.props.match.params.id;
    const{itemID,itemName,itemCode,quantity,importDate,itemCategory} = this.state;

    const data={
      itemID:itemID,
      itemName:itemName,
      itemCode:itemCode,
      quantity:quantity,
      importDate:importDate,
      itemCategory:itemCategory
    }

    console.log(data);

    axios.put(`/importItem/update/${id}`,data).then((res) =>{

      if(res.data.success){
            alert("Item Updated Successfully")
            this.setState(
            {
              itemID:"",
              itemName:"",
              itemCode:"",
              quantity:"",
              importDate:"",
              itemCategory:""
            }
      
            )
        }
      
    })
  }

  componentDidMount(){

    const id=this.props.match.params.id;

    axios.get(`/importItem/retreive/${id}`).then((res)=>{
      if (res.data.success){
          this.setState({
              itemID:res.data.importItems.itemID,
              itemName:res.data.importItems.itemName,
              itemCode:res.data.importItems.itemCode,
              quantity:res.data.importItems.quantity,
              importDate:res.data.importItems.importDate,
              itemCategory:res.data.importItems.itemCategory
          });
          console.log(this.state.importItems);
      }

    });
  }

  render() {
    return(
      <div className="col-md-8 mt-4 mx-auto">
      <h1 className="h3 mb-3 font-weight-normal">Edit Import Item</h1>

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
          <label style={{marginBottom:'5px'}}>Import Date</label>
          <input type="text" 
          className="form-control" 
          name="importDate"
          placeholder="Enter the import date"
          value={this.state.importDate}
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
          &nbsp;Update Details
        </button>
        
      </form>

  </div> 
    );
  }
}