import { NextPage } from "next";
import "./globals.css";

const Home: NextPage = () => {
  return (
    <main>
      <div className="heroSection"></div>
      <div className="introContainer">
        <h1 className="title">
          Welcome to the The Many Saints, quality clothes to match your style
        </h1>
      </div>
    </main>
  );
};

export default Home;
