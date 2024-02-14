const TelegramBot = require('node-telegram-bot-api');

const API_KEY = '6986635019:AAGKMyQDiRNQce_xyHHNQRLR1GJwhKk9lDI'
const bot = new TelegramBot(API_KEY, {

    polling: true

});

const commands = [

    {

        command: "start",
        description: "Запуск бота"

    },
    {

        command: "ref",
        description: "Получить реферальную ссылку"

    },
    {

        command: "help",
        description: "Раздел помощи"

    },

]

bot.setMyCommands(commands);
module.exports = bot;
