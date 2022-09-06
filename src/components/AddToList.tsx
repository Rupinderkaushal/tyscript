import React, { useState } from 'react';
import  {IState as Prop} from '../App';

interface IProp {
    people : Prop["people"]
    setPeople:React.Dispatch<React.SetStateAction<Prop["people"]>> 
}

const AddToList:React.FC<IProp> = ({people,setPeople}) => {
   const [user,setUser]= useState({
    name:"",
    age:'',
    url:'',
    note:''
   });

   const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void=>{
        setUser({...user,
             [e.target.name]: e.target.value
        })
   }

   const handleClick =():void=>{
    console.log("user",people)
    if(
      !user.name || !user.age || !user.url
    ){
      return
    }
    setPeople([...people,{
      name:user.name,
      age:parseInt(user.age),
      url:user.url,
      note:user.note
    }])
    setUser({
      name:"",
      age:'',
      url:'',
      note:''
    })
   }

  return (
    <div>
        <input
         type="text"
         placeholder='name'
         name='name'
         value={user.name}
         onChange={handleChange}
        />
        <input
         type="number"
         placeholder='age'
         name='age'
         onChange={handleChange}
         value={user.age}
        />
        <input
         type="text"
         placeholder='image'
         name='url'
         onChange={handleChange}
         value={user.url}
        />
        <textarea
         placeholder='note'
         name='note'
         onChange={handleChange}
         value={user.note}
        />
        <button onClick={handleClick}>ADD TO LIST</button>
    </div>
  )
}

export default AddToList;