import React from 'react'
import {PatientData} from "../Data/PatientData"
import { MdDateRange } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { IoStarHalf } from "react-icons/io5";
const Details = () => {
  return (
    <div className='m-8'>
      
      <table class="table-auto">
  <thead>
    <tr className='bg-gray-200 text-gray-400 text-sm'>
      <th className='py-4 px-3'>PATIENTS</th>
      <th className='py-4 px-3'> DATE</th>
      <th className='py-4 px-3'>TIME</th>
      <th className='py-4 px-3'>DOCTOR </th>
      <th className='py-4 px-3'>INJURY</th>
    </tr>
  </thead>
  <tbody>
    
      {PatientData.map((p)=>(
        <>
        <tr >
         <td className='py-2 px-7' >
             < >
             <div className='flex'>
              <div className='m-2 text-3xl'><FaUserTie/></div>
              <div>
              <div className='font-bold'>{p.patient_name}</div>
          <div className='text-sm text-gray-500'>{p.mobile_number}</div>
              </div>
              </div>
             </>
         
          </td>
         <td className='text-gray-900 py-2 px-7'>
          <div className='flex '>
            <div div className='m-1 text-xl'><MdDateRange/></div>{p.appointment_date}</div>
          </td>
         <td className='text-gray-900 py-2 px-7'>
          <div className='flex'>
            <div className='m-1 text-xl'><IoMdTime/></div>{p.appointment_time}</div>
          </td>
         <td className='text-gray-900 py-2 px-7'>
          <div className='flex'>
          <div className='m-1 text-xl'><IoStarHalf /></div>{p.doctor}
          </div>
          </td>
         
         <td className=' py-2 px-7'>
          <span className='bg-blue-200 p-1 rounded-lg font-medium'>{p.injury}</span></td>
         </tr>
         <hr style={{ borderColor: 'black', height: '10px' }} />
         </>
      ))}
      
    
  </tbody>
</table>
    </div>
  )
}

export default Details
