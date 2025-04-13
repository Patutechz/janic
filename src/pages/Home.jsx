// import supabase from "../config/supabaseClient";
// import { useEffect, useState } from "react";
// 6206241345
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import Hero from "../assets/img/undraw_order_delivered_re_v4ab.svg";

const Home = () => {
  const navigate = useNavigate();
  const [tracking_number, setTracking_number] = useState("");
  const [results, setResults] = useState(null);
  const [formError, setFormError] = useState(null);
  const handleSearch = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("consignments")
      .select("*")
      .eq("tracking_number", tracking_number)
      .single();

    if (error || !data) {
      alert("consignemnt not found");
    } else {
      navigate(`/${data.id}`);
    }

    // if (error) {
    //   console.log(error);
    //   setFormError('No results found!.')
    //   // alert("No results found!.");
    //   // console.error()
    // }else{
    //   // console.log(data[0].id);
    //   // setFormError(null)
    //   setResults(data[0]);
    //   console.log(results)
    //   // console.log(data[0].id)
    //   // navigate('/' + data[0].id)
    // }

    // if (data) {
    //   console.log(data[0].id);
    //   // setFormError(null)
    //   // setResults(data[0]);
    //   // console.log(data[0].id)
    //   navigate('/' + data[0].id)
    // }
  };
  return (
    <>
      <main>
        <section className="hero has-text-centered is-fullheight">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered is-vcentered">
                <div className="column is-9 has-text-centered mt-6">
                  <p className="subtitle has-text-weight-bold has-text-primary">
                    Safe and secure shipping company
                  </p>
                  <h1
                    className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile has-text-weight-boldd"
                    style={{ fontWeight: "900" }}
                  >
                    Ship and Track On The Best Platform
                  </h1>
                  <h2
                    className="subtitle is-size-4-tablet mx-auto"
                    style={{ maxWidth: "34em" }}
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere dignissimos voluptatum eveniet
                  </h2>
                  <div className="buttons is-centered">
                    <form onSubmit={handleSearch}>
                      <div className="field has-addons">
                        <p className="control is-expanded">
                          <input
                            placeholder="Search Tracking number"
                            className="input is-fullweight"
                            type="text"
                            value={tracking_number}
                            onChange={(e) => setTracking_number(e.target.value)}
                          ></input>
                        </p>
                        <p>
                          <button className="button is-primary">
                            Track Product
                          </button>
                        </p>
                      </div>
                    </form>
                  </div>

                  <img alt="Hero" width="500" height="500" src={Hero} />
                </div>
              </div>
            </div>
          </div>
          <div className="hero-foot">
            <div className="container"></div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title has-text-centered">
              Our <span className="has-text-primary">Services</span>
            </h1>
            <h2
              className="subtitle has-text-centered  mx-auto"
              style={{ maxWidth: "34em" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
              dignissimos voluptatum eveniet
            </h2>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
