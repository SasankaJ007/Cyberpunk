import React, { Component } from 'react';
import axios from 'axios';

export default class ImportHome extends Component{
  constructor(props){
    super(props);

    this.state={
      importItems:[]
    };
  }

  componentDidMount(){
    this.retriveItems();
  }

  retriveItems(){
    axios.get("/importItem/retreive").then(res =>{
      if(res.data.success){
        this.setState({
          importItems:res.data.existingItem
        });

        console.log(this.state.importItems)
      }

    });
  }

  onDelete = (id) =>{
    axios.delete(`/importItem/delete/${id}`).then((res) =>{
      alert("The item deleted successfully");
      this.retriveItems();
    })
  }

  filterData(importItems,searchKey){
    const result = importItems.filter((importItems) =>
      importItems.itemName.includes(searchKey)||
      importItems.itemCode.includes(searchKey)||
      importItems.importDate.includes(searchKey)
    )

    this.setState({importItems:result})
  }

  handleserchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("/importItem/retreive").then(res=>{
      if(res.data.success){
        this.filterData(res.data.existingItem,searchKey)
      }
    }); 
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h2>All Import Items</h2>
            <br/>
          </div>

          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="seacrhImportItems"
              onChange={this.handleserchArea}>
            </input>
          </div>
        </div>

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">SID</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Code</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Import Date</th>
                  <th scope="col">Item Category</th>
                </tr>
              </thead>

              <tbody>
                {this.state.importItems.map((importItems, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`/importItem/retreive/${importItems._id}`} style={{textDecoration:'none'}}>
                        {importItems.itemID}
                      </a>
                    </td>
                    <td>{importItems.itemName}</td>
                    <td>{importItems.itemCode}</td>
                    <td>{importItems.quantity}</td>
                    <td>{importItems.importDate}</td>
                    <td>{importItems.itemCategory}</td>
                    
                    <td>
                      <a className="btn btn-warning" href={`/importItem/edit/${importItems._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>

                      &nbsp;

                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(importItems._id)}>
                        <i className="fas fa-trash"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

            <button className="btn btn-success">
              <a href="/importItem/additem" style={{textDecoration:'none',color:'white'}}>Add Import Item</a>
            </button>
      </div>
    )
  }
}
