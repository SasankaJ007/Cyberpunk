import React,{Component} from 'react';
import axios from 'axios'

export default class Form  extends Component{



state={

  
    email:'',
    message:'',
    sent:false
}

//handle input



handleEmail=(e)=>{


    this.setState({

    email:e.target.value

    })
}
handleMessage=(e)=>{


    this.setState({

    message:e.target.value

    })
}


//end of handle input
formSubmit=(e)=>{
e.preventDefault();

let data ={
   
    email:this.state.email,
    message:this.state.message

}
axios.post('/api/forma',data)
.then(res=>{
    this.setState({
        sent:true,
     },this.refressForm())
}).catch(()=>{
    console.log('message not send');
})

}

//for reseting initial data

refressForm=()=>{
   this.setState({
       
        email:"",
        message:"",

})

setTimeout(()=>{
this.setState({
    sent:false,
})

},3000)




}


render(){
return(

    <div className="container">
     <form onSubmit={this.formSubmit}>
      <div className="sigleItem">
     
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


<div class="container contact">
	<div class="row">
		<div class="col-md-3">
			<div class="contact-info">
				<img src="https://image.ibb.co/kUASdV/contact-image.png" alt="image"/>
				<h2>Send Emails</h2>
				<h4>Send announcements about water Inntrruptions</h4>
			</div>
		</div>
		<div class="col-md-9">


			<div class="contact-form">
			


				

				<div class="form-group">
				  <label class="control-label col-sm-2" for="email">Email:</label>
				  <div class="col-sm-10">
					<input type="email" 
                    class="form-control"
                     id="email" 
                     placeholder="Enter email" 
                     name="email"
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                     value={this.state.email} required
                     onChange={this.handleEmail}/>

<div id="validationServerUsernameFeedback" class="invalid-feedback">
        Please choose a username.
      </div>
				  </div>
				</div>

				<div class="form-group">
				  <label class="control-label col-sm-2" for="comment">Message:</label>
				  <div class="col-sm-10">
					<textarea class="form-control" 
                    rows="5" 
                    id="message"
                    placeholder="Enter the message . . ."  
                    name="message"
                    value={this.state.message} required
                    onChange={this.handleMessage}></textarea>
				  </div>
				</div>
                 
                 

                <div class={this.state.sent ?'msg msgAppear':'msg'}> 
                     Message has been send 
                 </div>



				<div class="form-group">        
				  <div class="col-sm-offset-2 col-sm-10">
					<button type="submit" class="btn btn-default">Submit</button>
				  </div>
				</div>
			</div>
		</div>
	</div>
</div>


      </div>

     </form>
        
    </div>
)

}
}
