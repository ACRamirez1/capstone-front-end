import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Quotes = (props) => {
    console.log("is running");
    const [quotes, setQutoes] = useState([]);

  
    useEffect(() => {
      axios
        .get("https://capstone-ashen-zeta.vercel.app/quotes", {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        })
        .then((response) => {
            // console.log(response)
          setQutoes(response.data)});
    }, [props.token]);

  return (
    <div>
        <ul className='list'>
            {!quotes.length ? (
                <p>Loading quotes...</p>
            ) : (
                quotes.map(({id, quote, author}) => (
                    <li className='singleQuote' key={id}>{quote}</li>
                ))
            )}
        </ul>
    </div>
  )
}

export default Quotes