import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Api()  {

	const [data, setData] = useState([]);

	useEffect(() => {
		// console.log('hello')
		const options = {
			method: 'GET',
			url: 'http://localhost:4005/articles/fatherhood',
			
		};

		axios
			.request(options)
			.then(response => {
				setData(response.data);
			})
			.catch(err => console.error(err));
		
		
		
	},[]);

	useEffect(() => {
		console.log('useEffect2', data)
	},[data])


	return (
		<div className="Api">
		  Hello
		  {data.map((item, index) => (
            <div key={index}>
				{/* <img src='./img/f1.png' alt='f1' /> */}
				<a href={item.url} target='_blank' rel='noopener noreferrer'>Read More</a>
            </div>
		  ))}
		  
		</div>
	  );




}


export default Api;

