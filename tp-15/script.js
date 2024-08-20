const fetchPokemonData = async () => {
    const pokemonData = [];

    for (let i = 1; i <= 10; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const data = await response.json();
        pokemonData.push({
            nombre: data.name,
            id: data.id,
            habilidad: data.abilities[0].ability.name,
            movimientos: data.moves.slice(0,4).map(moveInfo =>moveInfo.move.name).join(', '),
            Foto: data.sprites.front_shiny
        });
    }

    console.log(pokemonData);
};

fetchPokemonData();
