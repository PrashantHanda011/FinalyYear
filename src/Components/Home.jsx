import React from 'react'
import '../Styles/home.css'
function Home() {
    return (
        <>
            <div className='col-12 d-flex'>
                <div className='col-2  side-design'>

                </div>
                  <div className='d-flex flex-column col-8 ms-5 justify-content-center align-items-center'>
                        <div className='col-8'>
                                <h3>Q1 . Why Am I Doing This ?</h3>
                                <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus nisi, in omnis minima possimus repellat, explicabo consectetur dignissimos ipsa adipisci quas rem quisquam doloribus. Velit a saepe debitis omnis? Vitae.</p>
                        </div>

                        <div className='mt-4 d-flex justify-content-end w-100'>
                            <button className='navigate-btn'>Next</button>
                        </div>
                  </div>  

            </div>
        </>
    )
}

export default Home