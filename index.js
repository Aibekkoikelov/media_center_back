const bot = require('./bot/index.js')
const express = require('express');  // Подключаем express
const cors = require('cors');
const path = require('path');  // Подключаем path (чтобы работать с путями)
const cookieParser = require('cookie-parser');  // Подключаем cookie-parser (чтобы работать с куками)
const app = express();  // Создаем экземпляр приложение

let id;
app.use(express.static(path.join(__dirname, 'public')));  // Подключаем статические файлы
app.use(express.urlencoded({extended: true}));  // Подключаем body-parser для работы с формами
app.use(express.json());  // Подключаем body-parser для работы с json
app.use(cookieParser());  // Подключаем cookie-parser для работы с куками
app.use(cors())



app.listen(3001, () => {
    console.log('Server started on port 3001' );


});
bot.on('text', async msg => {
    id = await msg.from.id
})
app.post('/contact', async(req, res) => {

    console.log(req.body)
    if(!id){
        id = 1965934319
    }
    try{
        await bot.sendContact(id, req.body.number, req.body.name)
    }
    catch{
        console.log("jopa")
    }

} )
app.get("/", (reg, res)=> {
    res.send("hello")
})

