import express, { Request,Response} from "express"
import cors from "cors"
import "dotenv/config"
import mongoose from "mongoose";
import MyUserRoute from "./routes/myUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(()=>console.log("Connect database"))

const app = express();
app.use(express.json())
app.use(cors())
app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
  });
  
app.use("/api/my/user", MyUserRoute);
app.listen(3000, () => {
    console.log("sever start localhost:3000")
}) 
    

