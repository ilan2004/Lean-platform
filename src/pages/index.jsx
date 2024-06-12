import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import './index.css'
const Home = () => {


  return (
    <>
      <Navbar />
      <div className="container">
        <div className="selection-box">
          <div className="buttons">
            <a href='/login' className="button">Login</a>
            <a href='/withoutlogin' className="button">WithoutLogin</a>
          </div>
        </div>
      </div>
      <footer>
        <aside>
          <span>Assignment by
            <a href='https://ilandev.netlify.app/' className='author-link'> Ilan Usman</a>
          </span>
        </aside>
      </footer>
    </>
  );
}

export default Home;
