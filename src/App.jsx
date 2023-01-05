import React, { useEffect, useState } from "react";
import CardCharacter from "./CardCharacter.jsx";
import CharacterList from "./CharacterList";
import "./styles.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [pagina, setPagina] = useState(1)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${pagina}`);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchData();
  }, [pagina]);
  const [newcharacter, setNewCharacter] = useState([]);

  const handleClick = (antiguocharacter, charactersId) => {
    setNewCharacter([...newcharacter, antiguocharacter]);

    setCharacters(
      characters.filter((characters) => characters.id !== charactersId)
    );
  };

  function deleteCharacter(retrocesocharacter, newcharacterId) {
    setNewCharacter(
      newcharacter.filter((newcharacter) => newcharacter.id !== newcharacterId)
    );

    setCharacters([...characters.unshift(retrocesocharacter)]);
  }
  function NavPage(){
    return(
      <header className="d-flex justify-content-between align-items-center bg-dark bg-opacity-75 p-4">
        {pagina > 1? (
          <button className="btn btn-primary btn-sm"
          onClick={() => setPagina(pagina - 1)}>anterior</button>
        ):(console.log("sin"))}
        <button className="btn btn-primary btn-sm"
        onClick={() => setPagina(pagina + 1)}>siguiente</button>      
      </header>
    )
  }
  return (
    <div >
      <div className="text-center bg-dark bg-opacity-75 text-white p-4 m-0">
      <h1>
        API Rick and Morty
      </h1>
      <h2>pagina {pagina}</h2>
      </div>
      <NavPage></NavPage>
      <div className="d-flex bg-dark bg-opacity-75 text-white p-5 justify-content-between letra">
        <div className="grid">
          {characters.map((character) => {
            return (
              <div>
                <CardCharacter
                  character={character}
                  handleClick={handleClick}
                  newcharacter={newcharacter}
                />
              </div>
            );
          })}
        </div>
        <div className="bg-dark">
          <CharacterList
            newcharacter={newcharacter}
            deleteCharacter={deleteCharacter}
          />
        </div>
      </div>
    </div>
  );
}
export default App;