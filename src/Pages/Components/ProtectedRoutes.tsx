import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import axios from 'axios';
import UserMainPage from '../UserMainPage';

const ProtectedRoutes = ({component, ...rest}: any) => {
    const [isAuth, setAuth] = React.useState(false);
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        const fetchAuth = async () => {
            const response = await axios.get("http://localhost:4040/user/auth", {withCredentials: true})
            setAuth(response.data);
            setLoading(true)
        }
        fetchAuth();
    }, [])

    if(isLoading === true && isAuth === true){
        return (<Route path="/userpage"> <UserMainPage/> </Route>)
    }   

    else if(isLoading === true && isAuth === false){
        return <Redirect to={{pathname: "/login"}}/>
    }           

    return <div></div>
};

export default ProtectedRoutes