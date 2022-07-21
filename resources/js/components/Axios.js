import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Axios(){

   const navigate = useNavigate();

   const [token,setToken] = useState(getUser);
   const [user,setUser] = useState(getToken);

   const getToken = () => {
      const tokenString = sessionStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken;
   }

   const getUser = () => {
      const userString = sessionStorage.getItem('user');
      const userDetails = JSON.parse(userString);
      return userDetails;
   }

   
   const saveToken = (user,token) => {
      sessionStorage.setItem('token',JSON.stringify(token));
      sessionStorage.setItem('user',JSON.stringify(user));
      setToken(token)
      setUser(user)
      navigate('/dashboard ')
   }
   const logout = ()=> {
      sessionStorage.clear();
   }


   const  http = axios.create({
    baseURL: 'http://gotipath.local:8001/api',
    headers:{
        'Content-type': 'application/json',
    }
   })
   return { http, setToken:saveToken,token,getToken,user,logout };
}