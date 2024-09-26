import './App.css';
import leftSide  from '../IG/leftSide';
function App(){
    return(
        <div className="App">
            <div className='leftSideHome'>
             <leftSide/>
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