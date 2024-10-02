import React, { useRef, useState } from 'react'
import "../App.css"
import { data } from "../assets/data.js"

function Quiz() {

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState(data[index]);
    const [lock, setLock] = useState(false);


    let Option1 = useRef(null);
    let Option2 = useRef(null);
    let Option3 = useRef(null);
    let Option4 = useRef(null);

    let options_array = [Option1, Option2, Option3, Option4];

    const checkAns = (e, ans) => {
        if (lock === false) {
            if (questions.ans === ans) {
                e.target.classList.add("correct");
                setLock(true);
            }

            else {
                e.target.classList.add("wrong");
                setLock(true);
                options_array[questions.ans - 1].current.classList.add("correct");
            }
        }
    }

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
                        {index + 1}.{questions.question}</p>
                </div>
                <br />
                <div ref={Option1} onClick={(e) => { checkAns(e, 1) }}
                    className=' cursor-pointer border-gray-400 border p-3'>{questions.option1}</div>
                <div ref={Option2} onClick={(e) => { checkAns(e, 2) }}
                    className=' cursor-pointer border-gray-400 border p-3 mt-3'>{questions.option2}</div>
                <div ref={Option3} onClick={(e) => { checkAns(e, 3) }}
                    className=' cursor-pointer border-gray-400 border p-3 mt-3'>{questions.option3}</div>
                <div ref={Option4} onClick={(e) => { checkAns(e, 4) }}
                    className=' cursor-pointer border-gray-400 border p-3 mt-3'>{questions.option4}</div>
                <br />
                <div className='flex justify-center'>
                    <button className='bg-purple-900 text-white p-3 w-52 rounded-md
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
