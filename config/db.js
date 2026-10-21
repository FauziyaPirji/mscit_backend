import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb://fauziyapirji_db_user:9PIHN1faty2PYzeL@ac-huzsu1u-shard-00-00.lfgeu2w.mongodb.net:27017,ac-huzsu1u-shard-00-01.lfgeu2w.mongodb.net:27017,ac-huzsu1u-shard-00-02.lfgeu2w.mongodb.net:27017/?ssl=true&replicaSet=atlas-xhvz9e-shard-0&authSource=admin&appName=Cluster0")
        console.log(`connected successfully ${con.connection.host}`)
    } catch(error) {
        console.log(`connection error: ${error}`)
    }
}

export default connectDB;