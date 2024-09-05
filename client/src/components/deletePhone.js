import React,{ Component } from 'react';
import axios from 'axios';




export default class deletePhone extends Component{
  constructor(props){
     super(props);
    this.state={
      phones:[]
    };
  }
  componentDidMount(){
     this.retrievePhones();

  }
  retrievePhones(){
    axios.get("/phone/ret").then(res =>{
        if(res.data.success){
          this.setState({
            phones:res.data.existingPhones
          });
            console.log(this.state.phones);
        }
    });
  }
  render(){
    return(
      <div className ="container">
         <p> Telephone Numbers </p>
        
          <table className = "table">
            <thead>
              
              <tr> 
                <th scope = "col"># </th>
                <th scope = "col">PID</th>
                <th scope = "col">PhoneNumber</th>
                <th scope = "col">BID</th>
                <th scope = "col">SID </th>
                <th scope = "col">month</th>
                <th scope = "col">Date</th>
                <th scope = "col">action </th>

              </tr>
            </thead>
            <tbody>
              {this.state.phones.map((phones,index) =>(
                <tr>
                  <th scope = "row"> {index +1}</th>
                  <td>
                      <a href ={`/phone/${phones._id}`}  style ={{textDecoration:'none'}}>
                      
                      {phones.PID}
                      </a>
                      </td>
                  <td>{phones.PhoneNumber}</td>
                  <td>{phones.BID}</td>
                  <td>{phones.SID}</td>
                  <td>{phones.month}</td>
                  <td>{phones.Date}</td>
                  <td>
                   
                     <a className = "btn btn-danger" href ="#">
                       <i className ="far fa-trash-alt"></i> &nbsp;Delete
                    </a>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className ="btn btn-success"><a href ="/add"style ={{textDecoration:'none',color:'white'}}> Add New phones</a>

          </button>
       
      </div>
    )
  }
}
