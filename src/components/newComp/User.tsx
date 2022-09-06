import React from "react";
import Todo from "./Todo";

interface UserProps {
  name?: string;
  age: number;
  status: "Coder" | "Single" | "Married";
  children?:string | React.ReactNode 
}

const User = ({ name, age, status, children }:UserProps) => {
  return (
    <>
    <div>
      <h1>UserName- {name || "user"}</h1>
      <h1>Age-{age}</h1>
      <h1>Status-{status}</h1>
      <h1>{children}</h1>
    </div>
    <Todo/>
    </>
  );
};

export default User;
