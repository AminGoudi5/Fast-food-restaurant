import express from "express"
import cors from "cors"
import foodRouter from "./routes/foodRout.js"
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRout.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRout.js"
import orderRouter from "./routes/orderRout.js"
import adminUserRouter from "./routes/adminUserRout.js"



//app config
const app = express()
const port = 4000

//middleware

app.use(express.json())
app.use(cors())

//db connection

connectDB()

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/adminuser", adminUserRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);

})

