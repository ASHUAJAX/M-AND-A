import React from 'react'
import { data } from './data';
import ButtonComp from '@/app/components/ButtonComp';

function PrintOnDemand() {



    return (
        <>
            <div className=' my-20 m-auto'>

                <h1 className=' w-full px-5 md:w-1/2 text-4xl md:text-5xl m-auto text-center  font-extrabold'>Create Print-on-Demand shirts with Printify!</h1>
                <div className='flex flex-col md:flex-row justify-between items-center px-10 mt-20 gap-20'>
                    {
                        data.map((elm, ix) => (
                            <div className='flex-1' key={ix}>
                                <img src={elm.icon} alt="" />
                                <h1 className='text-2xl font-bold my-4'>{elm.head}</h1>
                                <p>{elm.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='w-full py-14 bg-primary flex flex-col text-center'>
                <h1 className='text-4xl md:text-5xl  text-[#2F2E0C] font-extrabold'>
                    Make Print on Demand t-shirts <br /> with Printify
                </h1>
                <p className='my-7 w-full px-5  m-auto'>Start creating shirts online with your own artwork. Simply pick and apply your<br />
                    design to a blank t-shirt.</p>
                <ButtonComp classname='bg-black w-[200px] m-auto py-4 text-white' text='Explore designs' type='button' />
            </div>
        </>

    )
}

export default PrintOnDemand;