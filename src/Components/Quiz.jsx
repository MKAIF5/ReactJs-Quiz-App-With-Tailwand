import React, { useRef, useState } from 'react'
import "../App.css"
import { data } from "../assets/data.js"

function Quiz() {

    const [index, setIndex] = useState(0);
    const [questions, setQuestions] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);


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
                setScore(prev => prev + 1)
            }

            else {
                e.target.classList.add("wrong");
                setLock(true);
                options_array[questions.ans - 1].current.classList.add("correct");
            }
        }
    }
    const next = () => {
        if (index === data.length - 1) {
            setResult(true);
            return 0;
        }

        if (lock === true) {
            setIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                return newIndex < data.length ? newIndex : prevIndex;
            });
            setQuestions(data[index + 1]);
            setLock(false);
            options_array.map((opt) => {
                opt.current.classList.remove("wrong");
                opt.current.classList.remove("correct");
                return null;
            })
        }
    }

    const reset = () => {
        setIndex(0);
        setQuestions(data[0]);
        setScore(0);
        setLock(false);
        setResult(false)
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
                {result ? <></> : <>
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

                        <button
                            className='bg-purple-900 text-white p-3 w-52 rounded-md
                    text-lg font-semibold'
                            onClick={next}
                        >
                            Next</button>
                    </div>
                    <br />
                    <div>
                        <p className='text-center text-lg font-semibold'>{index + 1} To {data.length} questions</p>
                    </div>
                </>
                }

                {result ? <>

                    <h2 className='text-xl font-semibold'>Your Score Is {score} Out Of {data.length}</h2>
                    <br />
                    <div className='flex justify-center'>
                        <button
                            onClick={reset}
                            className='bg-purple-900 text-white p-3 w-52 rounded-md
                    text-lg font-semibold'>Reset</button>
                    </div>
                </> :
                    <></>
                }

            </div>
        </>
    )
}

export default Quiz