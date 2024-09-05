const express =require('express');
const mongoose =require('mongoose')
const bodyParser=require('body-parser');
const months = require('./models/months');
const cors = require('cors')


const app =express();
const monthsRoutes=require('./routes/months');
const waterbillsRoutes=require('./routes/waterbills');
const emailRoutes=require('./routes/email');

//IT20429478
const driverRoutes = require('./routes/drivers');
const taxiRoutes = require('./routes/taxis');

app.use(bodyParser.json());
app.use(cors());
app.use(monthsRoutes);
app.use(waterbillsRoutes);
app.use(emailRoutes);
app.use(bodyParser.urlencoded({extended:true}));
const PORT =8003;

//IT20429478
app.use(driverRoutes);
app.use(taxiRoutes);

//IT20212186
const postRoutes = require('./routes/phones');
app.use(postRoutes);

//IT20129644
const importItems = require('./routes/inventory');
const exportItems = require('./routes/inventory2');

app.use(importItems);
app.use(exportItems);

//IT20212186

const DB_URL=`mongodb+srv://cyberpunk:cyber123@cluster0.ewhgt.mongodb.net/cyberpunk?retryWrites=true&w=majority`;
mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected')
    
})
.catch((err)=>console.log('DB connection error',err))

app.listen(PORT,()=>{

    console.log(`App is runnning on ${PORT}`);
});








