import React ,{Component} from 'react'
import axios from 'axios';
import ReactToPrint from "react-to-print";
import Swal from 'sweetalert2'
import jspdf from 'jspdf'
import "jspdf-autotable"

export default class AllBills extends Component{
constructor(props){
super(props);

this.state={
waterbills:[]
};

}

componentDidMount(){
  this.retriveWaterbills();
}

retriveWaterbills(){
axios.get("/waterbill").then(res=>{
  if(res.data.success){
  this.setState({
    waterbills:res.data.existingWaterbills
  });
  console.log(this.state.waterbills)

  }
});

}

onDelete= (id) =>{
  
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )

       axios.delete(`/waterbill/delete/${id}`).then((res)=>{
      // alert("Delete successfully");
        this.retriveWaterbills();
    })

    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })


  
}


filterData(waterbills,searchKey){

const result = waterbills.filter((waterbill)=>
waterbill.BuildingId.toLowerCase().includes(searchKey)
)
this.setState({waterbills:result})
}

handleserchArea=(e)=>{
const searchKey=e.currentTarget.value;
axios.get("/waterbill").then(res=>{
  if(res.data.success){
  this.filterData(res.data.existingWaterbills,searchKey)
    
  }
});
}



render(){
      const generatePDF = Bill => {

        const doc = new jspdf();
        const tableColumn = ["BuildingId", "No of unites", "Bill amount"];
        const tableRows = [];
        const date = Date().split(" ");
        const dateStr = date[1] + "-" + date[2] + "-" + date[3];
    
        Bill.map(Bill => {
            const BillsData = [
                Bill.BuildingId,
                Bill.NoOfUnit,
                Bill.Amount,
              
               
            ];
            tableRows.push(BillsData);
        })
        doc.text("Cyberpunk Smart City", 70, 8).setFontSize(13);
        doc.text("Water Coumpsumtion", 14, 16).setFontSize(13);
        doc.text(`Report Genarated Date - ${dateStr}`, 14, 23);
    
        //right down width height
        //doc.addImage(img, 'JPEG', 170, 8, 25, 25);
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY:35});
        doc.save("Cyberpunk-Water-resorue-Management-Unit.pdf");
     
      };



 
  return(





    
<div className="container">
    <div className="row">
    <div className="col-lg-9 mt-2 mb-2">
  <h2>All Building  water usage</h2>
  <br/>
  </div>

<div className="col-lg-3 mt-2 mb-2">
<input
className="form-control"
type="search"
placeholder="search"
onChange={this.handleserchArea}>

</input>

</div>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">BuildingId</th>
      <th scope="col">No of unites</th>
      <th scope="col"> Bill amount</th>
      <th scope="col"> Action</th>
     
    </tr>
  </thead>
  <tbody>
{this.state.waterbills.map((waterbills,index)=>(

 <tr key={index}>
 <th scope="row">{index+1}</th> 
 <td>{waterbills.BuildingId}</td>
 <td>{waterbills.NoOfUnit}</td>
 <td>{waterbills.Amount}</td>

 
 

 <td>
<a className="btn btn-warning" href={`/editbill/${waterbills._id}`}>
     <i className="fas fa-edit"></i>&nbsp;Edit
   </a>
   &nbsp;
   <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(waterbills._id)}>
     <i className="far fa-trash-alt"></i>&nbsp;Delete
   </a>
 </td>
</tr>






))}




   
  
  </tbody>
</table>
</div>

<button className="btn btn-dark"><a href="/billcreate" style={{textDecoration:'none' ,color:'white'}}> Add another bill </a></button>
 &nbsp;
 &nbsp; 
<button type="Print" class="btn btn-secondary" onClick={() => generatePDF(this.state.waterbills)}>Generate Report</button>


<p1>


</p1>



</div>









  )

}


}