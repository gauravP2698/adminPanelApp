import React, { useState, useEffect } from 'react'; 
import {useSelector, useDispatch} from 'react-redux';
import userListAction from "../redux/actions/userList";

const UserProfile = props => {
	let {user, tabSwitch , index} = props;
	let {first_name , last_name,email,id} = user;
	const[firstName , setFirstName] =useState(first_name);
	const[lastName , setLastName] =useState(last_name);
	const[emailId , setemailId] =useState(email);
	const { userList } = useSelector(state => ({
	  userList: state.userList&&state.userList.data ? state.userList.data:[],
	}));  
	const dispatch = useDispatch(); 
	return(
		<div className="user-profile">
			<form className="profile-date">
				<div className="text-box">
					<div className="text-label-field">
						<span>First name</span>
						<input value={firstName} onChange={(e)=>{
								setFirstName(e.target.value)
						}}  placeholder="firstName"/>
					</div>
					<div className="text-label-field">
						<span>Last name</span>
						<input value={lastName} onChange={(e)=>{
								setLastName(e.target.value)
						}} placeholder="lastName"/>
						</div>
					<div className="text-label-field">
						<span>Email</span>
							<input onChange={(e)=>{
								setemailId(e.target.value)
						}} value={emailId} placeholder="email"/>
					</div>
				</div>
				<div className="text-box"><div 
				onClick={()=>{
					let user={
						first_name :firstName,
						last_name:lastName,
						email:emailId,
						id:id 
					};
					userList[index] = user;
					dispatch(userListAction(userList));	
					tabSwitch(0); 
				}}
					className="submit">Submit</div></div>
			</form>
		</div>
	)
}

export default UserProfile;