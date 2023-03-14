import { Link } from 'react-router-dom';

export const CharactersList = ({ characters }) => {
  return (
    <div>
      <ul>
        {characters.map(char => {
          return (
            <Link to={`/${char.id}`} key={char.id}>
              <li>
                <div>
                  <img src={char.image} alt="heroimage" />
                  <p>{char.name}</p>
                  <p>{char.species}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
