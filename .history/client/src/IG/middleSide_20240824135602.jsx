import React from 'react'
import statusImg from '../images/avt_cv.jpg'
import '../IG/middleSide.css'
import postImg from '../images/hoi-thao-chuoi-cung-ung-nong-nghiep-tu-thu-mua-ben-vung-den-quan-ly-chat-thai.png';

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
                <div className='postInfoName'>Tổ chức Hội nghị Đại biểu Viên chức và Người lao động năm học 2024 - 2025</div>
              </div>
          </div>
      </div>
)
}

export default MiddleSide
