import React from 'react';

const authContext = React.createContext({
    autheticated: false,
    login: () => {}
});

export default authContext;