import React, { useState } from 'react'
import { faqs } from '../constant'
import downArrow2 from '../assets/downArrow2.svg'
const FAQ = () => {
    const [question, setQuestion] = useState([]);
    const [isVisible, setVisible] = useState(false);
    const handleClick = (event) => {
        const data = event.target.textContent;
        const ques = faqs.find((faq) => {
            return faq.type == data
        });
        if (ques) {
            setQuestion(ques);
            const { questions} = ques ;
            setQuestion(questions);
        }
    }
    const showData = () => {
        setVisible(!isVisible)
    }
    return (
        <section id='FAQs' className='h-[60vh] w-screen px-32 flex flex-col items-center '>
            <h1 className='text-4xl font-semibold'>Frequently Asked <span className='text-blue-600'>Questions</span></h1>
            <div className='h-full w-full flex py-16 justify-around'>
                <div className='flex flex-col w-1/5 gap-8'>
                    {
                        faqs && faqs.map((faq) => {
                            return <button className='h-fit p-4 w-full border-2 rounded-lg font-semibold hover:shadow-xl hover:text-blue-500' onClick={(event) => handleClick(event)}>{faq?.type}</button>
                        })
                    }
                </div>
                <div className='w-3/5'>
                    {
                        question && question?.map((ques) => {
                            return (
                                <div className='w-full'>
                                    <span className='flex items-center gap-4' ><p className='text-lg text-blue-500 font-semibold'>{ques?.question}</p><img className='cursor-pointer' src={downArrow2} onClick={() => showData()}/></span>
                                    {isVisible && <p className='p-3'>{ques?.ans}</p>}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default FAQ