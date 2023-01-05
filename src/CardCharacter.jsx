const CardCharacter = ({ character, handleClick, newcharacter }) => {
    return (
      // { if contador >= 0 && <= 5 ? (
      <div key={character.id}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <br />
        {newcharacter.length <= 4 ? (
          <button onClick={() => handleClick(character, character.id)}>
            agregar a favoritos
          </button>
        ) : (
          console.log(newcharacter.length)
        )}
      </div>
    );
  };
  export default CardCharacter;
  