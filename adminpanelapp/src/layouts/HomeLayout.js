import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import userListAction from "../redux/actions/userList";
import Header from "./Header.js"; 
import staticData from '../staticdata/StaticData'; 
import Body from "./Body.js"; 
import UserList from "./UserList.js";
import UserProfile from "./UserProfile.js"; 
const axios = require('axios');

const HomeLayout = props => {
	const { userList } = useSelector(state => ({
	  userList: state.userList&&state.userList.data ? state.userList.data:[],
	}));  
	const[tabIndex , SettabSwitch] =useState(0);
	const[index , SetIndex] =useState(0);
	const[user , SetUser] =useState(0);
	const dispatch = useDispatch();
	useEffect(() => { 
		axios.get('https://reqres.in/api/users')
			.then(function (response) {
				dispatch(userListAction(response.data.data));	
			})
			.catch(function (error) {
			// handle error
			console.log(error);
			})
			.finally(function () {
			});

	},[]); 

	function tabSwitchcallBack(tabIndex,user,index){
		SettabSwitch(tabIndex); 
		SetIndex(index);
		SetUser(user);
	} 
	return (
		<div className="home-layout">
		 <Header/>
		 <Body tabSwitch={tabSwitchcallBack} index={tabIndex}/>
		 {(tabIndex)?
		  <div className="user-profile">
		  <UserProfile user={user} tabSwitch={tabSwitchcallBack} index={index}/>
		  </div>:<div className="user-list"><UserList userList={userList} tabSwitch={tabSwitchcallBack}/></div>}
		</div>
	);
}

export default HomeLayout;