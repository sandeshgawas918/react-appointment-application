
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
// import AppointmentList from "./data.json";
import AppointmentInfo from "./components/AppointmentInfo";
import { useCallback, useEffect, useState } from "react";

function App() {

  const [aptList, setaptList] = useState([])
  const [search, setsearch] = useState('')
  const [sort, setsort] = useState('petName')
  const [order, setorder] = useState('asc')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('./data.json');
      const data = await response.json();
      setaptList(data);
    };

    fetchData();
  }, []);

  const deleteAppt = (id) => {
    let mydata = aptList.filter((e) => {
      return id != e.id
    })
    // console.log(mydata);
    setaptList(mydata)
  }

  const filteredArray = aptList.filter((apt) => {
    return apt.petName.toLowerCase().includes(search.toLowerCase()) ||
      apt.ownerName.toLowerCase().includes(search.toLowerCase())
  }).sort((a, b) => {
    return order == 'asc' ? a[sort].localeCompare(b[sort]) : b[sort].localeCompare(a[sort])
  })

  let sortValue = (value) => {
    setsort(value)
  }

  let sortOrder = (value) => {
    setorder(value)
  }

  return (
    <>
      <div className="text-white">
        <div className="m-5">
          <div className="h1 text-center flex-column align-items-center d-flex justify-content-center">Appointment Application</div>
          <div className="row">
            <div className="col-md-8 m-auto">
              <Search search={search} setsearch={setsearch} sortValue={sortValue} sortOrder={sortOrder} sort={sort} order={order} />
            </div>
          </div>


          <div className="mt-3 ms-5">
            <AddAppointment sendAppointment={(value) => { setaptList([...aptList, value]) }} />


            <div className="row">
              {filteredArray.map((apt) => (
                <AppointmentInfo key={apt.id} appointments={apt} deleteAppointment={deleteAppt} />
              ))}
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default App;
