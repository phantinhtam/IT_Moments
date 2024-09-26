import React from 'react'
import profileImg from '../images/avt_cv.jpg'

const MiddleSide = () => {
  return (
   <div className='middleHomeSide'>
      <div className='storyBlock'>
        <div className='storyParticular'>
            <div className='imageDiv'>
                <img className='statusDiv'src={profileImg} alt=''/>
            </div>
        </div>
      </div>
   </div>
)
}

export default MiddleSide
