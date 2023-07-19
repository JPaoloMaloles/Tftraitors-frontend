// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.css";
//aaa

export function SummonerInfoShow(props) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.handleUpdateSummonerInfo(props.currentSummonerInfo.id, params, () => event.target.reset());
  };

  const handleOnClick = () => {
    props.handleDestroySummonerInfo(props.currentSummonerInfo);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> SummonerInfoShow </h5>

          <p>puuid: {props.currentSummonerInfo.puuid}</p>
          <p>tier: {props.currentSummonerInfo.tier}</p>
          <p>rank: {props.currentSummonerInfo.rank}</p>
          <p>league_points: {props.currentSummonerInfo.league_points}</p>
          <p>riot_summoner_id: {props.currentSummonerInfo.riot_summoner_id}</p>
          <p>summoner_name: {props.currentSummonerInfo.summoner_name}</p>
          <p>wins: {props.currentSummonerInfo.wins}</p>
          <p>losses: {props.currentSummonerInfo.losses}</p>
          <p></p>
        </div>
      </div>

      <p></p>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> Update </h5>

          <form onSubmit={handleOnSubmit}>
            <div>
              puuid: <input name="puuid" defaultValue={props.currentSummonerInfo.puuid} type="text" />
            </div>
            <div>
              tier: <input name="tier" defaultValue={props.currentSummonerInfo.tier} type="text" />
            </div>
            <div>
              rank: <input name="rank" defaultValue={props.currentSummonerInfo.rank} type="text" />
            </div>
            <div>
              league_points:{" "}
              <input name="league_points" defaultValue={props.currentSummonerInfo.league_points} type="text" />
            </div>
            <div>
              riot_summoner_id:{" "}
              <input name="riot_summoner_id" defaultValue={props.currentSummonerInfo.riot_summoner_id} type="text" />
            </div>
            <div>
              summoner_name:{" "}
              <input name="summoner_name" defaultValue={props.currentSummonerInfo.summoner_name} type="text" />
            </div>
            <div>
              wins: <input name="wins" defaultValue={props.currentSummonerInfo.wins} type="text" />
            </div>
            <div>
              losses: <input name="losses" defaultValue={props.currentSummonerInfo.losses} type="text" />
            </div>
            <button type="submit"> Update Summoner Info </button>
          </form>
          <button type="input" onClick={handleOnClick}>
            Destroy Summoner Info
          </button>
        </div>
      </div>
    </>
  );
}
