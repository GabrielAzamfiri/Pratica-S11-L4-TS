
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import HomeArticles from './components/HomeArticles'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsArticle from "./components/DetailsArticle";

function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<HomeArticles />} />
      <Route path="/Details/:idArticle" element={<DetailsArticle />} />
      {/* Add more routes here */}
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
