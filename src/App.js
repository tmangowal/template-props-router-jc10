import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarComp from './components/Navbar/Navbar';
import Tambah from './components/Tambah/Tambah';


function App() {
  return (
    <div >
      <NavbarComp/>
      <Switch>
        
      </Switch>
    </div>
  );
}

export default withRouter(App);
