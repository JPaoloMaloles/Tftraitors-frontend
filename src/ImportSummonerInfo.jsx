export function ImportSummonerInfo(props) {
  var updateState;
  var updateColor;

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

  if (props.isImportInProgress === true) {
    console.log("aaaa");
    updateState = "Importing...";
    updateColor = "red";
  } else if (props.isImportInProgress === false) {
    console.log("bbbb");
    updateState = "Importing... Done";
    updateColor = "green";
  }

  return (
    <div>
      <h1 style={{ color: "white" }}> Import Summoner Info</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title"></h5>

          <form onSubmit={handleOnSubmit}>
            <div>Region:</div>
            <p>
              <input name="region" type="text"></input>
            </p>
            <div>
              Summoner Name:
              {/* set this to lowercase in axios request */}
            </div>
            <p>
              <input name="summonerName" type="text"></input>
            </p>
            <p></p>
            <button type="submit"> Import Summoner Info </button>{" "}
            <div style={{ color: updateColor }}> {updateState}</div>
            {/* button needs css to match the SummonerInfoIndex's Show more button */}
          </form>
        </div>
      </div>
      <p></p>
    </div>
  );
}
