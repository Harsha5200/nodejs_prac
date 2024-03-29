const express = require('express')
const app = express()
const appDays = require("date-fns/addDays");
app.get("/", (request,response)=>{
    const date = new Date();
    const result = addDays(new Date(date.getFullYear(), date.getMonth(), date.getDate()),100);
    response.send(`${result.getDate()}/${result.getMonth()+1}/${result.getFullYear()}`);
});
app.listen(3000);
module.exports = app;