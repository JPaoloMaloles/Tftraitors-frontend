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
                                  <div className="row" style={{ backgroundColor: "#E5F3FD" }}>
                                    <div className="col-sm-12">
                                      <b>puuid:</b> {match_summoner_performance.puuid}{" "}
                                    </div>
                                  </div>
                                  <div className="row" style={{ backgroundColor: "#F5FBFF" }}>
                                    <div className="col-sm-2">
                                      <b>match id:</b> <p>{match_summoner_performance.match_id}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>summoner id:</b> <p>{match_summoner_performance.summoner_info_id}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>riot match id:</b> <p>{match_summoner_performance.riot_match_id}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>companion id:</b> <p>{match_summoner_performance.companion_id}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>time eliminated:</b>{" "}
                                      <p>
                                        {parseInt(match_summoner_performance.time_eliminated / 60)}:
                                        {parseInt(((match_summoner_performance.time_eliminated / 60) % 1) * 100)}
                                      </p>{" "}
                                    </div>
                                  </div>
                                  <div className="row" style={{ backgroundColor: "#F5FBFF" }}>
                                    <div className="col-sm-2">
                                      <b>gold left:</b> <p>{match_summoner_performance.gold_left}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>last round:</b> <p>{match_summoner_performance.last_round}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>level:</b> <p>{match_summoner_performance.level}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>placement:</b> <p>{match_summoner_performance.placement}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>players eliminated:</b> <p>{match_summoner_performance.players_eliminated}</p>{" "}
                                    </div>
                                    <div className="col-sm-2">
                                      <b>player damage:</b> <p>{match_summoner_performance.total_damage_to_players}</p>{" "}
                                    </div>
                                  </div>
                                  <div className="row" style={{ backgroundColor: "#F5FBFF" }}>
                                    <div className="col-sm-5">
                                      <b>augments:</b>
                                      <div>{match_summoner_performance.first_augment}</div>
                                      <div>{match_summoner_performance.second_augment}</div>
                                      <div>{match_summoner_performance.third_augment}</div>
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
