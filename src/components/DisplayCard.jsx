import React from 'react'

const DisplayCard = () => {
  return (
    <div>
        <div className="">
        <div className="card mt-2 col-md-4" >
          <div className="card-body flex">
            <ul key={appointments.id}>
              <li className=" text-primary h4">PetName : {appointments.petName}</li>
              <li className=" text-dark h6">Owner : {appointments.ownerName}</li>
            </ul>
            <div onClick={() => { deleteAppointment(id) }} className="btn btn-danger rounded-2 btn-sm">delete</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCard