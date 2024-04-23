import express from 'express'
import {json} from 'body-parser'
import cors from 'cors'
import "dotenv/config"
import userRouter from './routes/users'
import appDataSource from './utils/connect'
const app = express()


app.use(cors())
app.use(json())

const PORT = process.env.PORT


appDataSource.initialize().then(()=>{
    console.log("Connected to the database")
    app.listen(PORT as string, ()=>{
        console.log("Listening on " , PORT)
        app.use("/users", userRouter)
    })
}).catch((e : any)=>{
    console.log(`Error launching the server, error code : ${e}`)
})
