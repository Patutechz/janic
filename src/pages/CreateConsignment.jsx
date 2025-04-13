import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import Swal from "sweetalert2";
const CreateConsignment = () => {
  // Sender Details
  const navigate = useNavigate();
  const [sender_name, setSender_name] = useState("");
  const [sender_phone, setSender_phone] = useState("");
  const [sender_email, setSender_email] = useState("");
  const [sender_address, setSender_address] = useState("");

  // Receiver Details
  const [receiver_name, setReceiver_name] = useState("");
  const [receiver_phone, setReceiver_phone] = useState("");
  const [receiver_email, setReceiver_email] = useState("");
  const [receiver_address, setReceiver_address] = useState("");

  // Tracking Deatils
  const [tracking_number, setTracking_number] = useState("");
  //   const randomNumber  = Math.floor(1000000000 + Math.random() * 9000000000)
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [reference, setReference] = useState("");
  const [estimated_date, setEstimated_date] = useState("");

  const [formError, setFormError] = useState(null);

  const generateUniqueNumber = () => {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    setTracking_number(randomNumber.toString());
    setReference(randomNumber.toString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !sender_name ||
      !sender_phone ||
      !sender_email ||
      !sender_address ||
      !receiver_name ||
      !receiver_phone ||
      !receiver_email ||
      !receiver_address ||
      !tracking_number ||
      !item ||
      !weight ||
      !origin ||
      !destination ||
      !reference ||
      !estimated_date
    ) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("consignments")
      .insert([
        {
          sender_name,
          sender_phone,
          sender_email,
          sender_address,
          receiver_name,
          receiver_phone,
          receiver_email,
          receiver_address,
          tracking_number,
          item,
          weight,
          origin,
          destination,
          reference,
          estimated_date,
        },
      ])
      .select();

    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      console.log(data);
      setFormError(null);
            Swal.fire('Good Job!', 'Consignment Added Succesfully', "success")
      navigate("/consignments/user");
    }
  };
  return (
    <>
      <section className="hero is-fullheight is-light has-background-white-bis">
        <div className="hero-body">
          <div className="container">
            <nav className="level is-hiddenn">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title is-4 is-hiddenn is-centered-mobile">
                    Create Consignment
                  </h1>
                </div>
              </div>

              <div className="level-right">
                <div className="level-item">
                  <button onClick={generateUniqueNumber} className="button">
                    Generate Tracking Number
                  </button>
                </div>
                <nav className="breadcrumb is-medium is-centered">
                  <ul>
                    <li>
                      <Link
                        className="has-text-primary"
                        to="/consignments/user"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="is-active">
                      <a>Create Consignment</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </nav>
            <div className="columns is-centered is-vcenteredd">
              <div className="column is-12-tablet is-12-desktop is-12-widescreen">
                <div className="box">
                  <h1 className="title is-centered is-size-4 is-hidden">
                    Create Consignment
                  </h1>
                  <form onSubmit={handleSubmit}>
                    <div className="columns is-centered">
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Sender Name
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Sender Name"
                              onChange={(e) => setSender_name(e.target.value)}
                              value={sender_name}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Sender Phone
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Sender Phone"
                              onChange={(e) => setSender_phone(e.target.value)}
                              value={sender_phone}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Sender Email
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="email"
                              placeholder="Sender Email"
                              onChange={(e) => setSender_email(e.target.value)}
                              value={sender_email}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns is-centered">
                      <div className="column">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Sender Address
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Sender Address"
                              onChange={(e) =>
                                setSender_address(e.target.value)
                              }
                              value={sender_address}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns is-centered">
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Receiver Name
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Receiver Name"
                              onChange={(e) => setReceiver_name(e.target.value)}
                              value={receiver_name}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Receiver Phone
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Receiver Phone"
                              onChange={(e) =>
                                setReceiver_phone(e.target.value)
                              }
                              value={receiver_phone}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Receiver Email
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="email"
                              placeholder="Receiver Email"
                              onChange={(e) =>
                                setReceiver_email(e.target.value)
                              }
                              value={receiver_email}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="columns is-centered">
                      <div className="column">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Receiver Address
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Receiver Address"
                              onChange={(e) =>
                                setReceiver_address(e.target.value)
                              }
                              value={receiver_address}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="columns is-multiline">
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Tracking Number
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Tracking Number"
                              onChange={(e) =>
                                setTracking_number(e.target.value)
                              }
                              value={tracking_number}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Item
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Item"
                              onChange={(e) => setItem(e.target.value)}
                              value={item}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Weight
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Weight"
                              onChange={(e) => setWeight(e.target.value)}
                              value={weight}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Origin
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Origin"
                              onChange={(e) => setOrigin(e.target.value)}
                              value={origin}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Destination
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Destination"
                              onChange={(e) => setDestination(e.target.value)}
                              value={destination}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Reference
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Reference"
                              onChange={(e) => setReference(e.target.value)}
                              value={reference}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="column is-one-third">
                        <div className="field">
                          <label className="label has-text-weight-semibold">
                            Estimated Date
                          </label>
                          <div className="control is-expanded">
                            <input
                              type="text"
                              placeholder="Estimated Date"
                              onChange={(e) =>
                                setEstimated_date(e.target.value)
                              }
                              value={estimated_date}
                              className="input"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="columns">
                      <div className="column is-one-thirdd is-12">
                        <div className="field">
                          <div className="control">
                            <button className="button is-link is-fullwidth">
                              Create Consignment
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {formError && <p className="error">{formError}</p>}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateConsignment;
