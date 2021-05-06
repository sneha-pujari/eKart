const mongoose= require('mongoose');
async function dbConnect() {
  try {
    await mongoose.connect("mongodb+srv://snehap:snehappwd@cluster0.qlurl.mongodb.net/test", {
      useNewUrlParser: true, 
     useUnifiedTopology: true, 
     useFindAndModify: false 
    })
    console.log("connected successfully");
  }
  catch(error){
    console.log(error)
    console.log("something is broken")
  }
}

module.exports = {dbConnect}