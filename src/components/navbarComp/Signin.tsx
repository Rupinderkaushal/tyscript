import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

const initialState={
    name:"",
    password:"",
}

const Signin = () => {
    const [values, setValues] = useState<any>(initialState);

    const navigate = useNavigate();

    const inputHandler = (e: any) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
  
    const submitHandler=(e:any)=>{
        e.preventDefault();
     const getData= JSON.parse(localStorage.getItem('user')|| "false");
     if(values.name === getData.name && values.password === getData.password){
        navigate("/list")
     }
     else{
        navigate('/signup')
     }
     
    }
  
  return (
    <div>
        <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Signin
              </h3>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={submitHandler}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                       Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={inputHandler}
                        id="id"
                        // autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        name="password"
                        value={values.password}
                        onChange={inputHandler}
                        id="last-name"
                        // autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                   
                <div className="bg-gray-50 px-4 py-3   text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Sign in
                  </button>
                </div>
              </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin;