import { useEffect, useState } from "react";
import "./App.css";
import { SummonerInfoIndex } from "./SummonerInfoIndex";
import axios from "axios";
import { Modal } from "./Modal";
import { SummonerInfoShow } from "./SummonerInfoShow";

function App() {
  const [summonerInfos, setSummonerInfos] = useState([]);
  const [isSummonerInfoVisible, setIsSummonerInfoVisible] = useState(false);
  const [currentSummonerInfo, setCurrentSummonerInfo] = useState({});

  const handleSetSummonerInfos = () => {
    axios.get(`http://localhost:3000/summoner_infos.json`).then((response) => {
      console.log("handleSetSummonerInfos", response.data);
      setSummonerInfos(response.data);
    });
  };

  const handleSetIsSummonerInfoVisible = (summonerInfo) => {
    console.log("handleSetIsSummonerInfoVisible");
    setIsSummonerInfoVisible(true);
    handleSetCurrentSummonerInfo(summonerInfo);
  };

  const handleSetCurrentSummonerInfo = (summonerInfo) => {
    axios.get(`http://localhost:3000/summoner_infos/${summonerInfo.id}.json`).then((response) => {
      console.log("handleSetCurrentSummonerInfo", response.data);
      setCurrentSummonerInfo(response.data);
    });
  };

  const onClose = () => {
    setIsSummonerInfoVisible(false);
  };

  useEffect(handleSetSummonerInfos, []);

  return (
    <>
      <h1> App Page </h1>
      <SummonerInfoIndex
        summonerInfos={summonerInfos}
        handleSetIsSummonerInfoVisible={handleSetIsSummonerInfoVisible}
      />
      <Modal show={isSummonerInfoVisible} onClose={onClose}>
        <SummonerInfoShow currentSummonerInfo={currentSummonerInfo} />
      </Modal>
    </>
  );
}

export default App;
