import React from 'react'
import statusImg from '../images/avt_cv.jpg'
import '../IG/middleSide.css'
import postImg from '../images/avt_cv.jpg'
import postImg1 from '../images/hoi-thao-quoc-te-ve-kinh-te-lan-2-2nd-international-conference-on-economics-ice-2024.jpg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HowToVoteIcon from '@mui/icons-material/HowToVote';


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
                        <img className='postInfoImg' src={postImg} alt='' />
                        <div className='postInfousername'>ptt_tam</div>
                    </div>

                    <div className='postImg'>
                        <img className='postImgage' src={postImg1} alt='' />
                    </div>

                    <div className='iconsBlock'>
                        <div className='leftIcon'>
                            <FavoriteBorderIcon sx={{ fontSide: "25px" }} />
                            <ChatBubbleOutlineIcon sx={{ fontSide: "25px" }} />
                            <HowToVoteIcon sx={{ fontSide: "25px" }} />
                            </div>
                            <div>
                                <HowToVoteIcon sx={{ fontSide: "25px" }} />
                            </div>
                    </div>
                    <div className='likSection'>
                        <div className='imageLiekes'>
                            <img className=''
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiddleSide
