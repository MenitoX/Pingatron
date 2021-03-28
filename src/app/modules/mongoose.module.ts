import mongoose,{ConnectionOptions} from "mongoose";

function connect(): Promise<typeof mongoose>{
    const options: ConnectionOptions = {
        useNewUrlParser: true,
        useUnifiedTopology :true,
        useCreateIndex: true,
        useFindAndModify: false
    }
    
    //return mongoose.connect(`${process.env['MONGO_URI']}${process.env['MONGO_DATABASE_NAME']}`, options);
    return mongoose.connect("mongodb+srv://menitox:elvis123@cluster0.zb8ub.mongodb.net/JujutsuAcademy", options);
}

export default {connect};