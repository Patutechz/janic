import { Link } from "react-router-dom";
import supabase from "../config/supabaseClient";
const ConsignmentCard = ({ consignment, onDelete }) => {

  const handleDelete = async () => {
    const { data, error } = await supabase
      .from('consignments')
      .delete()
      .eq('id', consignment.id)
      .select()
    
    if (error) {
      console.log(error)
    }
    if (data) {
      console.log(data)
      onDelete(consignment.id)
    }
  }
  return (
    <>
      <div className="box">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="has-text-centered-mobile">
                <h4 className="title is-size-5 mb-2">
                  {consignment.tracking_number}
                </h4>
                <p className="has-text-centered-mobile">
                  <span className="has-text-primary">{consignment.item}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div className="buttons">
                <Link className="button" to={"/consignments/" + consignment.id}>
                  View
                </Link>
                <button className="button is-dark" onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsignmentCard;
