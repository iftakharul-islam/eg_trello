import {Link} from 'react-router-dom'
import { useState } from 'react';
import Axios from '../components/Axios';

export default function Register(){

    const [userName,setUserName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const {http} = Axios();

    const submitForm = ()=>{
        // console.log(email,'',password)
        http.post('register',{name:userName,email:email,password:password})
        .then((res) =>{ console.log(res.data)});
    }
    return (
        <div className="row justify-content-center pt-5">
        <div className="col-sm-6">
         <div className="card p-5">
             <form className="form-inline">
                    <label  className="mr-sm-2">Name :</label>
                    <input type="text" onInput={e => setUserName(e.target.value)} className="form-control mb-2 mr-sm-2" placeholder="Enter username" id="username"/>
                    <label  className="mr-sm-2">Email address:</label>
                    <input type="email" onInput={e => setEmail(e.target.value)} className="form-control mb-2 mr-sm-2" placeholder="Enter email" id="email"/>
                    <label className="mr-sm-2">Password:</label>
                    <input type="password" onInput={e => setPassword(e.target.value)} className="form-control mb-2 mr-sm-2" placeholder="Enter password" id="pwd"/>
                    <button type="button" onClick={submitForm} className="btn btn-primary mb-2">Register</button>
                </form>
             <Link to="/login">Already Registered ?</Link>
         </div>
        </div>
     </div>
    );
}