import React from 'react'

function Apis(props) {
  return <tbody>
                <tr className='hover:scale-105 duration-200 overflow-hidden'>
                <td  className='px-10 border-2 border-purple-500'>{props.name}</td>
                  <td  className='px-10 border-2 border-purple-500'>{props.username}</td>
                  <td  className='px-10 border-2 border-purple-500'>{props.email}</td>
                </tr>
                  
               
            </tbody>
  
  
}

export default Apis