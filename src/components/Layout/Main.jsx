
import search from "../../assets/icons/search.svg";
import Card from "../UI/Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";

import regions from "../db/regions";

const baseURL = "https://restcountries.com/v2";

import Loader from "./Loader";

const Main = () => {
    
 
    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false)
    const [searchText, setSearchText] = useState('');
  
    async function fetchCountries(){
        setLoading(true);
        try {
          const response = await axios.get(`${baseURL}/all`);
          setCountry(response.data);
          setLoading(false)
        } catch (err) {
          setErrorMsg(err.message);
          setLoading(false);
        } 
    };

    useEffect(() => {
        fetchCountries();
    }, [])

    async function searchCountry() {
        try {
          const response = await axios.get(`${baseURL}/name/${searchText}`);
          setCountry(response.data);
          if(!response.data.length){
            fetchCountries()
          }
        } catch (err) {
          setErrorMsg(err.message);
        }
    }

    async function filterByRegion(region) {
        try{
            const response = await axios.get(`${baseURL}/region/${region}`);
            setCountry(response.data);
        }catch (err){
            setErrorMsg(err.message);
        }
    }

    function handleSearchCountry(e){
        e.preventDefault();
        searchCountry()
    }

    function handleFilterByRegion(e) {
        e.preventDefault();
        filterByRegion();
    }
    
 

    
    return (
        <section className="pt-[48px]">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between mb-[48px]">
                    <form onSubmit={handleSearchCountry} autoComplete="off" className="w-[480px] bg-white py-[19px] px-9 rounded-md flex gap-x-6 shadow-md">
                        <img src={search} alt="search" />
                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} className="outline-none w-full text-[14px] text-[#848484]" type="text" placeholder="Search for a country…" />
                    </form>

                    <form onSubmit={handleFilterByRegion}>
                        <select value={regions.name} onChange={(e) => filterByRegion(e.target.value)} className="oultine-none w-[200px] shadow py-[18px] px-6">
                            {
                                regions.map((region, index) => (
                                    <option key={index} value={region.name}>
                                        {region.name}
                                    </option>
                                ))
                            }
                        </select>
                    </form>
                   
                </div>

                <div className="grid grid-cols-4 gap-y-[67px]">
                    {
                        loading ? <Loader/> : null
                    }
                    {   country.length > 0 ?
                        country.map((item, index) => {
                        
                            return <Card key={index} state={item}/>
                        }) : null
                    }

                    {
                        errorMsg ? (
                            <div>
                                <h3>{errorMsg}</h3>
                            </div>)
                        :null
                    }

                    
                </div>
            </div>
        </section>
    );
};

export default Main;