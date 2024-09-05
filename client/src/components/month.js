import React,{Component}from 'react'
import axios from 'axios';
import { CalendarComponent} from '@syncfusion/ej2-react-calendars';
import ReactToPrint from 'react-to-print';



class LastMonth extends Component{
constructor(props){
super(props);
this.state={

months:[]


};



}


componentDidMount(){
    this.retriveMonths();
}


retriveMonths(){
axios.get("http://localhost:8003/").then(res=>{
if(res.data.success){
    this.setState({
        months:res.data.existingMonths
    })
    console.log(this.state.months)
}


})

}

render(){
    return(

         
    <div  >
       {this.state.months.map(months=>(
           <div>
          <div class="wrapper">

              <h1>{months.month}</h1>
 <hr/>






        <table id="acrylic">
            <thead>
                <tr>
                    <th>Qulity Parameeter</th>
                    <th >Original level of dinking water of the city</th>
                    <th>standed level</th>
                    <th>units</th>
                    <th>Parameeter definition</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>PH_vale</td>
                    <td className="text-danger">{months.PH_vale}</td>
                    <td>6.5–8.5</td>
                    <td>-</td>
                    <td>pH is a measure of how acidic/basic water is.pH is really a measure of the relative amount of free hydrogen and hydroxyl ions in the water</td>
                </tr>
                <tr>
                    <td>Turbidity_level</td>
                    <td className="text-danger">{months.Turbidity_level}</td>
                    <td>less than 5 NTU</td>
                    <td>Nephelometric Turbidity unit (NTU)</td>
                    <td>Turbidity is the measure of relative clarity of a liquid. It is an optical characteristic of water and is a measurement of the amount of light that is scattered by material in the water when a light is shined through the water sample.</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td className="text-danger">{months.Temperature}</td>
                    <td>20°C / 68°F</td>
                    <td>Celcius/Faranhite</td>
                    <td>Temperature of the drinking water</td>
                </tr>
                <tr>
                    <td>BOD_value</td>
                    <td className="text-danger">{months.BOD_value}</td>
                    <td>5</td>
                    <td>mg/L</td>
                    <td>Biochemical oxygen demand (BOD) represents the amount of oxygen consumed by bacteria and other microorganisms while they decompose organic matter under aerobic (oxygen is present) conditions at a specified temperature</td>
                </tr>
                <tr>
                    <td>Hardness</td>
                    <td className="text-danger">{months.Hardness}</td>
                    <td>120-170</td>
                    <td>mg/L</td>
                    <td>the amount of dissolved calcium and magnesium in the water.</td>
                </tr>
                <tr>
                    <td>Chloride</td>
                    <td className="text-danger">{months.Chloride}</td>
                    <td>250 </td>
                    <td>mg/L</td>
                    <td>Ammount of cloride in dringking water</td>
                </tr>
                <tr>
                    <td>DissolvedOxygen</td>
                    <td className="text-danger">{months.DissolvedOxygen}</td>
                    <td> 6.5-8 </td>
                    <td>mg/L</td>
                    <td>Dissolved oxygen (DO) is the amount of oxygen that is present in water</td>
                </tr>
                <tr>
                    <td>Ammonium level</td>
                    <td  className="text-danger">{months.Ammonium}</td>
                    <td>0.25 to 32.5 </td>
                    <td>mg/l</td>
                    <td>Ammount of Ammonium in dringking water</td>
                </tr>
             




            </tbody>
        </table>
    </div>
   
    <div class="float-right">
        <h4>Published on </h4>
    <CalendarComponent value={months.publicsheddate} />
    <h4>
    <i>Water Resource Management Unit of</i>
    
    <br/>
    <i>Cyberpunk SmartCity</i></h4>
    
</div>
           </div>




       ))}







    </div>
    
    )
    
    }
}

export default class monthPrint extends React.PureComponent {
    render() {
      return (
        <div>
          <ReactToPrint
             trigger={() => {
               // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
                //to the root node of the returned component as it will be overwritten.
               return <a href="#">Print this out!</a>;
            }}
             content={() => this.componentRef}
           />
           
           <LastMonth ref={el => (this.componentRef = el)} />
         </div>
       );
     }
   }










