export function SummonerInfoShow(props) {
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
    </>
  );
}
