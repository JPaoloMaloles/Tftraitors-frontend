export function SummonerInfoCreate(props) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.handleCreateSummonerInfo(params, () => event.target.reset);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        puuid: <input name="puuid" type="text"></input>
      </div>
      <div>
        tier: <input name="tier" type="text"></input>
      </div>
      <div>
        rank: <input name="rank" type="text"></input>
      </div>
      <div>
        league_points: <input name="league_points" type="text"></input>
      </div>
      <div>
        riot_summoner_id: <input name="riot_summoner_id" type="text"></input>
      </div>
      <div>
        summoner_name: <input name="summoner_name" type="text"></input>
      </div>
      <div>
        wins: <input name="wins" type="text"></input>
      </div>
      <div>
        losses: <input name="losses" type="text"></input>
      </div>
      <button type="submit">Create Summoner Info </button>
    </form>
  );
}
