import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Service from "./components/Service/Service";
import We from "./components/We/we";
import Project from "./components/Project/Project";
import Met from "./components/Met/Met";
import Latest from "./components/Latest/Latest";
import Footer from "./components/Footer/Footer";

function App() {
    const [mode,setMode] = useState<boolean>(false)

    return (
        <div style={{background: mode ? "black" : ""}}>
            <Header mode={mode} setMode={setMode} />
            <Hero/>
            <Service/>
            <We/>
            <Project/>
            <Met/>
            <Latest/>
            <Footer/>
        </div>

    );
}

export default App;
