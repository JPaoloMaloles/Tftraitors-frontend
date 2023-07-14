export function ImportSummonerInfo() {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // props.handleCreateSummonerInfo(params, () => event.target.reset());
    // use params.summoner_name and params.region_id in axios request
  };

  return (
    <div>
      <h1>Import Summoner Info</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          region: <input name="region" type="text"></input>
        </div>
        <div>
          summoner_name: <input name="summoner_name" type="text"></input>
          {/* set this to lowercase in axios request */}
        </div>
        <button type="submit"> Import Summoner Info </button>
      </form>
    </div>
  );
}
