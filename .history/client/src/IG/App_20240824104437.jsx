import './App.css';
import LeftSide  from '../IG/leftSide';
function App(){
    return(
        <div className="App">
            <div className='leftSideHome'>
             <LeftSide/>
            </div>
            <div className='middlSide'>
              Middlside  
            </div>
            <div className='rightSide'>
                right side
            </div>
        </div>
    )
}

export default App;