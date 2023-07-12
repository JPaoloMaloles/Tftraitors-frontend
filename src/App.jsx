import { useEffect, useState } from "react";
import "./App.css";
import { SummonerInfoIndex } from "./SummonerInfoIndex";
import axios from "axios";
import { Modal } from "./Modal";
import { SummonerInfoShow } from "./SummonerInfoShow";
import { SummonerInfoCreate } from "./SummonerInfoCreate";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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

  const handleCreateSummonerInfo = (params) => {
    axios.post(`http://localhost:3000/summoner_infos.json`, params).then((response) => {
      console.log("handleCreateSummonerInfo", response.data);
      setSummonerInfos([...summonerInfos, response.data]);
    });
  };

  const handleUpdateSummonerInfo = (id, params) => {
    axios.patch(`http://localhost:3000/summoner_infos/${id}.json`, params).then((response) => {
      setSummonerInfos(
        summonerInfos.map((summonerInfo) => {
          if (summonerInfo.id == response.data.id) {
            return response.data;
          } else {
            return summonerInfo;
          }
        })
      );
      onClose();
    });
  };

  useEffect(handleSetSummonerInfos, []);

  return (
    <>
      <h1> App Page </h1>
      <Signup />
      <Login />
      <LogoutLink />

      <SummonerInfoCreate handleCreateSummonerInfo={handleCreateSummonerInfo} />
      <SummonerInfoIndex
        summonerInfos={summonerInfos}
        handleSetIsSummonerInfoVisible={handleSetIsSummonerInfoVisible}
      />
      <Modal show={isSummonerInfoVisible} onClose={onClose}>
        <SummonerInfoShow
          currentSummonerInfo={currentSummonerInfo}
          handleUpdateSummonerInfo={handleUpdateSummonerInfo}
        />
      </Modal>
    </>
  );
}

export default App;
