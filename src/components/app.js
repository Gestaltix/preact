import { Router } from 'preact-router';
import Comp from './Comp';
import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import { createContext } from 'preact';
import { useState } from 'preact/hooks';


export const Url = createContext('')
export default ({ }) => {
  const [url, setUrl] = useState('/')
  const handleRoute = e => {
    setUrl(e.url)
  };

  return (
    <div id="app">
      <Header />
      <Url.Provider value={url}>
        <Comp />
      </Url.Provider>
      <Router onChange={handleRoute}>
        <Home path="/" />
        <Profile async path="/profile/" user="me" />
        <Profile async path="/profile/:user" />
      </Router>
    </div>
  );
}
