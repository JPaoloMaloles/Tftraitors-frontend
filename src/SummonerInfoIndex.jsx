import Accordion from "react-bootstrap/Accordion";
import "./SummonerInfoIndex.css";

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
                          src={"https://dotesports.com/wp-content/uploads/2023/07/TFT_Mortdog.jpg?w=1200"}
                          style={{ width: "120px" }}
                        />
                      </div>
                      <div className="col-sm-4" style={{ color: "blue", fontSize: "20px" }}>
                        <p></p>
                        {summonerInfo.summoner_name}
                        <p></p>
                      </div>
                      <div className="col-sm-5">
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
                </div>

                <div className="container">
                  <h2> Recent Matches </h2>
                  <Accordion>
                    {[...summonerInfo.match_summoner_performances]
                      .reverse()
                      .map((match_summoner_performance, index) => (
                        <div key={match_summoner_performance.id}>
                          <Accordion>
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header> Match #{index + 1} </Accordion.Header>
                              <Accordion.Body>
                                <div style={{ fontSize: "13px" }}>
                                  <div className="row">
                                    <div>
                                      <b>match id:</b> <p>{match_summoner_performance.match_id}</p>{" "}
                                    </div>
                                    <div>
                                      <b>summoner_info_id:</b> <p>{match_summoner_performance.summoner_info_id}</p>{" "}
                                    </div>
                                    <div>
                                      <b>riot_match_id:</b> <p>{match_summoner_performance.riot_match_id}</p>{" "}
                                    </div>
                                    <div>
                                      <b>puuid:</b> <p>{match_summoner_performance.puuid}</p>{" "}
                                    </div>
                                    <div>
                                      <b>gold_left:</b> <p>{match_summoner_performance.gold_left}</p>{" "}
                                    </div>
                                    <div>
                                      <b>last_round:</b> <p>{match_summoner_performance.last_round}</p>{" "}
                                    </div>
                                    <div>
                                      <b>level_placement:</b> <p>{match_summoner_performance.level_placement}</p>{" "}
                                    </div>
                                    <div>
                                      <b>players_eliminated:</b> <p>{match_summoner_performance.players_eliminated}</p>{" "}
                                    </div>
                                    <div>
                                      <b>time_eliminated:</b> <p>{match_summoner_performance.time_eliminated}</p>{" "}
                                    </div>
                                    <div>
                                      <b>total_damage_to_players:</b>{" "}
                                      <p>{match_summoner_performance.total_damage_to_players}</p>{" "}
                                    </div>
                                    <div>
                                      <b>first_augment:</b> <p>{match_summoner_performance.first_augment}</p>{" "}
                                    </div>
                                    <div>
                                      <b>second_augment:</b> <p>{match_summoner_performance.second_augment}</p>{" "}
                                    </div>
                                    <div>
                                      <b>third_augment:</b> <p>{match_summoner_performance.third_augment}</p>{" "}
                                    </div>
                                    <div>
                                      <b>companion_id:</b> <p>{match_summoner_performance.companion_id}</p>{" "}
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      ))}
                  </Accordion>
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
