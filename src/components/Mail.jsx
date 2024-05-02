import React from 'react'
import { FaEnvelopeCircleCheck } from "react-icons/fa6";
import Button from './UI/btn';

const MailPage = () => {
  return (
    <div className='flex mx-80 my-32 w-1/2 h-96 bg-white justify-items-center items-center rounded-lg'>  
        <div className='m-5 grid-cols-1 text-center mx-10'>
            <img src="src/assets/download__1_-removebg-preview.png" alt="" style={{ width: '150px', height: '150px' }} className='mx-5' />
            <h3 className='text-black text-2xl'>TASUED</h3>
            <p className='text-black'>Department of Computer <br /> Science</p>
        </div>


        <div className='mx-10'>
            <h3 className='text-xl text-black my-3'>Account Recovery</h3>
                <div className='relative'>
                <input type="email" placeholder="email or number" className="w-full h-9 pl-10 pr-3 rounded bg-slate-300" />
                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" size={20} />
                    
                </div>

                

                <br />                           

                <div className=''>
                    <Button>
                        Send Recovery Link
                    </Button>

                    <button className='text-blue-700 text-xl my-4 mx-16'>Sign in</button>

                </div>
                
        </div>
                     
    </div>
  )
}

export default MailPage