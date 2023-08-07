

import "./style.scss";


const Card = ({state: {flag, name, population, region, capital}}) => {
  
    return (
        <div className="card shadow-md w-[264px]">
            <img className="h-[160px] w-full object-cover object-center" src={flag} alt="flag"/>
            <div className="p-6 bg-white">
                <h2 className="text-[18px] font-extrabold text-[#111517] mb-[16px]">{name}</h2>
                <ul className="flex flex-col gap-y-[10px] text-[16px]">
                    <li className="font-light"><span className="font-semibold">Population: </span> {population}</li>
                    <li className="font-light"><span className="font-semibold">Region: </span> {region}</li>
                    <li className="font-light"><span className="font-semibold">Capital: </span> {capital}</li>
                </ul>
            </div>
        </div>
    );
};

export default Card;