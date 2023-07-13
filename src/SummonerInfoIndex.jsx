import Accordion from "react-bootstrap/Accordion";

export function SummonerInfoIndex(props) {
  return (
    <>
      <h1> SummonerInfoIndex</h1>
      {props.summonerInfos.map((summonerInfo) => (
        <div key={summonerInfo.id}>
          {/* <div className="row"> */}
          <div>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">
                  <img
                    src={"https://dotesports.com/wp-content/uploads/2023/07/TFT_Mortdog.jpg?w=1200"}
                    style={{ width: "150px" }}
                  />{" "}
                  {summonerInfo.summoner_name}{" "}
                </h3>

                <p className="card=text">
                  <div className="row">
                    <div className="col-sm-5">puuid: {summonerInfo.puuid}</div>
                    <div className="col-sm-5">
                      rank: {summonerInfo.rank} {summonerInfo.tier}
                    </div>
                  </div>
                </p>
                <p className="card=text"> league_points: {summonerInfo.league_points}</p>
                <p className="card=text"> riot_summoner_id: {summonerInfo.riot_summoner_id}</p>
                <p className="card=text"> summoner_name: {summonerInfo.summoner_name}</p>
                <p className="card=text"> wins: {summonerInfo.wins}</p>
                <p className="card=text"> losses: {summonerInfo.losses}</p>
                <button type="input" onClick={() => props.handleSetIsSummonerInfoVisible(summonerInfo)}>
                  Show More
                </button>
                <p></p>

                <h2> Recent Matches </h2>
                <Accordion>
                  {[...summonerInfo.match_summoner_performances].reverse().map((match_summoner_performance, index) => (
                    <div key={match_summoner_performance.id}>
                      <Accordion>
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header> Match #{index + 1} </Accordion.Header>
                          <Accordion.Body>
                            <div style={{ color: "red", fontSize: "13px" }}>
                              <p> match id: {match_summoner_performance.match_id} </p>
                              <p> summoner_info_id: {match_summoner_performance.summoner_info_id} </p>
                              <p> riot_match_id: {match_summoner_performance.riot_match_id} </p>
                              <p> puuid: {match_summoner_performance.puuid} </p>
                              <p> gold_left: {match_summoner_performance.gold_left} </p>
                              <p> last_round: {match_summoner_performance.last_round} </p>
                              <p> level_placement: {match_summoner_performance.level_placement} </p>
                              <p> players_eliminated: {match_summoner_performance.players_eliminated} </p>
                              <p> time_eliminated: {match_summoner_performance.time_eliminated} </p>
                              <p> total_damage_to_players: {match_summoner_performance.total_damage_to_players} </p>
                              <p> first_augment: {match_summoner_performance.first_augment} </p>
                              <p> second_augment: {match_summoner_performance.second_augment} </p>
                              <p> third_augment: {match_summoner_performance.third_augment} </p>
                              <p> companion_id: {match_summoner_performance.companion_id} </p>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  ))}
                </Accordion>
                <p></p>
              </div>
            </div>
            <p></p>
          </div>
        </div>
      ))}
    </>
  );
}
