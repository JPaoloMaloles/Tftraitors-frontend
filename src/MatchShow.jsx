import Accordion from "react-bootstrap/Accordion";

export function MatchShow(props) {
  return (
    <div>
      {/* {props.summonerInfo.matches.map((match) => (
        <div key={match.id}></div>
      ))} */}
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header> Entire Match Info </Accordion.Header>
          <Accordion.Body>
            <div style={{ fontSize: "13px" }}>
              <div className="row">
                <div className="col-sm-12">
                  <b>game_version:</b> {props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].game_version}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <b>data_version:</b>{" "}
                  <p>{props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].data_version}</p>
                </div>
                <div className="col-sm-3">
                  <b>riot_match_id:</b>{" "}
                  <p>{props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].riot_match_id}</p>
                </div>
                <div className="col-sm-3">
                  <b>game_datetime:</b>{" "}
                  <p>
                    {new Date(
                      props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].game_datetime
                    ).toLocaleDateString("en-US")}{" "}
                    {new Date(
                      props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].game_datetime
                    ).toLocaleTimeString("en-US")}
                  </p>
                </div>
                <div className="col-sm-3">
                  <b>queu_id:</b> <p>{props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].queu_id}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <b>game_length:</b>{" "}
                  <p>
                    {parseInt(props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].game_length / 60)}:
                    {parseInt(
                      ((props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].game_length / 60) % 1) * 100
                    )}
                  </p>
                </div>
                <div className="col-sm-3">
                  <b>tft_game_type:</b>{" "}
                  <p>{props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].tft_game_type}</p>
                </div>
                <div className="col-sm-3">
                  <b>tft_set_core_name:</b>{" "}
                  <p>{props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].tft_set_core_name}</p>
                </div>
                <div className="col-sm-3">
                  <b>tft_set_number:</b>{" "}
                  <p>{props.summonerInfo.matches[props.MatchSummonerPerformanceIndex].tft_set_number}</p>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
