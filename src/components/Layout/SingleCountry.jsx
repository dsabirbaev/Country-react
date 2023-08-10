import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import back from "../../assets/icons/back.svg";


const SingleCountry = () => {

  const [singleCountry, setSingleCountry] = useState([]);
  const { name } = useParams();

  async function getSingleCountry() {
    try {
      const response = await axios.get(`https://restcountries.com/v2/name/${name}`);
      setSingleCountry(response.data);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    getSingleCountry();
    
  }, [name]);

  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name])
  return (
    
    <section className="pt-[100px] relative">
      <Link to="/">
        <div className="flex gap-x-2 font-light text-[16px] absolute top-[40px] left-[60px]">
          <img src={back} alt="back"/>
          Back
        </div>
      </Link>
     
      <div className="container mx-auto px-5">
        {
          singleCountry.map((item, index) => (
            <div key={item.population} className="flex items-center gap-x-[100px]">

              <img src={item.flags.svg} alt={item.name} className="w-[550px] object-cover object-center" />
              <div className="w-full">
                <h1 className="mb-[23px] font-black text-[32px]">{item.name}</h1>
                <div className="flex justify-between mb-[80px]">
                  <ul className="flex flex-col gap-y-2 text-[16px] font-semibold">
                    <li>Native Name: <span className="font-light"> {item.nativeName} </span></li>
                    <li>Population: <span className="font-light"> {item.population.toLocaleString()}</span></li>
                    <li>Region: <span className="font-light"> {item.region}</span></li>
                    <li>Sub Region: <span className="font-light"> {item.subregion}</span></li>
                    <li>Capital: <span className="font-light"> {item.capital}</span></li>
                  </ul>
                  <ul className="flex flex-col gap-y-2">
                    <li>Top Level Domain: <span className="font-light"> {item.topLevelDomain}</span></li>
                    <li>Currencies: <span className="font-light"> {item.currencies.map(value => value.name)}</span></li>
                    <li>Languages: <span className="font-light"> {item.languages.map(value => value.name)}</span></li>
                  </ul>
                </div>

                <div className="flex">
                  <p className="font-semibold text-[16px]">Border countries: </p> 
                  <span> 
                    {
                    item.borders.map(item => (
                       <span className="py-[5px] px-[25px] border rounded-sm mx-1 capitalize">{item}</span>
                    ))
                    }
                  </span>
                </div>
              </div>
            </div>
          ))
        }
      </div>

     
    </section>

  );
};


export default SingleCountry;

