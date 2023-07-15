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
      <h1 style={{ color: "white" }}> Import Summoner Info</h1>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title"></h1>

          <p className="card=text">
            <form onSubmit={handleOnSubmit}>
              <div>
                Region:
                <p>
                  <input name="region" type="text"></input>
                </p>
              </div>
              <div>
                Summoner Name:
                <p>
                  <input name="summonerName" type="text"></input>
                </p>
                {/* set this to lowercase in axios request */}
              </div>
              <p></p>
              <button type="submit"> Import Summoner Info </button>
              {/* button needs css to match the SummonerInfoIndex's Show more button */}
            </form>
          </p>
        </div>
      </div>
      <p></p>
    </div>
  );
}
