export function ImportSummonerInfo(props) {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("THIS IS params", event.target.elements.region.value);
    console.log(event.target.region.value);
    console.log(event.target.summonerName.value);
    const params = new FormData(event.target);
    // const region = event.target.elements.region.value;
    // const summonerName = event.target.elements.summonerName.value;
    // console.log(region, summonerName);
    props.handleImportSummonerInfo(event.target.region.value, event.target.summonerName.value, params, () =>
      event.target.reset()
    );
    // use params.summoner_name and params.region_id in axios request
  };

  return (
    <div>
      <h1>Import Summoner Info</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          Region: <input name="region" type="text"></input>
        </div>
        <div>
          Summoner Name: <input name="summonerName" type="text"></input>
          {/* set this to lowercase in axios request */}
        </div>
        <button type="submit"> Import Summoner Info </button>
      </form>
    </div>
  );
}
