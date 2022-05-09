import {useState} from 'react'

import './App.css';
import dice from './assets/icon-dice.svg'
import divider from './assets/pattern-divider-desktop.svg'

function App() {
  const [advice, setAdvice] = useState({
    slip: {
      advice: 'Never run with scissors.',
      id: 40
    }
  })
  
  // useEffect(() => {
    
  //   fetch('https://api.adviceslip.com/advice')
  //   .then((response) => {
  //     if(response.ok) {
  //       return response.json()
  //     }
  //     throw response
  //   })
  //   .then((data) => {
  //     setAdvice(data)
  //     console.log(advice)
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
      
    
  // }, [advice])
  

  const getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
        throw response
      })
      .then((data) => {
        setAdvice(data)
        console.log(advice)
      })
      .catch((error) => {
        console.error(error);
      })
  }


  return (
    <div className="App">
      <div className="container">
        <main className="box">
          <div className="box-head">
            <h4>advice #{advice?.slip?.id}</h4>
          </div>
          <div className="box-body">
            <h1>“{advice?.slip?.advice}”</h1>
          </div>
          <div className="divider">
            <img src={divider} alt="divider" />
          </div>
          <div className="dice" onClick={getAdvice}>
            <img src={dice} alt="dice" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;