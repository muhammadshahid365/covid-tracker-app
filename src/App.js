import React, { useEffect, useState } from 'react'
import NavBar from './Components/NavBar'
import InfoPanel from "./Components/InfoPanel";
import CountryList from './Components/CountryList'
import Footer from "./Components/Footer"
import "./App.css"

function App() {

  const [data, setData] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [allCountriesData, setAllCountry] = useState([]);
  const [countryName, setCountryName] = useState("");

  const changeData = (index) => {
    let country = allCountriesData[index];
    setCountryName(country.Country);
    delete country.CountryCode;
    delete country.Country;
    delete country.Slug;
    delete country.Date;
    delete country.Premium;
    setData(country);
  }

  useEffect(() => {
    function getData() {
      fetch("https://api.covid19api.com/summary")
        .then(response => response.json())
        .then(json => {
          setData(json.Global);
          setAllCountry(json.Countries);
          setCountryList(json.Countries.map(country => country.Country));
          setCountryName("Global")
        })
        .catch(msg => console.log("Data Fetch Failed!"));
    }
    getData();
  }, [])

  return (
    <div className="App">
      <NavBar />

      <div className="center">
        <CountryList list={countryList} changeData={changeData} className="list"/>
        <h1 className="title">{countryName}</h1>
      </div>
      <InfoPanel data={data} />
      <Footer />
    </div>
  );
}

export default App;
