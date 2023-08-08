
import search from "../../assets/icons/search.svg";
import Card from "../UI/Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";
const baseURL = "https://restcountries.com/v2/all";
import Loader from "./Loader";

const Main = () => {

    const [country, setCountry] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false)
    useEffect(() => {
        async function fetchCountries(){
            setLoading(true);
            try {
              const response = await axios.get(baseURL);
              setCountry(response.data);
              setLoading(false)
            } catch (err) {
              setErrorMsg(err.message);
              setLoading(false);
            } 
        };
        fetchCountries();

    }, [])
    
    return (
        <section className="pt-[48px]">
            <div className="container mx-auto px-5">
                <div className="flex items-center justify-between mb-[48px]">
                    <div className="w-[480px] bg-white py-[19px] px-9 rounded-md flex gap-x-6 shadow-md">
                        <img src={search} alt="search" />
                        <input className="outline-none w-full text-[14px] text-[#848484]" type="text" placeholder="Search for a country…" />
                    </div>
                    <select className="oultine-none w-[200px] shadow-md py-[18px] px-6">
                        <option className="oultine-none" disabled>Filter by Region</option>
                        <option >Africa</option>
                    </select>
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