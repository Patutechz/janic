import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [consignment, setConsignment] = useState(null);

  // useEffect(() => {
  //   const fetchConsignment = async () => {
  //     const { data, error } = await supabase
  //       .from("consignments")
  //       .select("*")
  //       .eq("id", id)
  //       .single();
  //     if (!error) setConsignment(data);
  //   };

  //   fetchConsignment();
  // }, [id]);

  // if (!consignment) return <h1 className="title">Loading.....</h1>;

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
      const { data, error } = await supabase.from("trackings").select();

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
                  Consignment Details{" "}
                  <span className="has-text-grey">#{tracking_number}</span>
                </h1>
              </div>
            </div>
          </nav>

          {fetchError && <p>{fetchError}</p>}


          <table class="table is-striped is-hoverable is-bordered is-fullwidth table-container">
            <thead class="has-background-dark has-text-white">
              <tr>
                <th class=" has-text-white">Sender Details</th>
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

          <table class="table is-striped is-hoverable is-bordered is-fullwidth">
            <thead class="has-background-dark has-text-white">
              <tr>
                <th class=" has-text-white">Reciever Details</th>
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

          <h1 class="is-size-3 has-text-centered">Package Details</h1>
          <table
            id="example"
            class="table is-striped is-hoverable is-fullwidth is-bordered table-container"
          >
            <thead class="has-background-dark has-text-white">
              <tr>
                <th class=" has-text-white">Tracking Number</th>
                <th class=" has-text-white">Item</th>
                <th class=" has-text-white">weight</th>
                <th class=" has-text-white">Origin</th>
                <th class=" has-text-white">Destination</th>
                <th class=" has-text-white">Reference</th>
                <th class=" has-text-white">Estimated Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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

          <h1 class="is-size-3 has-text-centered">Cargo Information</h1>
          <table
            id="example"
            class="table is-striped is-hoverable is-fullwidth is-bordered"
          >
            <thead>
              <tr>
                <th>Time</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {trackings &&
                trackings.map((tracking) => (
                  <tr>
                    <td>{tracking.time}</td>
                    <td>{tracking.date}</td>
                    <td>{tracking.location}</td>
                    <td>{tracking.status}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* <h1 className="title">{consignment.tracking_number}</h1> */}
    </>
  );
};

export default Detail;
