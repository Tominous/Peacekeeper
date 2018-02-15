const Discord = require("discord.js");
const client = new Discord.Client();

const mysql = require("mysql");
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'titanicRyan',
    database : 'Peacekeeper.peacekeeper'
});
connection.connect();



client.on("ready", () => {
    console.log(client.user+" is ready!");
});
client.on("message", () => {


});
client.login("NDEzNTA3NzQzMDE4OTA5NzE2.DWZ0tA.SrmYRFkLio5xj8PdmduHUW0wQss");