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

          <form onSubmit={handleOnSubmit}>
            <div>
              puuid:
              <p>
                <input name="puuid" type="text"></input>
              </p>
              tier:
              <p>
                <input name="tier" type="text"></input>
              </p>
              rank:
              <p>
                <input name="rank" type="text"></input>
              </p>
              league_points:
              <p>
                <input name="league_points" type="text"></input>
              </p>
              riot_summoner_id:
              <p>
                <input name="riot_summoner_id" type="text"></input>
              </p>
              summoner_name:
              <p>
                <input name="summoner_name" type="text"></input>
              </p>
              wins:
              <p>
                <input name="wins" type="text"></input>
              </p>
              losses:
              <p>
                <input name="losses" type="text"></input>
              </p>
            </div>
            <button type="submit">Create Summoner Info </button>
          </form>
        </div>
      </div>
      <p></p>
    </div>
  );
}
