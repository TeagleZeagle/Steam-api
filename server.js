const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/popular-games', async (req, res) => {
    try{
        const response = await axios.get('https://steamspy.com/api.php?request=top100in2weeks');
        const popularGames = Object.values(response.data).slice(0, 10);

        res.json(popularGames);

    }catch (error) {
        console.log(error);
        res.status(500).send('Error')
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});