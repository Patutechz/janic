// import supabase from "../config/supabaseClient";
// import { useEffect, useState } from "react";
// 6206241345
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import Swal from "sweetalert2";
import Hero from "../assets/img/undraw_order_delivered_re_v4ab.svg";
import MyFooter from "../components/MyFooter.jsx";

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
      Swal.fire("Oops", "Package not found", "error");
    } else {
      Swal.fire("Good Job!", "Package found", "success");
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
                    Delivering Trust, One Package at a Time
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
        </section>
        <section className="section">
          <div className="container"  style={{maxWidth: "960px"}}>
            <h1 className="title is-space is-size-3-desktop is-size-4-mobile has-text-centered mb-5">
              Delivering <span className="has-text-primary"> Speed</span>, Delivering<span className="has-text-primary"> Success</span>
            </h1>
            <h2
              className="subtitle is-size-4-desktop mx-auto has-text-centered mb-6 mx-auto mt-1"
              style={{ maxWidth: "34em" }}
            >
              At Janic Express, we offer you choices that best suits your needs
            </h2>
            <div class="columns is-centered has-text-centeredd is-multiline has-text-centered mt-6">
              <div class="column is-12-touch is-4-desktop is-4-widescreen">
                <div class="box px-4 has-background-primary">
                  <span
                    class="icon is-large has-background-primary-light mb-2"
                    style={{ borderRadius: "50%" }}
                  >
                    <i class="fas fa-globe fa-lg has-text-primary"></i>
                  </span>
                  <h1 class="title is-size-4 mb-2 has-text-white">
                    Express
                  </h1>
                  <p class="has-text-white">
                    Fast Track your deliveries
                  </p>
                </div>
              </div>
              <div class="column is-12-touch is-4-desktop is-4-widescreen">
                <div class="box px-4">
                  <span
                    class="icon is-large has-background-primary-light mb-2"
                    style={{ borderRadius: "50%" }}
                  >
                    <i class="fas fa-globe fa-lg has-text-primary"></i>
                  </span>
                  <h1 class="title is-size-4 mb-2">Logistics</h1>
                  <p>
                    Effective Logistics, Enhanced Productivity
                  </p>
                </div>
              </div>
              <div class="column is-12-touch is-4-desktop is-4-widescreen">
                <div class="box px-4">
                  <span
                    class="icon is-large has-background-primary-light mb-2"
                    style={{ borderRadius: "50%" }}
                  >
                    <i class="fas fa-globe fa-lg has-text-primary"></i>
                  </span>
                  <h1 class="title is-size-4 mb-2">Freight</h1>
                  <p>
                    Reliable Freight, delivered with care
                  </p>
                </div>
              </div>
              <div class="column is-12-touch is-4-desktop is-4-widescreen">
                <div class="box px-4">
                  <span
                    class="icon is-large has-background-primary-light mb-2"
                    style={{ borderRadius: "50%" }}
                  >
                    <i class="fas fa-globe fa-lg has-text-primary"></i>
                  </span>
                  <h1 class="title is-size-4 mb-2">E-commerce</h1>
                  <p>
                    Fast and reliable E-commerce shipping
                  </p>
                </div>
              </div>
              <div class="column is-12-touch is-4-desktop is-4-widescreen">
                <div class="box px-4">
                  <span
                    class="icon is-large has-background-primary-light mb-2"
                    style={{ borderRadius: "50%" }}
                  >
                    <i class="fas fa-globe fa-lg has-text-primary"></i>
                  </span>
                  <h1 class="title is-size-4 mb-2">Supply Chain</h1>
                  <p>
                    End-to-End Supply chain solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MyFooter />
    </>
  );
};

export default Home;
