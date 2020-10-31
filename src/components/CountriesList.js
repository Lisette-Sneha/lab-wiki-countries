import React from 'react';
import Link from 'react-router-dom';

export default function CountriesList(props) {
  return (
    <div>
      {props.countries.map((item) => {
        return <div key={item.cca3}>{item.name.common}</div>;
      })}
    </div>
  );
}
