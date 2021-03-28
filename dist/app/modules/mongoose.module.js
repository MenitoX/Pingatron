"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    //return mongoose.connect(`${process.env['MONGO_URI']}${process.env['MONGO_DATABASE_NAME']}`, options);
    return mongoose_1.default.connect("mongodb+srv://menitox:elvis123@cluster0.zb8ub.mongodb.net/JujutsuAcademy", options);
}
exports.default = { connect };
