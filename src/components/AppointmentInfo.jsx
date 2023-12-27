import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion"

const AppointmentInfo = ({ appointments, deleteAppointment }) => {
  return (
    <>
      <div className="col-md-2 m-3">
        <motion.div drag dragConstraints={{top:50, bottom:50, left:50 , right:50}} className="card rounded-5 border-1 border-primary-subtle" style={{ height: '270px', width: "230px" }}>
          <div className="card-header text-center bg-warning rounded-top-5">
            <h5 className="h5 mt-2">Pet Name : {appointments.petName}</h5>
          </div>
          <div className="card-body position-relative rounded-bottom-5">
            <div key={appointments.id} className="">
              <div className=" h6 text-dark">Owner Name : <span className=" h6 text-primary">{appointments.ownerName}</span></div>
              
              <div className=" h6 text-dark">Appt Date : <span className=" h6 text-primary">{appointments.aptDate}</span> </div>
              
              <div className=" h6 text-dark">Appt Notes : <span className=" h6 text-primary">{appointments.aptNotes}</span></div>
              
            </div>
            <footer className="text-center position-absolute end-0 top-0">
              <div onClick={() => { deleteAppointment(appointments.id) }} className=" h4 m-2 text-danger"><RiDeleteBin6Line />
              </div>
            </footer>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AppointmentInfo;
