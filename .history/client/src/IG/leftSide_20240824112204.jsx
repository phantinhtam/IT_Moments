import React from 'react'
import '../IG/leftSide.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import EmailOutlinedIcon from '@mui/icons-material/Email';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorder';
import AddBoxlinedIcon from '@mui/icons-material/Add';
const leftSide = () => {
  return (
    <div className='leftSidePart'>
      <div className='logoPart'>
        <img className='logoImg' src='/' alt='IT-Moment'/>
      </div>
      <div className='navLinkPart'>
        <div className='navLink'>
            <HomeIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Home</div>
        </div>
        <div className='navLink'>
            <SearchIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <ExploreIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <MusicVideoIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <EmailOutlinedIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <FavoriteBorderOutlinedIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <AddBoxlinedIcon sx={{fontSide:"30px",margin:"0 20px 0 0"}}/>
            <div className='navName'>Search</div>
        </div>
        <div className='navLink'>
            <img className='profileImg' src
            <div className='navName'>Search</div>
        </div>
      </div>
    </div>
  )
}

export default leftSide
