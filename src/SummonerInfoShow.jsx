export function SummonerInfoShow(props) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.handleUpdateSummonerInfo(props.currentSummonerInfo.id, params, () => event.target.reset);
  };

  return (
    <>
      <h1> SummonerInfoShow</h1>
      <p>puuid: {props.currentSummonerInfo.puuid}</p>
      <p>tier: {props.currentSummonerInfo.tier}</p>
      <p>rank: {props.currentSummonerInfo.rank}</p>
      <p>league_points: {props.currentSummonerInfo.league_points}</p>
      <p>riot_summoner_id: {props.currentSummonerInfo.riot_summoner_id}</p>
      <p>summoner_name: {props.currentSummonerInfo.summoner_name}</p>
      <p>wins: {props.currentSummonerInfo.wins}</p>
      <p>losses: {props.currentSummonerInfo.losses}</p>
      <p></p>
      <h1> Update </h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          puuid: <input name="puuid" defaultValue={props.currentSummonerInfo.puuid} type="text"></input>
        </div>
        <div>
          tier: <input name="tier" defaultValue={props.currentSummonerInfo.tier} type="text"></input>
        </div>
        <div>
          rank: <input name="rank" defaultValue={props.currentSummonerInfo.rank} type="text"></input>
        </div>
        <div>
          league_points:{" "}
          <input name="league_points" defaultValue={props.currentSummonerInfo.league_points} type="text"></input>
        </div>
        <div>
          riot_summoner_id:{" "}
          <input name="riot_summoner_id" defaultValue={props.currentSummonerInfo.riot_summoner_id} type="text"></input>
        </div>
        <div>
          summoner_name:{" "}
          <input name="summoner_name" defaultValue={props.currentSummonerInfo.summoner_name} type="text"></input>
        </div>
        <div>
          wins: <input name="wins" defaultValue={props.currentSummonerInfo.wins} type="text"></input>
        </div>
        <div>
          losses: <input name="losses" defaultValue={props.currentSummonerInfo.losses} type="text"></input>
        </div>
        <button type="submit"> Update Summoner Info </button>
      </form>
    </>
  );
}
