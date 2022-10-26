import { useState } from "react";

export const Signup = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    email: "",
    display: "none",
    data: "Female",
  });

  const checkboxHandler = (e) => {
    setState({
      display: e.target.checked ? "block" : "none",
    });
  };

  const radioButtonHandler = (e) => {
    console.log("change triggered");
    setState({
      data: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You Have Successfully Submitted the form");
  };
  const updateName = (e) => {
    e.preventDefault();
    setState({ ...state, name: e.target.value });
  };
  const updateAge = (e) => {
    e.preventDefault();
    setState({ ...state, age: e.target.value });
  };
  const updateEmail = (e) => {
    e.preventDefault();
    setState({ ...state, email: e.target.value });
  };

  return (
    <div className="container fuild">
      <div class="row">
        <div class="col-12">
          <h3>Welcome to Sign-Up from</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                class="form-control"
                id="firstname"
                aria-describedby="emailHelp"
                placeholder="Enter firstname"
                value={state.name}
                onChange={updateName}
                required
                autoComplete="off"
              ></input>
            </label>
            <br />
            <label>
              Age:
              <input
                type="number"
                class="form-control"
                id="name"
                aria-describedby="emailHelp"
                placeholder="Enter Age"
                value={state.age}
                onChange={updateAge}
                required
              ></input>
            </label>
            <br />
            <label>
              Email address:
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={updateEmail}
                required
              ></input>
            </label>
            <br />
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                data-testid="my-checkbox"
                id="exampleCheck1"
                onClick={checkboxHandler}
              />
              <label
                class="form-check-label"
                data-testid="my-div"
                for="exampleCheck1"
                style={state}
              >
                This should only be visible when checkbox is checked.
              </label>
            </div>
            <br />
            <div class="input-group">
              <label>
                <input
                  type="radio"
                  name="gender1"
                  value="Female"
                  onClick={radioButtonHandler}
                  checked={"Female" === state.data}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender1"
                  value="Male"
                  onClick={radioButtonHandler}
                  checked={"Male" === state.data}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender1"
                  value="Other"
                  onClick={radioButtonHandler}
                  checked={"Other" === state.data}
                />
                Other
              </label>
            </div>
            <br />

            <input type="submit" value="Submit" disabled={state.name === ""} />
          </form>
        </div>
      </div>
    </div>
  );
};
