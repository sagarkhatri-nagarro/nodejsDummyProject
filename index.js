const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<center><h1 style="margin-top:10px;margin-bottom:0px;color:purple">This is a default output for my AWS/Azure deployment project.</h1><br style="margin:0px;"/><h4 style="font-style:italic;margin-top:0px;">This statement was triggered by hitting the default url `/` when this app run.</h4></center>');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});