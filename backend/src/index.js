import app from "./app.js";
import { port } from "./config.js";
import connectDB from "./config/db.js";


connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`App listening on PORT : ${port}`);
    })
})