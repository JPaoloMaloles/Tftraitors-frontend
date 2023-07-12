export function SummonerInfoIndex(props) {
  return (
    <>
      <h1> SummonerInfoIndex</h1>
      {props.summonerInfos.map((summonerInfo) => (
        <div key={summonerInfo.id}>
          <p>puuid: {summonerInfo.puuid}</p>
          <p>tier: {summonerInfo.tier}</p>
          <p>rank: {summonerInfo.rank}</p>
          <p>league_points: {summonerInfo.league_points}</p>
          <p>riot_summoner_id: {summonerInfo.riot_summoner_id}</p>
          <p>summoner_name: {summonerInfo.summoner_name}</p>
          <p>wins: {summonerInfo.wins}</p>
          <p>losses: {summonerInfo.losses}</p>
          <button type="input" onClick={() => props.handleSetIsSummonerInfoVisible(summonerInfo)}>
            Show More
          </button>
          <p></p>
        </div>
      ))}
    </>
  );
}
