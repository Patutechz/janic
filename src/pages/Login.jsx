import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("User Logged In")
  };

  return (
    <>
      <section className="hero is-fullheight is-light has-background-white-bis">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered is-vcentered">
              <div className="column is-5-tablet is-4-desktop is-4-widescreen">
                {/* <progress value={50} max={100} /> */}
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title is-centered is-size-4">Login</p>
                  </header>
                  <div className="card-content">
                    <form onSubmit={handleSubmit}>
                      <div className="field">
                        <label className="label mt-4 mb-1 has-text-weight-medium">
                          Email address:
                        </label>
                        <div className="control">
                          <input
                            type="email"
                            placeholder="Enter Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="input"
                          />
                        </div>
                      </div>

                      <div className="field">
                        <label className="label mt-4 mb-1 has-text-weight-medium">
                          Password:
                        </label>
                        <div className="control">
                          <input
                            placeholder="Enter Your Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="input"
                          />
                        </div>
                      </div>

                      <div className="field">
                        <button className="button is-fullwidth is-primary">Login</button>
                      </div>

                      {/* {error && <div className="error has-text-danger">{error}</div>} */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
