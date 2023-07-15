export function SummonerInfoCreate(props) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.handleCreateSummonerInfo(params, () => event.target.reset());
  };

  return (
    <div>
      <h1 style={{ color: "white" }}> Create Summoner Info </h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"> dsweb</h5>

          <p className="card=text">
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
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
}
