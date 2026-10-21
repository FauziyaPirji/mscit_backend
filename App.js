import exprees from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import router from "./route/userroute.js"

const app = exprees()
app.use(cors())
app.use(exprees.json())
app.use(exprees.urlencoded({extended: true}))
app.use(router)

const PORT = 5000
app.get('/', (req, res) => {
    res.send("Backend run successfully")
})

app.listen(PORT, () => {
    console.log(`App.js running on port // ${PORT}`)
})

connectDB().then(() => {
    
})