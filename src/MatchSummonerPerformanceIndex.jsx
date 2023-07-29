import Accordion from "react-bootstrap/Accordion";
import { MatchShow } from "./MatchShow";

export function MatchSummonerPerformance(props) {
  var sorted = props.summonerInfo.match_summoner_performances?.sort((a, b) =>
    props.summonerInfo.matches.find((match) => match.riot_match_id == a.riot_match_id).game_datetime >
    props.summonerInfo.matches.find((match) => match.riot_match_id == b.riot_match_id).game_datetime
      ? -1
      : props.summonerInfo.matches.find((match) => match.riot_match_id == b.riot_match_id).game_datetime >
        props.summonerInfo.matches.find((match) => match.riot_match_id == a.riot_match_id).game_datetime
      ? 1
      : 0
  );

  console.log(
    "AAAAA",
    props.summonerInfo.match_summoner_performances?.map(
      (single) => props.summonerInfo.matches.find((match) => match.riot_match_id == single.riot_match_id).game_datetime
    )
  );
  console.log(
    "BBBBBBBB",
    props.summonerInfo.match_summoner_performances?.map((single) =>
      new Date(
        props.summonerInfo.matches.find((match) => match.riot_match_id == single.riot_match_id).game_datetime
      ).toLocaleTimeString("en-US")
    )
  );

  // console.log("==============", props.summonerInfo.match_summoner_performances);
  console.log("SORTED NOW)", sorted);
  console.log(
    "==========",
    sorted?.map((single) =>
      new Date(
        props.summonerInfo.matches.find((match) => match.riot_match_id == single.riot_match_id).game_datetime
      ).toLocaleDateString("en-US")
    )
  );

  console.log(
    "++++++++++",
    sorted?.map((single) =>
      new Date(
        props.summonerInfo.matches.find((match) => match.riot_match_id == single.riot_match_id).game_datetime
      ).toLocaleTimeString("en-US")
    )
  );

  // console.log(
  //   "ORIGINAL",
  //   props.summonerInfo.match_summoner_performances?.map((a) => a)
  // );
  // console.log(
  //   "SORTED",
  //   props.summonerInfo.match_summoner_performances
  //     ?.sort((a, b) => (a.placement > b.placement ? 1 : b.placement > a.placement ? -1 : 0))
  //     .map((a) => a)
  // );
  return (
    <div>
      <h2> Recent Matches</h2>
      <Accordion>
        {props.summonerInfo.match_summoner_performances?.map((match_summoner_performance, index) => (
          <div key={match_summoner_performance.id}>
            <Accordion>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  <div className="col-sm-9">Match #{index + 1}</div>
                  {/* <div className="col-sm-4">{props.summonerInfo.matches[index].game_datetime}</div> */}
                  <div className="col-sm-1">
                    {new Date(
                      props.summonerInfo.matches.find(
                        (match) => match.riot_match_id == match_summoner_performance.riot_match_id
                      ).game_datetime
                    ).toLocaleDateString("en-US")}
                  </div>
                  <div className="col-sm-1">
                    {new Date(
                      props.summonerInfo.matches.find(
                        (match) => match.riot_match_id == match_summoner_performance.riot_match_id
                      ).game_datetime
                    ).toLocaleTimeString("en-US")}
                  </div>
                </Accordion.Header>
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

                  <MatchShow
                    summonerInfo={props.summonerInfo}
                    MatchSummonerPerformanceIndex={index}
                    MatchSummonerPerformance={match_summoner_performance}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        ))}
      </Accordion>
    </div>
  );
}
