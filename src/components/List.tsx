import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {IState as IList} from '../App';
// interface IList{
//     people:{
//         name:string
//         age:number
//         url:string
//         note?:string
//     }[]
// }


const List:React.FC<IList> = ({people}) => {
  // const poppy = people.map((val)=>{
  //   return (
  //     <li>
  //       <h1>{val.name}</h1>
  //       <h2>{val.age}</h2>
  //       <img src={val.url} />
  //       <p>{val.note}</p>
  //     </li>
  //   )
  // })

  const poppy =():JSX.Element[]=>{ //this will also working wihtout defining type :JSX.Elememnt []
    return people.map ((val)=>{
      return (
        <div>
          <img src={val.url}/>
          <h1>{val.name}</h1>
          <h3>{val.age}</h3>
          <p>{val.note}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <ul>
        {poppy()}
      </ul>
    </div>
  )
}

export default List;