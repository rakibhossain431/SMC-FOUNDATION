import React from 'react'

function SmcRevolution() {
  return (
        <section className=' px-2 py-5'>
        <div className="container" >
            <h2 className="r-title pb-3">How SMC is Revolutionary  </h2>
            <div className='revolution d-flex'>
                <div className='r-box'>
                  <img src="/images/Revolution/secure.png" alt="" />
                  <h4>Secure </h4>
                    <p className='r-text mt-0'>The SMC Blockchain is as secure as bitcoin</p>         
                </div>
                <div className='r-box'> 
                  <img src="/images/Revolution/Fast.png" alt="" />
                  <h4>Fast</h4>
                    <p className='r-text mt-0'>The SMC Blockchain is as secure as bitcoin</p>
                </div>
                <div className='r-box'>
                  <img src="/images/Revolution/Scenabol.png" alt="" />
                  <h4>Scalable</h4>
                    <p className='r-text mt-0'>Unlike any other, SMC Blockchain is infinitely scalable </p> 
                </div>
                <div className='r-box'>
                  <img src="/images/Revolution/Reliable.png" alt="" />
                  <h4>Reliable</h4>
                    <p className='r-text mt-0'>Network failures are impossible in the SMC Blockchain </p>
                </div>

            </div>
        </div>

    </section>
  )
}

export default SmcRevolution