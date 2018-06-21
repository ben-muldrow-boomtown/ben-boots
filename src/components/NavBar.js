import React from 'react';
import { Link } from '@reach/router';

const NavBar = (props) => (
    <div className="w-100 outline center tc pv2">
        <Link className="tc center ph2 fw2" to="/">Home</Link>
        <Link className="tc center ph2 fw2" to="/dashboard">Dash</Link>
    </div>
)

export default NavBar;