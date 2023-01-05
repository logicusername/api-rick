import DeleteCardCharacter from "./DeleteCardCharacter";

const CharacterList = ({ newcharacter, deleteCharacter}) => {
  return (
    <div
      style={{
        marginLeft: "40px",
        border: "1px solid black",
        width: "700px",
      }}
    >
      <h1>listado de favoritos</h1>
      <h1>Agregar solo!! 5 favoritos</h1>
      <hr></hr>

      {newcharacter.map((newcharacter) => {
        return (
          <div>
            <DeleteCardCharacter
              newcharacter={newcharacter}
              deleteCharacter={deleteCharacter}
            /> 
          </div>
        );
      })}
    </div>
  );
};
export default CharacterList;
