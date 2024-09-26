import React from 'react'
import statusImg from '../images/avt_cv.jpg'
import '../IG/middleSide.css'
import postImg from '../images/avt_cv.jpg'

const MiddleSide = () => {
  return (
      <div className='middleHomeSide'>
          {/* <div className='storyBlock'>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
               <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='profileName'>ptt_tam</div>
              </div>
          </div> */}

          <div className='postSection'>
              <div className='post'>
                <div className='postInfo'>
                    <img className='postInfoImg' src={postImg} alt=''/>
                </div>
                <div className='postInfoame'>ptt_tam</div>
              </div>
          </div>
      </div>
)
}

export default MiddleSide
