import { useState, useEffect } from 'react';
import { HeroImage } from 'components/HeroImage/HeroImage';
import { HerosFinder } from 'components/HerosFinder/HerosFinder';
import { fetchAllCharacters } from 'api';
import { CharactersList } from 'components/HeroList/HeroList';
import { Container } from './MainPage.styled';

const MainPage = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [query, setQuery] = useState(localStorage.getItem('query') || '');

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

  return (
    <Container>
      <HeroImage />
      <HerosFinder onChange={onChange} query={query} />
      <CharactersList characters={filteredCharacters} />
    </Container>
  );
};

export default MainPage;
