import React,{useState} from 'react';
import { useFormik } from 'formik';
import BasicForm from './BasicForm';

const Signup = () => {
     const [view,setView] = useState("basic");
  return (
  <> 
  <nav>
    <h3
     onClick={()=> setView("basic")}
     style={{color: view ==="basic" ? "green":"black"}}
    >
        Basic
    </h3>
    <h3
      onClick={()=> setView("advanced")}
      style={{color: view ==="advanced"?"#fff" :"orangered"}}
    >Advanced </h3>
  </nav>
       {view === "basic" ? <BasicForm/> :<p>iohufiu</p>}
  </>
  )
}

export default Signup