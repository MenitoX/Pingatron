"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const config_json_1 = __importDefault(require("../config.json"));
const express_1 = __importDefault(require("express"));
//import components from "./components";
const mongoose_module_1 = __importDefault(require("./modules/mongoose.module"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = express_1.default(); //new express
        const port = 61000;
        server.use(express_1.default.json());
        //server.use('/api', ...components)
        try {
            yield mongoose_module_1.default.connect();
            console.log("conexion exitosa");
            server.listen(port, () => {
                console.log("servidor escuchando en: http://localhost:" + port);
            });
        }
        catch (error) {
            console.log("conexion fallida");
        }
        const client = new discord_js_1.default.Client();
        const prefix = ">";
        client.on("message", (message) => {
            if (message.author.bot)
                return;
            if (!message.content.startsWith(prefix))
                return;
            const commandBody = message.content.slice(prefix.length);
            const commandStringLower = message.content.slice(prefix.length + 2).toLowerCase();
            const args = commandBody.split(' ');
            const command = args.shift().toLowerCase();
            if (command === "t") {
                console.log(commandStringLower);
                if (commandStringLower === "tomas es un dios") {
                    message.react("😍");
                    message.channel.send("That's true");
                }
                else if (commandStringLower === "oliver es puto") {
                    message.react("🤮");
                }
                else if (commandStringLower === "do it") {
                }
            }
        });
        client.login(config_json_1.default.BOT_TOKEN);
    });
}
exports.default = { main };
