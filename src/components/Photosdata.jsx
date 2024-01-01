import React from 'react'

function Photos(props) {
  return (
    <div>
     <tbody>
                <tr className='hover:scale-105 duration-200 overflow-hidden'>
                <td  className='px-10 border-2 border-purple-500'> <img src={props.url} className='w-[100px]' /></td>
                  <td  className='px-5 border-2 border-purple-500'>{props.title}</td>
              
                </tr>
                  
               
            </tbody>
        </div>
   
  )
}

export default Photos