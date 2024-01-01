import React, { useEffect, useState } from 'react'
import Photos from './Photosdata'
import axios from 'axios'

function GETphoto() {
    const[getdata,setgetdata] =useState([])
    const getData=()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos').then((response)=>{
          setgetdata(response.data)
        }).catch(error=>{
          console.log(error)
        })
      }
      useEffect(()=>{
        getData();
      },[])
  return (
    <table>
        <tr  className='px-8 bg-red-400 py-8 text-white'>
<thead className=' '>
    <th className='px-10 border-2 border-purple-500'>url</th>
    <th className='px-[270px] border-2 border-purple-500'>tittle</th>
</thead>
        </tr>
        {
    getdata.map((item,index)=>{
      return <Photos key={index}
       url={item.url}
      title={item.title}
 
      />
    })
   }
    </table>
  )
}

export default GETphoto