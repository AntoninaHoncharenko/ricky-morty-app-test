import { useState, useEffect } from 'react';
import { HeroImage } from 'components/HeroImage/HeroImage';
import { HeroFinder } from 'components/HerosFinder/HeroFinder';
import { fetchAllCharacters } from 'api';
import { CharactersList } from 'components/HeroList/HeroList';
import { Container } from './MainPage.styled';

import { Auth } from 'components/Auth/Auth';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from '../../firebase';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [query, setQuery] = useState(localStorage.getItem('query') || '');
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getAllCharacters() {
      try {
        const data = await fetchAllCharacters();
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        setCharacters(sortedData);
      } catch (error) {
        console.log(error);
      }
    }

    getAllCharacters();
  }, []);

  useEffect(() => {
    const filtered = characters.filter(char =>
      char.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCharacters(filtered);
    localStorage.setItem('query', query);
  }, [characters, query]);

  const onChange = event => {
    setQuery(event.target.value);
  };

  const auth = getAuth(app);

  const onLogIn = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then(credentials => {
        setUser(credentials.user);
      })
      .catch(error => console.log(error));
  };

  return (
    <Container>
      {user === null ? <Auth onLogIn={onLogIn} /> : <p>{user.displayName}</p>}
      <HeroImage />
      <HeroFinder onChange={onChange} query={query} />
      <CharactersList characters={filteredCharacters} />
    </Container>
  );
};
export default MainPage;
