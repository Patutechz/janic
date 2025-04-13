import { useNavigate, Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
const UserConsignment = () => {
    const navigate = useNavigate();
  const [fetchError, setFetchError] = useState(null);
  const [consignments, setConsignments] = useState(null);

  // const handleDelete = (id) => {
  //   setConsignments((prevConsignments) => {
  //     return prevConsignments.filter((sm) => sm.id !== id);
  //   });
  // };

  const handleDelete = async (id) => {
    const { data, error } = await supabase
      .from("consignments")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      navigate("/consignments/create");
    }
  };

  useEffect(() => {
    const fetchConsignments = async () => {
      const { data, error } = await supabase.from("consignments").select();

      if (error) {
        setFetchError("Could not fetch Consignments");
        setConsignments(null);
        // console.log(error);
      }

      if (data) {
        setConsignments(data);
        setFetchError(null);
        console.log(data);
      }
    };

    fetchConsignments();
  }, []);
  return (
    <>
      <section className="section">
        <div className="container">
          <nav className="level is-hiddenn">
            <div className="level-left">
              <div className="level-item">
                <h1 className="title is-4 is-hiddenn is-centered-mobile">
                  All Consignments
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
          <h1 className="title is-4 is-hidden">Playlists</h1>
          <div className="columns is-multiline">
            <div className="column is-12-tablet is-12-desktop is-12-widescreen">
              {fetchError && <p>{fetchError}</p>}
              <div className="box table-container">
                <table
                  id="example"
                  className="table is-striped is-hoverable is-fullwidth"
                >
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tracking Number</th>
                      <th>Item</th>
                      <th>weight</th>
                      <th>Reciver Email</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consignments &&
                      consignments.map((consignment) => (
                        <tr key={consignment.id}>
                          <td>{consignment.id}</td>
                          <td>{consignment.tracking_number}</td>
                          <td>{consignment.item}</td>
                          <td>{consignment.weight}</td>
                          <td>{consignment.receiver_email}</td>
                          <td>
                            <div className="buttons">
                              {" "}
                              <Link
                                className="button"
                                to={"/consignments/" + consignment.id}
                              >
                                View
                              </Link>
                              <button
                                className="button"
                                onClick={() => handleDelete(consignment.id)}
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserConsignment;
