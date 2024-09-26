import React from 'react'
import statusImg from '../images/avt_cv.jpg'

const MiddleSide = () => {
  return (
      <div className='middleHomeSide'>
          <div className='storyBlock'>
              <div className='storyParticular'>
                  <div className='imageDiv'>
                      <img className='statusImg' src={statusImg} alt='statusImage' />
                  </div>
                  <div className='pro'></div>
              </div>
          </div>
      </div>
)
}

export default MiddleSide
