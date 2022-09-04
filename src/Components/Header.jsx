import React, { useEffect, useState } from 'react'

function Header() {
    const [memo,setmemo]=useState([]);
    useEffect(()=>
    {
        fetch('https://api.imgflip.com/get_memes') .then(res=>res.json())
        .then(json=>setmemo(json))
},[])

const[url,seturl]=useState("");
// console.log(memo)
function getmemoimage()
{
    const memoarray= memo.data.memes;
    const randomimage = Math.floor(Math.random()*memoarray.length)
    seturl(memoarray[randomimage].url)
   
}
console.log(url)
  return (
    <div>
<div className="bg-cyan-500 w-full h-20 px-12 py-6">
    <div className="flex items-center justify-between">
        <div className="">
            <h1 className='font-bold text-lg font-serif'>Memo Generator </h1>
            </div>
            <div className="">
                <h1 className='font-bold text-lg font-serif'>React Course Project</h1>
            </div>
    </div>
</div>
<div className="flex justify-center mx-20">
<div className=" space-x-8">
    <input type="text" placeholder='top' className='text-black mt-12 ring-2 focus:right-2 rounded-md h-8 w-72'/>
    <input type="text" placeholder='down' className='text-black mt-12 ring-2 focus:right-2 rounded-md h-8 w-72'/>
</div>
</div>
<div className="flex justify-center mx-20 mt-12">
<button onClick={getmemoimage} className='px-32 py-2 bg-blue-800 text-white border hover:border-blue-800 hover:bg-white hover:text-blue-800 rounded-md'>Get Another Image </button></div>
    <div className="mt-20 flex justify-center items-center">
        <img src={url} alt="" className='h-64 w-96' / >
    </div>
    </div>
  )
}

export default Header