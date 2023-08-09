
import Header from "./components/Header";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Layout/>
      </div>
    </BrowserRouter>
   
  );
};

export default App;