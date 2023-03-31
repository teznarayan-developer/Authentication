import React, { useEffect, useState } from 'react';
import axios from 'axios';

// function User({ user }) {
//   const { _id, name, dob, mobile, gender, email, city_village, district, state, pincode } = user;

//   return (
 
   
//     <div key={_id} className='main-block'>
      
//       <div className='get'>
//         <h4>Name  </h4>
//         <p>{name}</p>
//       </div>
//       <div className='get'>
//         <h4>Date of Birth </h4>
//         <p>{dob}</p>
//       </div>
//       <div className='get'>
//         <h4>Mobile No.</h4>
//         <p>{mobile}</p>
//       </div>
//       <div className='get'>
//         <h4>Gender </h4>
//         <p>{gender}</p>
//       </div>
//       <div className='get'>
//         <h4>Email </h4>
//         <p>{email}</p>
//       </div>
//       <div className='get'>
//         <h4>City </h4>
//         <p>{city_village}</p>
//       </div>
//       <div className='get'>
//         <h4>District </h4>
//         <p>{district}</p>
//       </div>
//       <div className='get'>
//         <h4> State </h4>
//         <p>{state}</p>
//       </div>
//       <div className='get'>
//         <h4>Pincode</h4>
//         <p>{pincode}</p>
//       </div>
//     </div>
   
//   );
// }

function API() {
  const [myData, setMyData] = useState([]);
  const url = "http://ict-db-backend-production.up.railway.app/get_users";

  useEffect(() => {
    try {
      axios.get(url).then((res) => { return console.log(res.data.result), setMyData(res.data.result) });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div >
      <h1>Employee Data</h1>

<table className="table" >
      <thead>
        <tr>
        <th scope="col">Sr.No.</th>
          <th scope="col">Name</th>
          <th scope="col">DOB</th>
          <th scope="col">Mobile</th>
          <th scope="col">Gender</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
          <th scope="col">District</th>
          <th scope="col">State</th>
          <th scope="col">Pincode</th>
        </tr>
      </thead>
       {/* <div className='App'> */}
      {myData.map((user,i) => (<tbody>
        <tr key={i}>
        <td className="noBorder">{i+1}</td>
          <td className="noBorder">{user.name}</td>
          <td className="noBorder">{user.dob}</td>
          <td className="noBorder">{user.mobile}</td>
          <td className="noBorder">{user.gender}</td>
          <td className="noBorder">{user.email}</td>
          <td className="noBorder">{user.city_village}</td>
          <td className="noBorder">{user.district}</td>
          <td className="noBorder">{user.state}</td>
          <td className="noBorder">{user.pincode}</td>
        </tr>
        </tbody>


    //      <div key={user._id} className='main-block'>
      
    //   <div className='get'>
    //     <h4>Name  </h4>
    //     <p>{user.name}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>Date of Birth </h4>
    //     <p>{user.dob}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>Mobile No.</h4>
    //     <p>{user.mobile}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>Gender </h4>
    //     <p>{user.gender}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>Email </h4>
    //     <p>{user.email}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>City </h4>
    //     <p>{user.city_village}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>District </h4>
    //     <p>{user.district}</p>
    //   </div>
    //   <div className='get'>
    //     <h4> State </h4>
    //     <p>{user.state}</p>
    //   </div>
    //   <div className='get'>
    //     <h4>Pincode</h4>
    //     <p>{user.pincode}</p>
    //   </div>
    // </div>
      ))}
      {/* </div> */}

      </table>
    </div>
  );
}

export default API;
