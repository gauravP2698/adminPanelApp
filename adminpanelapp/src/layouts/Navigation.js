import React, { useState, useEffect } from 'react';
import { MdHighQuality ,MdAccountBalance ,MdRemoveRedEye , MdContactPhone } from 'react-icons/md';
import {
  useHistory, 
} from "react-router-dom";


let navigationButtons=[{
	Icon:MdAccountBalance ,
	routePath:"/",
	id:1
},
{
	Icon:MdHighQuality,
	routePath:"/emptypage",
	id:2
},
{
	Icon:MdRemoveRedEye ,
	routePath:"/emptypage",
	id:3
},
{
	Icon:MdContactPhone ,
	routePath:"/emptypage",
	id:4
}, 
];

const Navigation = props => {
	const[selectedIconId , SetSelectedIconId] =useState(1);
	return (
		<div className='navigation-bar'>
			{navigationButtons.map((value,index)=>(
				<Buttons key={index} {...value} selectedIconId={selectedIconId} SetSelectedIconId={SetSelectedIconId}/>	
			))}
		</div>
	)
}

const Buttons = props=>{
	let history = useHistory();
	let {Icon , routePath, id,SetSelectedIconId,selectedIconId} = props;
	return <div style={{background:id==selectedIconId?'black':''}} onClick={()=>{ history.replace(routePath);
		SetSelectedIconId(id)
	}} className="button"> <Icon /> </div> 
}

export default Navigation;