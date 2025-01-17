import React from "react";
import Hero from "../../components/Home/Hero";
import About from "../../components/Home/About";
import Steps from "../../components/Home/Steps";
import Product from "../../components/Home/Product";
import Questions from "../../components/Home/Questions";
import Contact from "../../components/Home/Contact";
import Layout from "../../components/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Steps />
      <Product />
      <Questions />
      <Contact />
    </Layout>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HomePage;
