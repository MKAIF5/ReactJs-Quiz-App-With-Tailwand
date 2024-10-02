import React from 'react'
import "../App.css"

function Quiz() {

    return (
        <>

            <div className='bg-white p-10 w-2/4 mx-auto relative top-5 rounded-xl'>

                <div>
                    <h1 className='text-2xl text-gray-800 
                    font-semibold'>Quiz App</h1>
                </div>
                <br />
                <hr className='border-gray-500 border' />
                <br />
                <div>
                    <p className='text-xl text-gray-900 tracking-wider'>
                        1. Which Device Is Required For The Internet <br /> Connection?</p>
                </div>
                <br />
                <div className='border-gray-400 border p-3'>Modern</div>
                <div className='border-gray-400 border p-3 mt-3'>Router</div>
                <div className='border-gray-400 border p-3 mt-3'>LAN Cable</div>
                <div className='border-gray-400 border p-3 mt-3'>Pen Drive</div>
                <br />
                <div className='flex justify-center'>
                    <button className='bg-purple-900 text-white p-3 w-44 rounded-md
                    text-lg font-semibold'>Next</button>
                </div>
                <br />
                <div>
                    <p className='text-center text-lg font-semibold'>1 To 5 questions</p>
                </div>
            </div>
        </>
    )
}

export default Quiz
