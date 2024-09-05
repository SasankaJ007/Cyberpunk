import React, { Component } from 'react';
import axios from 'axios';

export default class ImportItemsDetails extends Component{
  constructor(props){
    super(props);

    this.state={
      importItems:{}
    };
  }

  componentDidMount(){

    const id=this.props.match.params.id;
    axios.get(`/importItem/retreive/${id}`).then((res)=>{

      if (res.data.success){
          this.setState({
              importItems:res.data.importItems
          });
          console.log(this.state.importItems);
      }

    });
  }

  render() {

    const {itemID,itemName,itemCode,quantity,importDate} = this.state.importItems;
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

            <dt className="col-sm-3">Import Date</dt>
            <dd className="col-sm-9">{importDate}</dd>
          </dl>
        </div> 
    )
  }
}