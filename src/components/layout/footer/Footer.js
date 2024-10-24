import React from 'react'


const Footer = () => {
    return (
        <div className=' mt-4 flex flex-col w-full bg-secondary text-sm'>
        <div className=' flex p-14'>

            {/* left part start */}
            <div className=' w-3/5 flex capitalize text-[.8rem] font-thin gap-20 text-white'>

                {
                   
                }


            </div>
            {/* left part end */}


            {/* right part */}
            <div className=' flex w-2/5  flex-1 px-4 border-l gap-2 text-[.8rem] text-white'>

                <div className=' flex flex-col gap-2'>
                    <h1 className=' text-sm uppercase  text-gray-500'></h1>
                    
                </div>

                <div className=' flex flex-col gap-2'>
                    <h1 className=' text-sm uppercase text-gray-500'></h1>
                    
                </div>

            </div>
        </div>
          <div className=' border-t p-4 text-center text-white'>
          <h1>Built By Chowgoni Vamshi , Inturi Sowmya  , Usha Deepika , Sakshi</h1>
          </div>
        </div>
    )
}

export default Footer