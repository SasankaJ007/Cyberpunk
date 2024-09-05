import React, { Component } from 'react';
import axios from 'axios';

export default class ExportHome extends Component{
  constructor(props){
    super(props);

    this.state={
      exportItems:[]
    };
  }

  componentDidMount(){
    this.retriveItems();
  }

  retriveItems(){
    axios.get("/exportItem/retreive").then(res =>{
      if(res.data.success){
        this.setState({
          exportItems:res.data.existingItem
        });

        console.log(this.state.exportItems)
      }

    });
  }

  onDelete = (id) =>{
    axios.delete(`/exportItem/delete/${id}`).then((res) =>{
      alert("The item deleted successfully");
      this.retriveItems();
    })
  }

  filterData(exportItems,searchKey){
    const result = exportItems.filter((exportItems) =>
      exportItems.itemName.includes(searchKey)||
      exportItems.itemCode.includes(searchKey)||
      exportItems.exportDate.includes(searchKey)||
      exportItems.exportAddress.includes(searchKey)
    )

    this.setState({exportItems:result})
  }

  handleserchArea = (e) =>{
    const searchKey=e.currentTarget.value;

    axios.get("/exportItem/retreive").then(res=>{
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
            <h2>All Export Items</h2>
            <br/>
          </div>

          <div className="col-lg-3 mt-2 mb-2">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              name="seacrhExportItems"
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
                  <th scope="col">Export Date</th>
                  <th scope="col">Export Address</th>
                  <th scope="col">Item Category</th>
                </tr>
              </thead>

              <tbody>
                {this.state.exportItems.map((exportItems, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>
                      <a href={`/exportItem/retreive/${exportItems._id}`} style={{textDecoration:'none'}}>
                        {exportItems.itemID}
                      </a>
                    </td>
                    <td>{exportItems.itemName}</td>
                    <td>{exportItems.itemCode}</td>
                    <td>{exportItems.quantity}</td>
                    <td>{exportItems.exportDate}</td>
                    <td>{exportItems.exportAddress}</td>
                    <td>{exportItems.itemCategory}</td>
                    
                    <td>
                      <a className="btn btn-warning" href={`/exportItem/edit/${exportItems._id}`}>
                        <i className="fas fa-edit"></i>&nbsp;Edit
                      </a>

                      &nbsp;

                      <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(exportItems._id)}>
                        <i className="fas fa-trash"></i>&nbsp;Delete
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

            <button className="btn btn-success">
              <a href="/exportItem/additem" style={{textDecoration:'none',color:'white'}}>Add Export Item</a>
            </button>
      </div>
    )
  }
}
