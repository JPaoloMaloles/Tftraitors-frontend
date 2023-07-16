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
import { ImportSummonerInfo } from "./ImportSummonerInfo";

export function Content() {
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
    setCurrentSummonerInfo(summonerInfo);
    setIsSummonerInfoVisible(true);
  };

  const onClose = () => {
    setIsSummonerInfoVisible(false);
  };

  const handleCreateSummonerInfo = (params, successCallback) => {
    axios.post(`http://localhost:3000/summoner_infos.json`, params).then((response) => {
      console.log("handleCreateSummonerInfo", response.data);
      setSummonerInfos([...summonerInfos, response.data]);
      successCallback();
    });
  };

  const handleUpdateSummonerInfo = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/summoner_infos/${id}.json`, params).then((response) => {
      setSummonerInfos(
        summonerInfos.map((summonerInfo) => {
          if (summonerInfo.id === response.data.id) {
            return response.data;
          } else {
            return summonerInfo;
          }
        })
      );
      successCallback();
      onClose();
    });
  };

  const handleDestroySummonerInfo = (summonerInfo) => {
    console.log("handleDestroy");
    axios.delete(`http://localhost:3000/summoner_infos/${summonerInfo.id}.json`).then(() => {
      setSummonerInfos(summonerInfos.filter((s) => s.id !== summonerInfo.id));
      onClose();
    });
  };

  const handleImportSummonerInfo = (region, summonerName, params, successCallback) => {
    console.log("AAAAAAAAAAAAAAAAAAA", region, summonerName);
    console.log("BBBBBBBBBBBBBBBBBBB", params.get("region"));
    console.log("CCCCCCCCCCCCCCCCCCC", params.get("summonerName"));

    axios.post(`http://localhost:3000/riot_first.json`, params).then((response) => {
      console.log("handleImportSummonerInfo", response.data);
      setSummonerInfos([...summonerInfos, response.data]);
      console.log("Summoner ID is:", response.data.id, params.get("region"));
      console.log("PUUID is:", response.data.puuid);
      handleImportMatchId(params.get("region"), response.data.puuid, response.data.id);
      successCallback();
    });

    // // +++++++++++++++++++++++++ Functional for riot_first, fixed params ++++++++++++++++++
    // axios.get(`http://localhost:3000/riot_first.json`).then((response) => {
    //   console.log("handleImportSummonerInfo", response.data);
    //   setSummonerInfos([...summonerInfos, response.data]);
    //   successCallback();
    // });
    // // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    // =====================================================================================================================================================
    //#-----------------------------------------Blocked by cors policy, should use backend instead
    // axios
    //   .get(
    //     `https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${summonerName}?api_key=${
    //       import.meta.env.VITE_RIOT_KEY
    //     }`
    //   )
    //   .then((response) => {
    //     console.log("handleImportSummonerInfo", response.data);
    // //    the response should be a json with the new information for that summoner (this will have to be iterated over with map for matches, just like we did on request.rb). A theoretical handleImportMatchIds shoudl be called accepting what the request needs, and within there the handleImportMatch and handleImportMatchSummonerPerformance.
    //   });
    // =====================================================================================================================================================

    // need to make web request to my backend, which will then perform the same action from the backend. Once info is retrieved, need to update the frontend so that it can rerender with the new data.

    // I will have to write code to update the frontend's info to match the backend, for this one it's [...summonerInfos, response.data]
    //functions to do axios.get match_strings, then another two methods to make the posts
  };

  const handleImportMatchId = (region, puuid, summonerInfo_id) => {
    var tftRegion;
    if (region === "na1") {
      tftRegion = "americas";
    }
    axios
      .get(`http://localhost:3000/riot_second.json`, {
        params: { tftRegion: tftRegion, puuid: puuid, summonerInfo_id },
      })
      .then((response) => {
        console.log("handleImportMatchId", response.data);
        handleEachRiotMatchId(response.data);
      });
  };

  const handleEachRiotMatchId = (params) => {
    console.log("handleImportMatches", params);
    params["riot_match_ids"].forEach((riot_match_id) => {
      console.log("iteration", params["tftRegion"], riot_match_id, params["summonerInfo_id"]);
      handleImportMatches(params["tftRegion"], riot_match_id, params["summonerInfo_id"]);
    });
  };

  const handleImportMatches = (tftRegion, riot_match_id, summonerInfo_id) => {
    console.log("handleImportMatchesBEFORE", `@${tftRegion}@`, `@${riot_match_id}@`, `@${summonerInfo_id}@`);
    axios
      .post(`http://localhost:3000/riot_third.json`, {
        params: { tftRegion: tftRegion, riot_match_id: riot_match_id, summonerInfo_id: summonerInfo_id },
      })
      .then((response) => {
        console.log("handleImportMatchesAFTER", response.data);
        handleImportMatchSummonerPerformances(tftRegion, riot_match_id, summonerInfo_id, response.data.id);
      });
  };

  const handleImportMatchSummonerPerformances = (tftRegion, riot_match_id, summonerInfo_id, match_id) => {
    console.log("handleImportMatchSummonerPerformances", tftRegion, riot_match_id, summonerInfo_id, match_id);
    axios.post(`http://localhost:3000/riot_fourth.json`).then((response) => {
      console.log("ZZZZZZZZ", response.data);
    });
  };

  useEffect(handleSetSummonerInfos, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      {/* put logoutlink in the headbar, doesnt need card */}
      {/* <CardFunction />  */}
      {/* only used to test card display */}

      <SummonerInfoCreate handleCreateSummonerInfo={handleCreateSummonerInfo} />
      <ImportSummonerInfo handleImportSummonerInfo={handleImportSummonerInfo} />
      <SummonerInfoIndex
        summonerInfos={summonerInfos}
        handleSetIsSummonerInfoVisible={handleSetIsSummonerInfoVisible}
      />
      <Modal show={isSummonerInfoVisible} onClose={onClose}>
        <SummonerInfoShow
          currentSummonerInfo={currentSummonerInfo}
          handleUpdateSummonerInfo={handleUpdateSummonerInfo}
          handleDestroySummonerInfo={handleDestroySummonerInfo}
        />
      </Modal>
    </div>
  );
}
