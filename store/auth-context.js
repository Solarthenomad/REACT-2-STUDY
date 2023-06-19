import React from "react";

//AuthContext는 컴포넌트를 포함할 객체이다.
const AuthContext = React.createContext({
    isLoggedIn : false
});

export default AuthContext;