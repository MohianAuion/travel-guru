    import React, { use } from 'react';
    import { Navigate, useLocation } from 'react-router';
    import AuthContext from '../Context/AuthContext';

    const PrivateRoute = ({children}) => {
    const{user}=use(AuthContext);
    const location=useLocation()
    

    if(user){
        return children;
    }
    return <Navigate to='/auth' state={location.pathname} replace></Navigate>
        
    };

    export default PrivateRoute;