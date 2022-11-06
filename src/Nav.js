import React from 'react';
import {Link} from 'react-router-dom';
import './Nav.css';
function Nav(){
    return(
        <div className='nav'>
            <div className='links'>
                <Link class="link" to="/">Home</Link>
                <Link class="link" to="/withoutlazy">Without Infinite Scrolling</Link>
            </div>
            <div class="para">Tech News Headlines...!</div>
            
        </div>
    )
}
export default Nav;