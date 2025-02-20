/*
    1. Create a new Vite React project

    2. Create a Pokemon.jsx file that returns and exports
       a Pokemon component.

    3. In the Pokemon component, return an <h1> tag with
       the text 'Mankey' inside, as well as an empty <img>
       tag below it.

    4. How/where would you make a fetch request to the API
       at: https://pokeapi.co/api/v2/pokemon/mankey
       in order to get the image to show up in the <img>
       tag? (Go for the 'original artwork, front default
       image if you can or any of the other sprites')

    5. Import Pokemon in to main.jsx and replace the <App />
       with it to test that it works in your Browser.

    HINT* You will need both useState and useEffect for this
    BONUS* Could you fill in other data based on the response?
*/

import { useEffect, useState } from "react"

function Pokemon(){
    const [src,setSrc]=useState('');

    const URL="https://pokeapi.co/api/v2/pokemon/mankey";

    useEffect(()=>{
        async function getImage(){
            const response=await fetch(URL)
            const json=await response.json();
            const imgUrl=json.sprites.other["official-artwork"].front_default;
            setSrc(imgUrl)
        }
        getImage()
    },[]);

    return(
        <>
        <h1>Mankey</h1>
        <img src={src}/>
        </>
    )
}

export default Pokemon