import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div>
      {props.countries.map((item) => {
        return (
          <div key={item.cca3}>
            <Link to={`/country/${item.cca3}`}>
              {item.flag}
              {item.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
