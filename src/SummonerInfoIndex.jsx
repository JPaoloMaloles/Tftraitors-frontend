import "./SummonerInfoIndex.css";
import { MatchSummonerPerformance } from "./MatchSummonerPerformanceIndex";

export function SummonerInfoIndex(props) {
  return (
    <div id="SummonerInfoIndexContent">
      <h1 style={{ color: "white" }}>SummonerInfoIndex</h1>
      {[...props.summonerInfos].reverse().map((summonerInfo) => (
        <div key={summonerInfo.id}>
          {/* <div className="row"> */}
          <div>
            <div className="card">
              <div id="top-card" style={{}}>
                <div className="card-body">
                  <div className="card-title">
                    <div className="row">
                      <div className="col-sm-3">
                        <img
                          src={`https://raw.communitydragon.org/pbe/game/assets/ux/summonericons/profileicon${summonerInfo?.profile_icon_id}.png`}
                          style={{ width: "120px" }}
                        />
                      </div>
                      <div className="col-sm-4" style={{ color: "blue", fontSize: "20px" }}>
                        <p></p>
                        {summonerInfo.summoner_name}
                        <p></p>
                      </div>
                      <div className="col-sm-5">
                        <div className="card=text" style={{ textAlign: "center" }}>
                          {" "}
                          {summonerInfo.region}
                        </div>
                        <div style={{ color: "red", fontSize: "16px", textAlign: "center" }}>
                          {summonerInfo.rank} {summonerInfo.tier}
                        </div>
                        <div className="card=text" style={{ textAlign: "center" }}>
                          {" "}
                          lp: {summonerInfo.league_points}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card=text">
                    <div className="row">
                      <div className="col-sm-2">
                        <div>wins: {summonerInfo.wins}</div>
                        <div>losses: {summonerInfo.losses}</div>
                      </div>
                      <div className="col-sm-5">STAT GRAPHIC</div>
                      <div className="col-sm-5">STAT DATA</div>
                    </div>
                  </div>
                  <button type="input" onClick={() => props.handleSetIsSummonerInfoVisible(summonerInfo)}>
                    Show More
                  </button>
                  <p></p>
                  <a href={`/profile/${summonerInfo.region}/${summonerInfo.summoner_name}`}>Go to Profile</a>
                  <p></p>
                </div>

                <div className="container">
                  <MatchSummonerPerformance summonerInfo={summonerInfo} />
                </div>
                <p></p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      ))}
    </div>
  );
}
