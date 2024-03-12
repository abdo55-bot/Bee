import React, { useState } from 'react'
import { BiSolidMessage } from '../helpers/icons'
const Chat = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`chat fixed z-40 bottom-10  left-10 flex justify-center 
      items-center w-16 h-16 cursor-pointer rounded-full shadow-main 
    bg-primary text-white`}>

      <div className="icon"><BiSolidMessage onClick={() => setOpen(!open)} className='text-3xl' /></div>
      {open && (

        <div className={`absolute chat-body top-[20px]  left-5 sm:left-full -translate-y-full w-64 rounded-md h-auto  
        bg-grey text-black ${ open ? 'opacity-100' : 'opacity-0'} `}>
          <div className="header w-full bg-primary rounded-t-md text-white text-center flex justify-between font-bold py-2" >
            <span className='grow text-center'>leave a message</span>
            <span className='px-2' onClick={() => setOpen(!open)}>X</span>
          </div>
          <form action="" className='px-2 py-1 overflow-hidden'>
            <div className="form-group mb-2">
              <label htmlFor="name" className='text-sm'>your name</label>
              <input type='text' name="name" 
              className='rounded-sm bg-white w-full text-black p-1 resize-none outline-none focus:outline-none' 
              id="name" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="number" className='text-sm'>your number</label>
              <input type='text' name="number" 
              className='rounded-sm bg-white w-full text-black p-1 resize-none outline-none focus:outline-none' 
              id="number" />
            </div>
            <div className="form-group w">
              <label htmlFor="desc" className='text-sm'>Description</label>
              <textarea name="desc" className='rounded-sm bg-white w-full text-black p-1 resize-none outline-none focus:outline-none' 
              id="desc" cols="30" rows="10"></textarea>
            </div>
           <button className='py-1 px-4 float-right mb-3 bg-primary text-white rounded-md'>Send</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Chat