// server initialization:
const express = require('express');
const port = 3000;
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

// server middleware:
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// server middleware:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());



async function getRandomPokemon() {
    let pokeArr = [];
    try{
        
        for(let i = 0; i < 6; i++){
            let pokeType2 = null;
            let urlToVisit = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`;
            let pokemonData = await fetch(urlToVisit);
            let pokemonDataJSON = await pokemonData.json();
            console.log(pokemonDataJSON);
            let pokeName = pokemonDataJSON.name;
            let pokePic = pokemonDataJSON.sprites.front_default;
            let pokeType = pokemonDataJSON.types;
            console.log("******************");
            console.log(pokeType);
            console.log("******************");
            pokeArr.push({pokeName, pokePic, pokeType});
        }
    }
    catch(err){
        console.log(err);
    }
    return pokeArr;
}

// routing: 
app.get('/', async (req, res) => {
    const pokemonArr = await getRandomPokemon();
        
    // call or run other code here

    res.render('index', {
        // pokemonName: pokeInfo.pokeName,
        // pokemonPic: pokeInfo.pokePic,
        pokeArr: pokemonArr,
        exampleString: "hello world",
        exampleBoolean: true,
        exampleObject: {message: "alex is the best", website: "bigfootds.com"},
        exampleArray: [1, 2, 3, 4, 5]
    })
});


// message for when the server boots up:
app.listen(port, () => {
    console.log(`server started on localhost:${port}!`)
});