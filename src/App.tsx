import { useState,useReducer, createContext } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from "./components/CreateUser";
import DisplayBoard from "./components/DisplayBoard";
import { AppService } from "./components/app.service";
import { Users } from "./components/Users";
import List from "./components/List";
import AddToList from "./components/AddToList";
import Signup from "./components/Signup";
import BasicComp from "./components/newComp/BasicComp";
import { initialState, reducer,actionTypes } from "./reducer";
import ChildComp from "./components/newComp/childComp";
import FormComp from "./components/newComp/FormComp";
import Navbar from "./components/navbarComp/Navbar";
import ImageComp from "./components/navbarComp/ImageComp";
import SignForm from "./components/navbarComp/SignForm";
import Signin from "./components/navbarComp/Signin";
import ListItem  from "./components/navbarComp/ListItem";


interface ctxType{
  state: typeof initialState,
  dispatch:  React.Dispatch<actionTypes>
}
 export  interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}


 export const UserContext = createContext({} as ctxType)

function App() {
  const [user, setUser] = useState<any>();
  const [users, setUsers] = useState<any>([]);
  const [numberOfUsers, setNumberOfUsers] = useState<number>(0);
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Rock",
      age: 20,
      url: "data:image/jpeg;base64,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",
      note:"hey yooo"
    },
  ]);

  const appService = new AppService();

  const createUser = (e: any) => {
    const response = appService.addUser(user);
    console.log(response, user);
    setUsers(users);
    setNumberOfUsers(numberOfUsers + 1);
  };

  const getAllUsers = () => {
    const users = appService.getUsers();
    setUsers(users);
    console.log(users);
    setNumberOfUsers(users.length);
  };

  const onChangeForm = (e: any) => {
    let userClone = { ...user };
    if (e.target.name === "firstname") {
      userClone.firstName = e.target.value;
    } else if (e.target.name === "lastname") {
      userClone.lastNamme = e.target.value;
    } else if (e.target.name === "email") {
      userClone.email = e.target.value;
    }
    setUser(userClone);
  };

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <BrowserRouter>
    <UserContext.Provider value={{state,dispatch}}>
    <>
    <Navbar/>
    <Routes>
      <Route  path="/signup" element={<SignForm/>}/>
      <Route path="/" element={<ImageComp/>}/>
      <Route  path="/signin" element={<Signin/>} />
      <Route path='/list' element={<ListItem/>}/>
    </Routes>
    {/* <div className="App">
      <Header/>
      <div className='container mrgnbtm'>
        <div className='row'>
          <div className='col-md-8'>
      <CreateUser
        user={user}
        onChangeForm ={onChangeForm}
        createUser={createUser}
      />
          </div>
          <div className="col-md-4">
              <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={getAllUsers}

              />
              </div>
        </div>
        <div className="row mrgnbtm">
          <Users users={users}></Users>
        </div>
      </div>
    </div>
    
      <div>
        <h1>people i want to invite to my party</h1>
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} />
      </div>
      <Signup/> */}
      {/* <BasicComp/> */}
      {/* <ChildComp/>
      <FormComp/> */}
    </>
    </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;

// for providing all state and dispatch function for update state we need useContext
