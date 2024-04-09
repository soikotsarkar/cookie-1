'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
const router = useRouter();


const [formValues , setFormValues] =useState({
	email:'',
	password:'',

});
const handleChange = (name,value)=>{
const {name,value} = e.target;
setFormValues({...formValues,[name]:value})
};
const handleSubmit = async (e)=>{
	e.preventDefault();
	const config = {method:'POST',body:JSON.stringify(formValues)}
	const response = await fetch('/api/login',config);
	const json = await response.json();

	if(json['status']===true){
		router.replace('/dashboard')
	}else{
		alert(json['message']);
	}
};
	return (
		<div>
			
			<form onSubmit={handleSubmit}>
				<input onChange={(e)=>{handleChange('email',e.target.value)}} placeholder='email'/>
				<br/>
				<input onChange={(e)=>{handleChange('password',e.target.value)}} placeholder='password'/>
				<br/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default page;