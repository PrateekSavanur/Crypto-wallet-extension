import React, { useState } from "react";
import { Button, Card } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";

function CreateAccount({ setSeedPhrase, setWallet }) {
  const [newSeedPhrase, setNewSeedPhrase] = useState(null);
  const navigate = useNavigate();

  const generateWallet = () => {
    const nmemonic = ethers.Wallet.createRandom().mnemonic.phrase;
    setNewSeedPhrase(nmemonic);
  };
  const setWalletAndMnemonic = () => {
    setSeedPhrase(newSeedPhrase);
    setWallet(ethers.Wallet.fromPhrase(newSeedPhrase).address);
  };

  return (
    <>
      <div className="content">
        <div className="mnemonic">
          <ExclamationCircleOutlined style={{ fontSize: "20px" }} />
          <div>
            Once you generate the seed phrase, save it securely in order to
            recover your wallet in the future.
          </div>
        </div>
        <Button
          className="frontPageButton"
          type="primary"
          onClick={() => generateWallet()}
        >
          Generate Seed Phrase
        </Button>
        <Card className="seedPhraseContainer">
          {newSeedPhrase && (
            <pre style={{ whiteSpace: "pre-wrap" }}>{newSeedPhrase}</pre>
          )}
        </Card>
        <Button
          className="frontPageButton"
          type="default"
          onClick={() => setWalletAndMnemonic()}
          disabled={newSeedPhrase === null}
        >
          Open Your New Wallet
        </Button>
        <p className="frontPageBottom" onClick={() => navigate("/")}>
          Back Home
        </p>
      </div>
    </>
  );
}

export default CreateAccount;
