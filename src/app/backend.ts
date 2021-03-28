import Discord from "discord.js"
import config from "../config.json"
import express, { Express } from 'express';
//import components from "./components";
import mongooseModule from "./modules/mongoose.module";


async function main(){
    const server: Express = express(); //new express
    const port: number = 61000;

    server.use(express.json())
    //server.use('/api', ...components)
    
    try {
        await mongooseModule.connect(); 
        console.log("conexion exitosa");

        server.listen(port, () => {
            console.log("servidor escuchando en: http://localhost:" + port);
        });
    } catch (error) {
        console.log("conexion fallida");
    }

    const client = new Discord.Client();
    const prefix = ">"
    client.on("message", (message)=>{
        if (message.author.bot) return
        if (!message.content.startsWith(prefix)) return;
        
        const commandBody = message.content.slice(prefix.length);
        const commandStringLower =  message.content.slice(prefix.length + 2).toLowerCase()
        const args = commandBody.split(' ');
        const command = args.shift().toLowerCase();
        if (command === "t"){
            console.log(commandStringLower)
            if(commandStringLower === "tomas es un dios"){
                message.react("😍")
                message.channel.send("That's true")
            }else if (commandStringLower === "oliver es puto"){
                message.react("🤮")
            }else if (commandStringLower === "do it"){
                
            }
        
        }

    })
    client.login(config.BOT_TOKEN)



    
}

export default {main}