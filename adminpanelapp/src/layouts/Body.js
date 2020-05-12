import React, { useState, useEffect } from 'react';

const Body = props => {
let {tabSwitch , index} = props;
 return (
 		<div className="body">
 			<div className="title"><div className="text">Page Title</div></div>
 			<div className="tabs">
 			<div className={(!index)?"active":"non-active"} onClick={()=>{
 					tabSwitch(0); 
  			}}>UserList</div>
 			<div className={(index)?"active":"non-active"} onClick={()=>{
  			}}>User Profile</div>
 			</div> 
 		</div>
 	)
}


export default Body;