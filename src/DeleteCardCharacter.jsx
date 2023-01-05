const DeleteCharacter = ({ newcharacter , deleteCharacter , }) => {

    return (
      <div key = {newcharacter.id}>
        <h2>{newcharacter.name}</h2>
        <img src= {newcharacter.image} alt = {newcharacter.name}/>
        <button onClick={() => deleteCharacter( newcharacter , newcharacter.id)}>quitar de favoritos</button>
      </div>
    );
  };
  
  export default DeleteCharacter;