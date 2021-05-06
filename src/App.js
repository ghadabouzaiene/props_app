
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from './profile/profile'



function App() {
  
  let fn=prompt('write your full name')
  let prof=prompt('write your profession')
  
  if (fn!=="" & prof!=="" )
   {return (

    <div className="App">
      
      
       <Profile fullName={fn} profession={prof} />
    </div> )} else
{ 
  return (
      <Profile></Profile>
    )}
    }
export default App;
