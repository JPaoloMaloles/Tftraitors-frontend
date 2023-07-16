import axios from "axios";

export function LogoutLink() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <p></p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title" style={{ textAlign: "center" }}>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
}
