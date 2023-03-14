import { AiOutlineSearch } from 'react-icons/ai';

export const HerosFinder = ({ onChange, query }) => {
  return (
    <div>
      <label>
        <AiOutlineSearch size="18" />
        <input
          type="text"
          placeholder="Filter by name..."
          value={query}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
