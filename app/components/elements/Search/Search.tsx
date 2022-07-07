import { FC, useState } from 'react';
import cn from 'classnames';
import s from './Search.module.scss';

const Search: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className={s.search}>
      <span className={cn('material-icons-outlined', s.search__icon)}>search</span>

      <input
        type="text"
        name="search-query"
        placeholder="Search place..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={s.search__input}
      />
    </div>
  );
};
export default Search;
