import './App.css';
import MI from './view/MI';
import CSK from './view/CSK';
import RCB from './view/RCB';
function App() {
  console.log('team selected is',process.env.REACT_APP_CRICKET_TEAM)
  const teamSelected = process.env.REACT_APP_CRICKET_TEAM;
  return (
    <div className="App">
      {
        teamSelected==='MI'?<MI/>:teamSelected==='CSK'?<CSK/>:teamSelected==='RCB'?<RCB/>:''
      }
    </div>
  );
}

export default App;
