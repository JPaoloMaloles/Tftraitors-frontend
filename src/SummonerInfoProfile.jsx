// import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import { MatchSummonerPerformance } from "./MatchSummonerPerformanceIndex";
export function SummonerInfoProfile(props) {
  // // Get the userId param from the URL.
  const { param_region, param_summoner_name } = useParams();
  console.log("params", param_region, param_summoner_name);

  // the reason why this is erroring is because nothing this is essentially unordered code, so console.log cannot read summonerProfile.region because summonerProfile hasnt been set yet (and thus is undefined)

  // let summonerProfile = props.summonerInfos
  //   .filter((summonerInfo) => summonerInfo.region === param_region)
  //   .find((summoner_Info) => summoner_Info.summoner_name === param_summoner_name);

  // console.log("Summoner Profile:", summonerProfile);
  // console.log("Summoner Profile:", summonerProfile.region);

  // useEffect(() =>
  //   props.setCurrentSummonerInfo(
  //     props.summonerInfos
  //       .filter((summonerInfo) => summonerInfo.region === param_region)
  //       .find((summoner_info) => summoner_info.summoner_name === param_summoner_name)
  //   )
  // );

  // console.log("setCurrentSummonerInfo", props.currentSummonerInfo);
  // // ...

  return (
    <div>
      <h1 style={{ color: "white" }}> SummonerInfoProfile </h1>
      <p style={{ color: "white" }}> {param_region} </p>
      <p style={{ color: "white" }}> {param_summoner_name} </p>
      {/* <div>
        <div className="card">
          <div id="top-card" style={{}}>
            <div className="card-body">
              <div className="card-title">
                <div className="row">
                  <div className="col-sm-3">
                    <img
                      src={"https://dotesports.com/wp-content/uploads/2023/07/TFT_Mortdog.jpg?w=1200"}
                      style={{ width: "120px" }}
                    />
                  </div>
                  <div className="col-sm-4" style={{ color: "blue", fontSize: "20px" }}>
                    <p></p>
                    {props.currentSummonerInfo.summoner_name}
                    <p></p>
                  </div>
                  <div className="col-sm-5">
                    <div className="card=text" style={{ textAlign: "center" }}>
                      {" "}
                      {props.currentSummonerInfo.region}
                    </div>
                    <div style={{ color: "red", fontSize: "16px", textAlign: "center" }}>
                      {props.currentSummonerInfo.rank} {props.currentSummonerInfo.tier}
                    </div>
                    <div className="card=text" style={{ textAlign: "center" }}>
                      {" "}
                      lp: {props.currentSummonerInfo.league_points}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card=text">
                <div className="row">
                  <div className="col-sm-2">
                    <div>wins: {props.currentSummonerInfo.wins}</div>
                    <div>losses: {props.currentSummonerInfo.losses}</div>
                  </div>
                  <div className="col-sm-5">STAT GRAPHIC</div>
                  <div className="col-sm-5">STAT DATA</div>
                </div>
              </div>
              <button type="input" onClick={() => props.handleSetIsSummonerInfoVisible(props.currenttSummonerInfo)}>
                Show More
              </button>
              <p></p>
            </div>

            <div className="container">
              <MatchSummonerPerformance summonerInfo={props.currentSummonerInfo} />
            </div>
            <p></p>
          </div>
        </div>
        <p></p>
      </div> */}
    </div>
  );
}
