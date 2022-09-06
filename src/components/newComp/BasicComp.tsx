import React from 'react';
import User from './User';

const BasicComp = () => {
  return (
    <div>
        <User  age={10} status="Coder">
            Salary-5ctc<br/>
            <span style={{color:"green"}} >this is span tag</span>
        </User>
    </div>
  )
}

export default BasicComp