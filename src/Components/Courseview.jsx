import { useState } from 'react';
import ReactPlayer from 'react-player'
import '../Css/courseview.css'
const Courseview = () => {
    const [videoSource, setVideoSource] = useState('https://www.youtube.com/watch?v=LXb3EKWsInQ');

    const handleChapterClick = (event,newVideoSource) => {
        console.log(newVideoSource)
        setVideoSource(newVideoSource);
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="courseview">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-12">
                                    <div>
                                        <div className="video-part">
                                            <div className="vp-title mb-4 mt-5">
                                                <h3 className='fw-bold'>Introduction to music course</h3>
                                            </div>
                                            <div className="vp-video mb-4">
                                                <ReactPlayer  controls width="100%" height="450px" url={videoSource} />
                                            </div>
                                        </div>
                                        <div className='content-wrapper'>
                                            <div className='about_course'>
                                                <h3 className='fw-bold'>About Course</h3>
                                                <p>
                                                    <span className='fw-bold'>Module 1: </span>
                                                    So we have 1st module , where you will learn how blockchain
                                                    run in realtime world. What is cryptocurrency? How to be a
                                                    crypto trader? You will learn the basic things about blockchain
                                                    and crypto world, like what is NFT? What are the rules for
                                                    became a crypto trader. Learn various type of time frame in
                                                    trading.Step by step you will know about exchanges, how to open
                                                    your 1st trading account in there. Indian government rules for
                                                    cryptocurrency, and what is trading? How to make profit?
                                                    Not only practicals, we will discuss about deep blockchain
                                                    knowledge, like what is mining? How it works? What is the
                                                    consensus protocols? How crypto is born and listed in any
                                                    exchanges? After that we will cover smart contracts to
                                                    decentralised wallets. Also we are covering a small part of
                                                    technical analysis, indicators, candles.</p>
                                                <p className='paratext'><span className='fw-bold'>Module 2: </span>
                                                    In the next module. we will go deep into the blockchain and
                                                    crypto knowledge.
                                                    Here we know about some protocols, security of holding
                                                    wallets, secrets of technicals and fundamental analysis, not
                                                    only in basic level, we will go through advance level. Not just
                                                    blockchain knowledge, in this module 2, you will know about
                                                    many types of trading, including future trade, no loss strategy,
                                                    and also some crypto history, case studies. Case study in
                                                    various type of cryptocurrency in different fields. And at last
                                                    we have some gem coin suggestions for upto 50x profit in long
                                                    term.
                                                    So, are you ready to unlock the potential of blockchain and
                                                    cryptocurrency? Join us on this exciting journey as we explore
                                                    the possibilities, challenge the status quo, and embrace the
                                                    future of decentralized technology as well as be a master
                                                    trader with no loss strategy. </p>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-8 col-12">
                                    <div className='videolist-area ms-2 mb-3'>
                                        <div className='course-select-area border-radius-12'>
                                            <div className='course-title mb-4 mt-5 '>
                                                <h5 className='fw-bold'>Course Requirement</h5>
                                            </div>
                                            <div className='course-body'>

                                                <div className="accordion" id="accordionExample">

                                                    <div className="accordion-item accordionitem">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed accordionitem fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

                                                                Section-1: Introduction


                                                            </button>
                                                        </h2>
                                                        <div id="collapseOne" className="accordion-collapse collapse " data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <div className='chapter'>
                                                                    <div className='row'>
                                                                    <div className='col' onClick={e=>handleChapterClick(e,'https://youtu.be/kVAJO9AghjM?si=pWpKJBKIy0oziHNG')}>
                                                                        <i className="fa fa-play-circle iconplay"></i>
                                                                        <span className='ms-3'>Introduction</span>
                                                                    </div>
                                                                    <div className='col text-end'>10:05</div>
                                                                    </div>
                                                                </div>
                                                                <div className='chapter'>
                                                                <div className='row'>
                                                                    <div className='col' onClick={e => handleChapterClick(e , 'https://youtu.be/zFSqskyqEXg?si=PR4DO2_4a_5wS0U8')}>
                                                                        <i className="fa fa-play-circle iconplay"></i>
                                                                        <span className='ms-3'>Introduction</span>
                                                                    </div>
                                                                    <div className='col text-end'>15:05</div>
                                                                </div>
                                                                </div>


                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed accordionitem fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Section-2: How to Start
                                                            </button>
                                                        </h2>
                                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        <i className="fa fa-play-circle iconplay"></i>
                                                                        <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                                                                    </div>
                                                                    <div className='col text-end'>10:05</div>
                                                                </div>
                                                                <div className='row mt'>
                                                                    <div className='col'>
                                                                        <i className="fa fa-play-circle iconplay"></i>
                                                                        <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                                                                    </div>
                                                                    <div className='col text-end'>15:05</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header">
                                                            <button className="accordion-button collapsed accordionitem fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Section-3: Discuss
                                                            </button>
                                                        </h2>
                                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                <div className='row'>
                                                                    <div className='col'>
                                                                        <i className="fa fa-play-circle iconplay"></i>
                                                                        <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                                                                    </div>
                                                                    <div className='col text-end'>10:05</div>
                                                                </div>
                                                                <div className='row mt'>
                                                                    <div className='col'>
                                                                        <i className="fa fa-play-circle iconplay"></i>
                                                                        <span className='ms-3'><a href='https://youtu.be/G1nWnu89d7M?si=vzZKGCvNYU7uuu4t'>Introduction</a></span>
                                                                    </div>
                                                                    <div className='col text-end'>15:05</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courseview