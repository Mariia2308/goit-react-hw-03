
import css from './ContactStyles.module.css';
const SearchBox = ({ value, onChange }) => {
  return (
      <div className={css.searchbox}>
          <p>Find contacts by name</p>
          <input 
              type="text"
              value={value}
              onChange={onChange}
              className={css.inputsearch } />
        </div>
  )
}

export default SearchBox
