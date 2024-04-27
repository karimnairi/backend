import express from 'express'
import {json} from 'body-parser'
import cors from 'cors'
import "dotenv/config"
import lieuRouter from './routes/lieu'
import tableRouter from './routes/table' 

import appDataSource from './utils/connect'
import userRouter from './routes/user'
import categorieRouter from './routes/categorie'
import articleRouter from './routes/article'
import supplementRouter from './routes/supplement'


const app = express()


app.use(cors())
app.use(json())

const PORT = process.env.PORT


appDataSource.initialize().then(()=>{
    console.log("Connected to the database")
    app.listen(PORT as string, ()=>{
        console.log("Listening on " , PORT)
        app.use("/lieu", lieuRouter)
        app.use("/table", tableRouter)
        app.use("/user", userRouter)
        app.use("/categorie", categorieRouter)
        app.use("/article", articleRouter)
        app.use("/supplement", supplementRouter)
    })
}).catch((e : any)=>{
    console.log(`Error launching the server, error code : ${e}`)
})
