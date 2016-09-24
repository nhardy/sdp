import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import placeholderImg from 'app/assets/images/table.jpeg';

import styles from './styles.styl';


function Category({ id, name }) {
  return (
    <li className={styles.category}>
      <Link className={styles.link} to={`/categories/${id}`}>
        <div className={styles.description}>
          <span className={styles.heading}>{name}</span>
        </div>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={placeholderImg} alt="Placeholder" />
        </div>
      </Link>
    </li>
  );
}

Category.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};

function CategoriesList({ items }) {
  return (
    <ul className={styles.root}>
      {items.map(({ id, name }) => (
        <Category key={id} id={id} name={name} />
      ))}
    </ul>
  );
}

CategoriesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
};

export default CategoriesList;
