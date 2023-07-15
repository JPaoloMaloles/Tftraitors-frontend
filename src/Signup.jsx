import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 style={{ color: "white" }}>Signup</h1>
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
              Name:
              <p>
                <input name="name" type="text" />
              </p>
            </div>
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
            <div>
              Password confirmation:
              <p>
                <input name="password_confirmation" type="password" />
              </p>
            </div>
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
      <p></p>
    </div>
  );
}
