import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { fetchOneCharacters } from 'api';

const HeroDetails = () => {
  const [character, setCharacter] = useState(null);
  const { heroId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function getOneCharacters() {
      try {
        const data = await fetchOneCharacters(heroId);
        setCharacter(data);
      } catch (error) {
        console.log(error);
      }
    }

    getOneCharacters();
  }, [heroId]);

  if (!character) {
    return;
  }

  const { image, name, status, species, gender, type, origin } = character;

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>
        <p>
          <AiOutlineArrowLeft size="24" />
          GO BACK
        </p>
      </Link>
      <div>
        <img src={image} alt="" />
        <p>{name}</p>
        <p>Informations</p>
        <ul>
          <li>
            <p>Gender</p>
            <p>{gender}</p>
          </li>
          <li>
            <p>Status</p>
            <p>{status}</p>
          </li>
          <li>
            <p>Specie</p>
            <p>{species}</p>
          </li>
          <li>
            <p>Origin</p>
            <p>{origin.name}</p>
          </li>
          <li>
            <p>Type</p>
            <p>{type ? type : 'Unknown'}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroDetails;
