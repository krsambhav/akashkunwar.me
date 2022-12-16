import React from "react";
import Header from "./Header";
import Project from "./Project";
import FadeIn from "react-fade-in/lib/FadeIn";
import Footer from "./Footer";

function Projects() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <div className="">
        <FadeIn
          delay={400}
          className="projects-container flex flex-row flex-wrap gap-10 mt-16 w-[85vw] font-light text-xl mb-10 min-h-[60vh] justify-center"
        >
          <Project
            title="EDA CoViD 19"
            description="Exploratory Data Analysis of CoViD 19"
            github="https://github.com/Akashkunwar/Covid-cases-and-vaccination-eda"
            stack={["python"]}
          />
          <Project
            title="CCFD"
            description="an algorithm to detect if a transaction is suspicious or not"
            github={"https://github.com/Akashkunwar/credit-card-fraud-detection"}
            stack={["python"]}
          />
          <Project
            title="PhonePe Visualisation"
            description="PhonePe transaction geo visualization"
            github={"https://github.com/Akashkunwar/PhonePe-Transaction-Geo-Visualization"}
            stack={[ "datastudio", "python"]}
          />
          <Project
            title="Stock Market Prediction"
            description="an algorithm to predict stock market price"
            github="https://github.com/Akashkunwar/Stock-market-prediction"
            stack={["python", "streamlit"]}
          />
        </FadeIn>
      </div>
    </div>
  );
}

export default Projects;
