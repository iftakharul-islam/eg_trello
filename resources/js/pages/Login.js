import { useState } from 'react';
import {Link} from 'react-router-dom'
import Axios from '../components/Axios';

export default function Login() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const {http,setToken} = Axios();

    const submitForm = ()=>{
        // console.log(email,'',password)
        if(!email){
            alert("Email is Mandatory");
            document.querySelector('#email').focus();
            return false;
        }else if(!password){
            alert("Password is Mandatory")
            document.querySelector('#pwd').focus();
            return false;
        }
        http.post('login',{email:email,password:password})
        .then((res) =>{
             if(res.data.token){
                 setToken(res.data.user,res.data.token)
             }else{
                document.querySelector('.message').innerHTML = res.data.message??'';
                setTimeout(() => {
                    document.querySelector('.message').innerHTML = '';

                }, 2000);
             }
            });
    }

    
    return (
        <div className="row justify-content-center pt-5">
           <div className="col-sm-6">
            <div className="card p-5">
              
              

                <form className="form-inline">
                    <label  className="mr-sm-2">Email address:</label>
                    <input type="email" required onInput={e => setEmail(e.target.value)} className="form-control mb-2 mr-sm-2" placeholder="Enter email" id="email"/>
                    <label className="mr-sm-2">Password:</label>
                    <input type="password" required onInput={e => setPassword(e.target.value)} className="form-control mb-2 mr-sm-2" placeholder="Enter password" id="pwd"/>
                    <button type="button" onClick={submitForm} className="btn btn-primary mb-2">Login</button>
                    <div className="message text-danger" ></div>
                </form>
                <Link to="/register">Not Registered ?</Link>
               
            </div>
           </div>
        </div>
                );
}