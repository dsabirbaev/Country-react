
import "./style.scss";
import Main from "./Main";
import SingleCountry from "./SingleCountry"

import { Route, Routes } from "react-router-dom";
const index = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                <Route path="/:name" element={<SingleCountry/>}></Route>
            </Routes>
           
        </main>
    );
};

export default index;