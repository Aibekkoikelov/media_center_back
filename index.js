const express = require('express');  // Подключаем express
const cors = require('cors');
const cookieParser = require('cookie-parser');
const TelegramBot = require("node-telegram-bot-api");  // Подключаем cookie-parser (чтобы работать с куками)
const app = express();  // Создаем экземпляр приложение

let id;
app.use(express.urlencoded({extended: true}));  // Подключаем body-parser для работы с формами
app.use(express.json());  // Подключаем body-parser для работы с json
app.use(cookieParser());  // Подключаем cookie-parser для работы с куками
app.use(cors())
const API_KEY = '6986635019:AAGKMyQDiRNQce_xyHHNQRLR1GJwhKk9lDI'
let bot;

app.listen(3001, "0.0.0.0",() => {
    console.log('Server started on port 3001' );
    bot = new TelegramBot(API_KEY, {
        polling: false
    });
});

app.post('/contact', async(req, res) => {
    if(!id){
        id = 1965934319
    }
    try{
        await bot.sendContact(id, req.body.number, req.body.name)
    }
    catch {
        console.log("jopa")
    }

} )
app.get("/", (reg, res)=> {
    res.send("hello")
})

