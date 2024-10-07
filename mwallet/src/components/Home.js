import React from "react";
import wallet from "../mwallet.png";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="content">
        <img src={wallet} alt="logo" className="frontPageLogo" />
        <h2>Hey There 👋</h2>
        <h4 className="h4">Welcome to web3 CoinKeeper</h4>
        <Button
          onClick={() => navigate("/yourWallet")}
          className="frontPageButton"
          type="primary"
        >
          Create a wallet
        </Button>
        <Button
          onClick={() => navigate("/recover")}
          className="frontPageButton"
          type="default"
        >
          Sign in with seed phrase
        </Button>
        <p className="frontPageBottom">
          Visit my Portfolio website
          <a
            href="https://prateeksavanur.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            prateeksavanur
          </a>
        </p>
      </div>
    </>
  );
}

export default Home;
