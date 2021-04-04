import styled from 'styled-components'
import Taskbar from './Taskbar.js';
import Header from './Header.js';
import GrowPanel from './GrowPanel.js';
import AddTask from './AddTask.js';
import React, { useState, useEffect } from 'react';

const Profile = ({usrName, usrEmail, loggedIn}) => {

    return (
        <Container>
            <Header name={usrName}/>
            <TaskSection>
                <Taskbar email={usrEmail} loggedIn={loggedIn}/>
                <GrowPanel />
            </TaskSection>
        </Container>
    )
}

export default Profile

const Container = styled.div`
    width: 50%;
    height: 100%;
    min-width: 400px;
<<<<<<< HEAD
    background-color: #eaddb6;
    justify-content: space-space-around;
=======
    margin: 0;
    padding: 0;
    justify-content: center;
>>>>>>> 3d0b29d97b0d084062cdcf9a3668955b64f6b37f
    align-items: center;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 800px) {
     {
         width: 100%;
    }
}
`
const TaskSection = styled.div`
<<<<<<< HEAD
    width: 95%;
    background-color: #eaddb6;
    display: flex;
    border: 2px solid white;
    border-radius: 15px;
    overflow-y: scroll;
    height: 75%;
=======
    display: flex;
    border: 2px solid white;
    border-radius: 15px;
    height: 75%;
    margin: 15px;

>>>>>>> 3d0b29d97b0d084062cdcf9a3668955b64f6b37f
`