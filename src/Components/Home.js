import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Headline from "./Headline";
import Cities from "./Cities";
import Countries from "./Countries";
import Footer from "./Footer";

function Home() {
    return (
        <div>
        <Navbar />,
        <Hero />,
        <Headline />,
        <Cities />,
        <Countries />
        <Footer />
        </div>
    )
};

export default Home;