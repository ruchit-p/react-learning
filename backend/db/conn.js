const mongoose= require('mongoose');

const db = process.env.DBURI;

mongoose.connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    w: 'majority',
    wtimeoutMS: 5000
  }).then(()=>{
    console.log('DB connected')
}).catch((e)=>{
    console.log(e)
})
  