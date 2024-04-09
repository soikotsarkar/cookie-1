
'use client'
import React from 'react';

import { useRouter } from 'next/navigation';
const page = () => {
	const router = useRouter();
	const Logout = async ()=>{
		const res = await fetch ('/api/login');
		const json= await res.json();

		if(json['status'] ===true){
			router.replace('/');
		}
	}
	return (
		<div>
			
			<h1>Dashboard page</h1>
			<button onChange={Logout}>Logout</button>
		</div>
	);
};

export default page;