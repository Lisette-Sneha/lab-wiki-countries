import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
  const { countryId } = props.match.params;
  const showCountryDetails = props.countries.find(
    (country) => country.cca3 === countryId
  );
  // const matchCcwithCountryName = showCountryDetails.borders === countryID;
  // display all country information Name, Capital, Area & Borders.

  // const borderCountries = [{name: }, {name: }]

  const borderCountryCode = showCountryDetails.borders; // [UAE, NL]

  const borderCountries = borderCountryCode.map((countryCode) => {
    return props.countries.find((country) => country.cca3 === countryCode);
  });

  // in borderCountries, we use
  console.log(borderCountries);
  console.log(showCountryDetails);
  return (
    <div>
      {showCountryDetails.name.common} {showCountryDetails.capital[0]}
      {showCountryDetails.area}
      {borderCountries.map((country, index) => (
        <ul key={index}>
          <li>
            <Link to={`/country/${country.cca3}`}>{country.name.common}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}
