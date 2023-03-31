import axios from 'axios';
import React, { useState } from 'react'

function APIPostMethod() {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [city_village, setCity_village] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [pincode, setPincode] = useState('');
    // const [createdAt, setCreatedAt] = useState('');
    // const [updatedAt, setUpdatedAt] = useState('');
    const url = "https://ict-db-backend-production.up.railway.app/user_register";

    function handelSubmit(e){
            e.preventDefault();
            // console.log(name,dob,mobile,gender,email,city_village,district,state,pincode);
            const formData = new URLSearchParams();
            formData.append ("name", name)
            formData.append ("dob", dob)
            formData.append ("mobile", mobile)
            formData.append ("gender", gender)
            formData.append ("email", email)
            formData.append ("city_village", city_village)
            formData.append ("district", district)
            formData.append ("state", state)
            formData.append ("pincode", pincode)

            // console.log(Object.fromEntries(formData));
            axios.post(url,
          
                formData
            ).then((res)=>{
                console.log(res);
            }).catch((error)=>{
                console.log(error);
            })

    
        //  axios.post(url, formData)
    



    }
  return (
    <div className='main-block'>
        <h1>Post Data</h1>
        <form onSubmit={handelSubmit}>
            <div className='email'>
            <label>Name</label>
            <input type="text" name="title" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='email'>
            <label>DOB</label>
            <input type="text" name="title" value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </div>
            <div className='email'>
            <label>Mobile</label>
            <input type="text" name="title" value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <div className='email'>
            <label>Gender</label>
            <input type="text" name="title" value={gender} onChange={(e)=>setGender(e.target.value)}/>
            </div>
            <div className='email'>
            <label>Email</label>
            <input type="email" name="title" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='email'>
            <label>City_village</label>
            <input type="text" name="title" value={city_village} onChange={(e)=>setCity_village(e.target.value)}/>
            </div>
            <div className='email'>
            <label>Enter District</label>
            <input type="text" name="title" value={district} onChange={(e)=>setDistrict(e.target.value)}/>
            </div>
            <div className='email'>
            <label>State</label>
            <input type="text" name="title" value={state} onChange={(e)=>setState(e.target.value)}/>
            </div>
            <div className='email'>
            <label>Pincode</label>
            <input type="text" name="title" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
            </div>
            {/* <div>
            <input type="radio" value="HTML" />
            <label for="html">HTML</label><br />
            <input type="radio" id="css" value="CSS" />
            <label for="css">CSS</label>
            </div> */}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default APIPostMethod;