import Accordion from "react-bootstrap/Accordion";

export function SummonerInfoIndex(props) {
  return (
    <>
      <h1> SummonerInfoIndex</h1>
      {props.summonerInfos.map((summonerInfo) => (
        <div key={summonerInfo.id}>
          {/* <div className="row"> */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> SummonerInfoShow </h5>

                <p className="card=text">
                  <p>puuid: {summonerInfo.puuid}</p>
                  <p>tier: {summonerInfo.tier}</p>
                  <p>rank: {summonerInfo.rank}</p>
                  <p>league_points: {summonerInfo.league_points}</p>
                  <p>riot_summoner_id: {summonerInfo.riot_summoner_id}</p>
                  <p>summoner_name: {summonerInfo.summoner_name}</p>
                  <p>wins: {summonerInfo.wins}</p>
                  <p>losses: {summonerInfo.losses}</p>
                  <p></p>
                  <button type="input" onClick={() => props.handleSetIsSummonerInfoVisible(summonerInfo)}>
                    Show More
                  </button>
                  <p></p>

                  <Accordion>
                    {[...summonerInfo.match_summoner_performances]
                      .reverse()
                      .map((match_summoner_performance, index) => (
                        <div key={match_summoner_performance.id}>
                          <Accordion>
                            <Accordion.Item eventKey={index}>
                              <Accordion.Header> Match #{index + 1} </Accordion.Header>
                              <Accordion.Body>
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
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      ))}
                  </Accordion>
                  <p></p>

                  {/* <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header> Accordion Item #1 </Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Accordion Item #2</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}
                </p>
              </div>
            </div>
            <p></p>
          </div>
          {/* </div> */}
          {/* <h3>Matches:</h3>
          {summonerInfo.match_summoner_performances.map((match_summoner_performance) => (
            <div key={match_summoner_performance.id}>
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
          ))}
          <p></p> */}
        </div>
      ))}
    </>
  );
}
