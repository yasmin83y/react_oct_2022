import React from 'react';
import Employee from '../component/employee';
import Header from '../component/header';
import LikeDislike from '../component/likedislike'

import Rainbow  from '../component/rainbow'


function RootComponent() {
    return (  
     <div>
        <h1>My Root component</h1>
        <Header company="IBM" years="80"></Header>
        <Header company="AirAsia" years="21"></Header>
        <Header company="Google" years="26"></Header>
        <Header company="OBB" years="4"></Header>
        <Rainbow></Rainbow>
        <LikeDislike></LikeDislike>
        <Employee></Employee>
     </div>
    );
}

export default RootComponent;