import Head from "next/head";
import { Fragment } from "react";
import About from "../components/About/About";
import Contact from "../components/contact/Contact";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Resume from "../components/resume/Resume";
import Services from "../components/services/Services";
import Sidebar from "../components/Sidebar/Sidebar";
import Testimonials from "../components/testimonials/Testimonials";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>My Portfolio | Sami ul Haq</title>
      </Head>
      <Sidebar />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </Fragment>
  );
};

export default HomePage;
