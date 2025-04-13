import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import Swal from "sweetalert2";
const ConsignmentDetails = () => {
  const { id } = useParams();
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

  const [trackings, setTrackings] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const [formError, setFormError] = useState(null);

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const [consignment_id, setConsignment_id] = useState("");

  const handleDelete = async (id) => {
    const { data, error } = await supabase
      .from("trackings")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      Swal.fire("Good Job!", "Tracking Deleted Succesfully", "success");
      navigate("/consignments/user");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!time || !date || !location || !status) {
      setFormError("Please fill in all the fields correctly.");
      return;
    }

    const { data, error } = await supabase
      .from("trackings")
      .insert([
        {
          time,
          date,
          location,
          status,
          consignment_id: id,
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
      Swal.fire("Good Job!", "Tracking Added Succesfully", "success");
      navigate("/consignments/user");
    }
  };

  useEffect(() => {
    const fetchConsignment = async () => {
      const { data, error } = await supabase
        .from("consignments")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        // setContent(data.content)
        setSender_name(data.sender_name);
        setSender_phone(data.sender_phone);
        setSender_email(data.sender_email);
        setSender_address(data.sender_address);

        setReceiver_name(data.receiver_name);
        setReceiver_phone(data.receiver_phone);
        setReceiver_email(data.receiver_email);
        setReceiver_address(data.receiver_address);

        setTracking_number(data.tracking_number);
        setItem(data.item);
        setWeight(data.weight);
        setOrigin(data.origin);
        setDestination(data.destination);
        setReference(data.reference);
        setEstimated_date(data.estimated_date);
      }
    };

    fetchConsignment();
  }, [id, navigate]);

  useEffect(() => {
    const fetchTrackings = async () => {
      const { data, error } = await supabase
        .from("trackings")
        .select()
        .eq("consignment_id", id);

      if (error) {
        setFetchError("Could not fetch Trackings");
        setTrackings(null);
        // console.log(error);
      }

      if (data) {
        setTrackings(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchTrackings();
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <nav className="level is-hiddenn">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title is-4 is-hiddenn is-centered-mobile">
                  Consignment Details
                  <span className="has-text-grey">#{tracking_number}</span>
                </h1>
              </div>
            </div>

            <div className="level-right">
              <div className="level-item">
                <Link to="/consignments/create" className="button is-primary">
                  Create Consignment
                </Link>
              </div>
            </div>
          </nav>

          {fetchError && <p>{fetchError}</p>}

          <table className="table is-striped is-hoverable is-bordered is-fullwidth table-container">
            <thead className="has-background-dark has-text-white">
              <tr>
                <th className=" has-text-white">Sender Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{sender_name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{sender_phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{sender_email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{sender_address}</td>
              </tr>
            </tbody>
          </table>

          <table className="table is-striped is-hoverable is-bordered is-fullwidth">
            <thead className="has-background-dark has-text-white">
              <tr>
                <th className=" has-text-white">Reciever Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{receiver_name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{receiver_phone}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{receiver_email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{receiver_address}</td>
              </tr>
            </tbody>
          </table>

          <h1 className="is-size-3 has-text-centered">Package Details</h1>
          <div className="box table-container">
            <table
              id="example"
              className="table is-striped is-hoverable is-fullwidth is-borderedd"
            >
              <thead className="has-background-dark has-text-white">
                <tr>
                  <th className=" has-text-white">#</th>
                  <th className=" has-text-white">Tracking Number</th>
                  <th className=" has-text-white">Item</th>
                  <th className=" has-text-white">weight</th>
                  <th className=" has-text-white">Origin</th>
                  <th className=" has-text-white">Destination</th>
                  <th className=" has-text-white">Reference</th>
                  <th className=" has-text-white">Estimated Delivery Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{tracking_number}</td>
                  <td>{item}</td>
                  <td>{weight}</td>
                  <td>{origin}</td>
                  <td>{destination}</td>
                  <td>{reference}</td>
                  <td>{estimated_date}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h1 className="is-size-3 has-text-centered">Cargo Information</h1>
          <div className="box table-container">
            <table
              id="example"
              className="table is-striped is-hoverable is-fullwidth is-borderedd"
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {trackings &&
                  trackings.map((tracking) => (
                    <tr key={tracking.id}>
                      <td>{tracking.id}</td>
                      <td>{tracking.time}</td>
                      <td>{tracking.date}</td>
                      <td>{tracking.location}</td>
                      <td>{tracking.status}</td>
                      <td>
                        <div className="buttons">
                          <button
                            className="button"
                            onClick={() => handleDelete(tracking.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="columns is-centered is-vcenteredd">
            <div className="column is-12-tablet is-12-desktop is-12-widescreen">
              <div className="box">
                <h1 className="title is-centered is-size-4 is-hidden">
                  Create Trackings
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="columns is-centered">
                    <div className="column is-one-third">
                      <div className="field">
                        <label className="label has-text-weight-semibold">
                          Time
                        </label>
                        <div className="control is-expanded">
                          <input
                            type="text"
                            placeholder="Time"
                            onChange={(e) => setTime(e.target.value)}
                            value={time}
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-third">
                      <div className="field">
                        <label className="label has-text-weight-semibold">
                          Date
                        </label>
                        <div className="control is-expanded">
                          <input
                            type="text"
                            placeholder="Date"
                            onChange={(e) => setDate(e.target.value)}
                            value={date}
                            className="input"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column is-one-third">
                      <div className="field">
                        <label className="label has-text-weight-semibold">
                          Location
                        </label>
                        <div className="control is-expanded">
                          <input
                            type="text"
                            placeholder="Location"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
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
                          Status
                        </label>
                        <div className="control is-expanded">
                          <input
                            type="text"
                            placeholder="Status"
                            onChange={(e) => setStatus(e.target.value)}
                            value={status}
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
                            Create Tracking
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
      </section>
    </>
  );
};

export default ConsignmentDetails;
