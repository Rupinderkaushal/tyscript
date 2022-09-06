import React from 'react'


interface IDisplayBoard{
    numberOfUsers:number;
    getAllUsers:Function;
}
const DisplayBoard = ({numberOfUsers,getAllUsers}:IDisplayBoard) => {
  return (
    <div className="display-board">
    <h4>Users Created</h4>
    <div className="number">
    {numberOfUsers}
    </div>
    <div className="btn">
        <button type="button" className="btn btn-warning" onClick={(e)=> getAllUsers()} >Get all Users</button>
    </div>
</div>
  )
}

export default DisplayBoard;