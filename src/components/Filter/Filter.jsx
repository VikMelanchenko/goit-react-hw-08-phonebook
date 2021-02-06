import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux//contacts/contacts-selectors';
import { useSelector, useDispatch } from 'react-redux';
import styles from './style.module.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);

  return (
    <div className={styles.container}>
      <label>
        <h1>Find contacts by name</h1>
        <input
          className={styles.input__item}
          type="text"
          value={value}
          onChange={(event) => dispatch(changeFilter(event.target.value))}
        />
      </label>
    </div>
  );
}
