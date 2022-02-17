import logo from '../vinyl-record-svgrepo-com.svg';     //https://www.svgrepo.com/svg/81024/vinyl-record
import '../App.css';
import NavBar from '../components/navBarLinks';
import React from 'react';

function HomePage() {
    return(
      <>  
        <NavBar></NavBar>
        <div className="body">  
        
          <h2>Dave &amp; Margaux's Online Music Tracks Store<br></br>Database Administrator's App</h2>
          <br></br><br></br>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br><br></br>
        </div>   
      </>
    )
}

export default HomePage;