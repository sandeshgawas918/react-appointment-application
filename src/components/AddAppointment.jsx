import React from "react";
import { useState } from "react";
import { FaCalendarPlus } from "react-icons/fa";

const AddAppointment = ({ sendAppointment }) => {

  const clearForm = {
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptDate: ""
  }
  const [toggle, settoggle] = useState(false);
  const [formData, setformData] = useState(clearForm)

  const submitFormData = () => {
    // e.preventDefault()
    const appointmentInfo = {
      id: 99,
      petName: formData.petName,
      ownerName: formData.ownerName,
      aptNotes: formData.aptNotes,
      aptDate: formData.aptDate
    }
    sendAppointment(appointmentInfo)
    setformData(clearForm)
    settoggle(false)
  }

  return (
    <div>

      <button className=" ms-4 btn btn-success text-white flex align-items-center justify-content-center p-2" onClick={() => { settoggle(!toggle) }}>
        <FaCalendarPlus className="h5 me-2" />
        Add Appointment
      </button>

      {toggle && (
        <div className="row">
          <div className="card col-md-5 m-auto bg-dark text-warning p-3 rounded-4 shadow-lg">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  <div className="col-form-label">Owner Name</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control"
                    value={formData.ownerName}
                    onChange={(e) => { setformData({ ...formData, ownerName: e.target.value }) }}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="col-form-label">Pet Name</div>
                </div>
                <div className="col-md-8">
                  <input type="text" className="form-control"
                    value={formData.petName}
                    onChange={(e) => { setformData({ ...formData, petName: e.target.value }) }}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="col-form-label">Apt Date</div>
                </div>
                <div className="col-md-8">
                  <input type="date" className="form-control"
                    value={formData.aptDate}
                    onChange={(e) => { setformData({ ...formData, aptDate: e.target.value }) }}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4">
                  <div className="col-form-label">Apt Notes</div>
                </div>
                <div className="col-md-8">
                  <textarea type="textarea" className="form-control"
                    value={formData.aptNotes}
                    onChange={(e) => { setformData({ ...formData, aptNotes: e.target.value }) }}
                  />
                </div>
              </div>
              <div className="text-center mt-3">
                <button className="btn btn-success text-white rounded-3" onClick={submitFormData}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAppointment;
