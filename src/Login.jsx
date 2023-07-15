import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <>
      <div id="login">
        <h1 style={{ color: "white" }}>Login</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"></h5>

            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <div>
                Email:
                <p>
                  <input name="email" type="email" />
                </p>
              </div>
              <div>
                Password:
                <p>
                  <input name="password" type="password" />
                </p>
              </div>
              <p></p>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <p></p>
      </div>
    </>
  );
}
