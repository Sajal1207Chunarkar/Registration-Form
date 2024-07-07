import { useState } from 'react'

const Form2 = () => {
    const [form,setform]=useState({
        inpFName:'',
        inpLName:'',
        inpEmail:'',
        inpPass:'',
        inpCnfPass:'',
        inpDob:'',
        inpCity:'',
        inpPinCode:'',
        selectState:''
        
    })

    //for error use new usestate
    const[errors,seterrors]=useState({
        errFName:'',
    })

    const handlesubmit=()=>{
        if(form.inpFName && form.inpLName){

        }else{
            seterrors(prev=>{
                return{
                    ...prev,
                    errFName:'required'
                }
            })
        }
    }
    console.log(form)

    const handleFormElements=(event)=>{
        setform(prev=>{
            return{
                ...prev,
                [event.target.id]:event.target.value
            }
        })

    }
  return (

    <div>
        <input type="text" placeholder="First name" id="inpFName"
        value={form.inpFName}
        onChange={handleFormElements}/> 
    <label id='errFName'>{errors.errFName}First Name is required</label><br/><br/>

    <input type="text" placeholder="Last Name" id="inpLName"
     value={
        form.inpLName}
     onChange={handleFormElements} />
    <label  id="errLName">Last Name is required</label><br/><br/>

    <input type="email"  placeholder="email"  id="inpEmail"
    value={form.inpEmail} 
    onChange={handleFormElements}/>
    <label  id="errEmail">Email  is required</label><br/><br/>

    <label  id="errEmailFormat">Email  is not valid</label><br/><br/>


    <input type="password" placeholder="password" id="inpPass"
    value={form.inpPass} 
    onChange={handleFormElements}/>
    <label  id="errPass">Password is required</label><br/><br/>

    <input type="password" placeholder="confirm password" id="inpCnfPass" 
    value={form.inpCnfPass}
    onChange={handleFormElements}/>
    
    <label  id="errCnfPass">Confirm password is required</label><br/><br/>
    
    <label  id="errMatch"> Password and Confirm Password not matching </label><br/><br/>
    
    <input type="date"  placeholder="date" id="inpDob" value={form.inpDob}
    onChange={handleFormElements}/> 
    <label  id="errDob" >Date of Birth is required</label><br/><br/>

    <input type="text" placeholder="city" id="inpCity" 
    value={form.inpCity}
    onChange={handleFormElements} />

    <br/><br/>

    <input type="number" placeholder="pin code" id="inpPinCode"  value={form.inpPinCode}
    onChange={handleFormElements}/>
    <br/><br/>

    <select id="selectState"
    value={form.selectState}
    onChange={handleFormElements}>
        <option value="MH">MH</option>
        <option value="Goa">Goa</option>
        <option value="Nagpur">Nagpur</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Gujarat">Gujarat</option>
    </select>
    <br/><br/>


    <button onClick={handlesubmit}>Submit</button>


    </div>
  )
}
export default Form2