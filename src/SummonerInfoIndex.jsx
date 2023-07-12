export function SummonerInfoIndex(props) {
  return (
    <>
      <h1> SummonerInfoIndex</h1>
      {props.summonerInfos.map((summonerInfo) => (
        <div key={summonerInfo.id}>
          <h2> {summonerInfo.summoner_name} </h2>
          <p>puuid: {summonerInfo.puuid}</p>
          <p>tier: {summonerInfo.tier}</p>
          <p>rank: {summonerInfo.rank}</p>
          <p>league_points: {summonerInfo.league_points}</p>
          <p>riot_summoner_id: {summonerInfo.riot_summoner_id}</p>
          <p>wins: {summonerInfo.wins}</p>
          <p>losses: {summonerInfo.losses}</p>
          <button type="input" onClick={() => props.handleSetIsSummonerInfoVisible(summonerInfo)}>
            Show More
          </button>
          <h3>Matches:</h3>
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
          <p></p>
        </div>
      ))}
    </>
  );
}
