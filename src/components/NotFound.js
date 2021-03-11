import React from 'react';
import { Link } from 'react-router-dom'
// using Link browser does not refresh
// and we can link btw the pages
const NotFound = () => (
    <div>
        <p>404</p>
        <Link to='/'>go home</Link>
    </div>
)

export default NotFound