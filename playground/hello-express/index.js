const express = require ("express");
const PORT = 3000;
const app = express ();
app.get('/test', (req, res) =>{
    res.json({greeting: `Hello World!`});
});

app.listen(PORT, () => console.log(`sever is now listening on port ${PORT}`));