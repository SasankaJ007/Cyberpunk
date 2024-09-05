import React,{ Component } from 'react';




export default class page extends Component{
  
  render(){
    return(
     
      
      <div>
       
         <br></br>
         <center>
        
         <img src={process.env.PUBLIC_URL +"/add.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/search.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/update.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/message.png"} widthe="500" alt="Logo" />;
         <img src={process.env.PUBLIC_URL +"/repo.png"} widthe="500" alt="Logo" />;
         </center>
         
         &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;
         <a className = "btn btn-warning" href ={'/add'}>
         <i className ="fas fa-edit"></i> &nbsp;ADD </a> &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;
                   
         <a className = "btn btn-warning" href ={'/search'}>
         <i className ="fas fa-edit"></i> &nbsp;SEARCH</a> &nbsp;&nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;

         <a className = "btn btn-warning" href ={'/list'}>
         <i className ="fas fa-edit"></i> &nbsp;UPDATE</a>&nbsp;

         <a className = "btn btn-warning" href ={'/list'}>
         <i className ="fas fa-edit"></i> &nbsp;DELETE</a> &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp; 
        

         <a className = "btn btn-warning" href ={'/sendMessage'}>
         <i className ="fas fa-edit"></i> &nbsp;Announcements</a> &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;

         <a className = "btn btn-warning" href ={'/report'}>
         <i className ="fas fa-edit"></i> &nbsp;Report Generation</a>


         
         <br/> 
         <br/>
         <br/>
         <center>
         <img src={process.env.PUBLIC_URL +"/page.png"} widthe="1000" alt="Logo" />;
        </center>
       
        
      </div>
    
    )
  }
}
