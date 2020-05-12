import React, { useState, useEffect } from 'react';

const Header = props => {
     return (
          <div className="header">
               <div className="col-1">
                    <img/>
                    <span className='content'>Logo</span>
               </div>
               <div className='col-2'>
                    <span className='content'>User name</span>
               </div>
          </div>
     ) 
}

export default Header;