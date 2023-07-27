import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { MatchSummonerPerformance } from "./MatchSummonerPerformanceIndex";
export function SummonerInfoProfilx(props) {
  // Get the userId param from the URL.
  const { param_region, param_summoner_name } = useParams();
  console.log("SummonerInfoProfile params", param_region, param_summoner_name);

  let summonerProfile = props.summonerInfos
    .filter((summonerInfo) => summonerInfo.region === param_region)
    .find((summoner_Info) => summoner_Info.summoner_name === param_summoner_name);
  // useEffect(() =>
  //   props.setCurrentSummonerInfo(
  // props.summonerInfos
  //   .filter((summonerInfo) => summonerInfo.region === param_region)
  //   .find((summoner_info) => summoner_info.summoner_name === param_summoner_name)
  //   )
  // );

  // useEffect(props.handleSummonerProfile(summonerProfile), []);
  // console.log("setCurrentSummonerInfo", props.currentSummonerInfo);
  // ...

  return (
    <div>
      <div>{param_region}</div>
      <div> {props.currentSummoner.name} </div>
    </div>
  );
}
