export function SummonerInfoIndex(props) {
  return (
    <>
      <h1> SummonerInfoIndex</h1>
      {props.summonerInfos.map((summonerInfos) => (
        <div key={summonerInfos.id}>
          <p>puuid: {summonerInfos.puuid}</p>
          <p>tier: {summonerInfos.tier}</p>
          <p>rank: {summonerInfos.rank}</p>
          <p>league_points: {summonerInfos.league_points}</p>
          <p>riot_summoner_id: {summonerInfos.riot_summoner_id}</p>
          <p>summoner_name: {summonerInfos.summoner_name}</p>
          <p>wins: {summonerInfos.wins}</p>
          <p>losses: {summonerInfos.losses}</p>
          <p></p>
        </div>
      ))}
    </>
  );
}
