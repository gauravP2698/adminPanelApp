import React, { useState, useEffect } from 'react'; 

const UserList = props => {
	let {userList,tabSwitch} = props;
	return(<div className="user-list-container">
		<table className="user-list-data">
		<tr>
			<th className="table-header">Name</th>
			<th>Email</th>
		</tr>
		<tbody>
			{userList.map((user,index)=>(
				<tr onClick={()=>{
					tabSwitch(1,user,index);
				}} key={index}>
					<td>{user.first_name + " "+user.last_name}</td>
					<td>{user.email}</td>
				</tr>
			))}
		</tbody>
		</table>
	</div>)
}

export default UserList;