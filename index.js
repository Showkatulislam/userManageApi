const app = require("./app");

const port=process.env.PORT ||8000
app.listen(port,()=>{
    console.log("Server is running from port https://localhost:8000")
})