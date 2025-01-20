import React from "react";
import Hero from "./components/Home/Hero";
import About from "./components/Home/About";
import Steps from "./components/Home/Steps";
import Questions from "./components/Home/Questions";
import Contact from "./components/Home/Contact";
import Layout from "./components/Layout";
import "./assets/css/styles.css";
import ClientScripts from "./components/ClientScripts";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Steps />
      <Questions />
      <Contact />

      <ClientScripts />
    </Layout>
  );
}
