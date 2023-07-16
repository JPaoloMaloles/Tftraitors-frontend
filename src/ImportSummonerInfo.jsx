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
              <input
                list="region_abbv"
                name="region"
                pattern="BR1|EUN1|EUW1|JP1|KR|LA1|LA2|NA1|OC1|PH2|RU|SG2|TH2|TR1|TW2|VN2"
                title="Must be BR1, EUN1, EUW1, JP1, KR, LA1, LA2, NA1, OC1, PH2, RU, SG2, TH2, TR1, TW2, or
    VN2, delete entry to have dropdown appear"
              />
              <datalist id="region_abbv">
                <option value="BR1" />
                <option value="EUN1" />
                <option value="EUW1" />
                <option value="JP1" />
                <option value="KR" />
                <option value="LA1" />
                <option value="LA2" />
                <option value="NA1" selected />
                <option value="OC1" />
                <option value="PH2" />
                <option value="RU" />
                <option value="SG2" />
                <option value="TH2" />
                <option value="TR1" />
                <option value="TW2" />
                <option value="VN2" />
              </datalist>
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
