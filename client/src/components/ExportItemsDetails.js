import React, { Component } from 'react';
import axios from 'axios';

export default class ExportItemsDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      exportItems:{}
    };
  }

  componentDidMount(){

    const id=this.props.match.params.id;
    axios.get(`/exportItem/retreive/${id}`).then((res)=>{

      if (res.data.success){
          this.setState({
              exportItems:res.data.exportItems
          });
          console.log(this.state.exportItems);
      }

    });
  }

  render() {

    const {itemID,itemName,itemCode,quantity,exportDate,exportAddress,itemCategory} = this.state.exportItems;
    return(
        <div style={{marginTop:'20px'}}> 
          <h4>{itemID}</h4>
          <hr/>

          <dl className="row">
            <dt className="col-sm-3">Item Name</dt>
            <dd className="col-sm-9">{itemName}</dd>

            <dt className="col-sm-3">Item Code</dt>
            <dd className="col-sm-9">{itemCode}</dd>

            <dt className="col-sm-3">Quantity</dt>
            <dd className="col-sm-9">{quantity}</dd>

            <dt className="col-sm-3">Export Date</dt>
            <dd className="col-sm-9">{exportDate}</dd>

            <dt className="col-sm-3">Export Address</dt>
            <dd className="col-sm-9">{exportAddress}</dd>

            <dt className="col-sm-3">Item Category</dt>
            <dd className="col-sm-9">{itemCategory}</dd>
          </dl>
        </div> 
    )
  }
}