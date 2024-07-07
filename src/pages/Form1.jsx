// import React from 'react'
import { useState } from 'react'

const Form1 = () => {
    const [Fname,setFname]=useState('')
    const handleFname=(event)=>{
        // console.log(event);//returns an event object
        // console.log(event.target);//returns an html elements where that event is happening
        // console.log(event.target.value)//returns value attribute of that html elements
        // console.log("------------------")
        setFname(event.target.value)
    }
    // console.log('FName',Fname)

  const[Lname,setLname]=useState('')
  const handleLname=(event)=>{
    setLname(event.target.value)
  }
//   console.log('Lname',Lname)


  const[password,setpassword]=useState('')
  const handlepassword=(event)=>{
    setpassword(event.target.value)
  }

  const[CnfPass,setCnfPass]=useState('')
  const handleCnfPass=(event)=>{
    setCnfPass(event.target.value)
  }

  const[Dob,setDob]=useState('')
  const handleDob=(event)=>{
    setDob(event.target.value)
  }
  const[city,setcity]=useState('')
  const handleCity=(event)=>{
    setcity(event.target.value)
  }

  const[email,setemail]=useState('')
  const handleemail=(event)=>{
    setemail(event.target.value)
  }
  const[courses,setCourses]=useState('')
  const handleCourses=(event)=>{
    if(event.target.checked){
    setCourses([...courses,event.target.value])
    }else{
    
        const index=courses.indexOf(event.target.value)
        courses.splice(index,1)
    }
  }
  const[pincode,setpincode]=useState('')
  const handlepincode=(event)=>{
    setpincode(event.target.value)
  }
  const[gender,setgender]=useState('')
  const handleGender=(event)=>{
    setgender(event.target.value)
  }
  return (
    <div>
        <input type="text" placeholder="First name" id="inpFName"
        value={Fname}
        onChange={handleFname}/> 
    <label  id="errFName">First Name is required</label><br/><br/>

    <input type="text" placeholder="Last Name" id="inpLName"
     value={
        Lname}
     onChange={handleLname} />
    <label  id="errLName">Last Name is required</label><br/><br/>

    <input type="email"  placeholder="email"  id="inpEmail"
    value={email} 
    onChange={handleemail}/>
    <label  id="errEmail">Email  is required</label><br/><br/>

    <label  id="errEmailFormat">Email  is not valid</label><br/><br/>


    <input type="password" placeholder="password" id="inpPass"
    value={password} 
    onChange={handlepassword}/>
    <label  id="errPass">Password is required</label><br/><br/>

    <input type="password" placeholder="confirm password" id="inpCnfPass" 
    value={CnfPass}
    onChange={handleCnfPass}/>
    
    <label  id="errCnfPass">Confirm password is required</label><br/><br/>
    
    <label  id="errMatch"> Password and Confirm Password not matching </label><br/><br/>
    
    <input type="date"  placeholder="date" id="inpDob" value={Dob}
    onChange={handleDob}/> 
    <label  id="errDob" >Date of Birth is required</label><br/><br/>

    <input type="text" placeholder="city" id="inpCity" 
    value={city}
    onChange={handleCity} />

    <br/><br/>

    <input type="number" placeholder="pin code" id="inpPinCode"  value={pincode}
    onChange={handlepincode}/>
    <br/><br/>

    <select id="selectState">
        <option value="MH">MH</option>
        <option value="Goa">Goa</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Gujarat">Gujarat</option>
    </select>
    <br/><br/>

    <input type="radio" value="male" name="gender" id="radioMale" onClick={handleGender}/>
    <label>male</label><br/>

    <input type="radio"  value="female" name="gender" id="radioFemale" onClick={handleGender}/>
    <label >female</label><br/>

    <input type="radio"  value="others" name="gender" id="radioOthers"onClick={handleGender} />
    <label>others</label><br/><br/>

    <label  id="errGender">Please select your gender</label><br/><br/>

    <input type="checkbox"  id="chkHTML" value={'HTML'} onClick={handleCourses}/>
    <label>HTML</label><br/><br/>

    <input type="checkbox"  id="chkCSS" value={'CSS'} onClick={handleCourses}/>
    <label >CSS</label><br/><br/>

    <input type="checkbox" id="chkJS" value={'JS'} onClick={handleCourses}/>
    <label >JS</label><br/><br/>

    <input type="checkbox" id="chkREACT" value={'REACT'}onClick={handleCourses} />
    <label >REACT</label><br/><br/>
    <label  id="errCourses">Please select your courses</label><br/><br/>

    

    <button >Submit</button>


    </div>
  )
}

export default Form1