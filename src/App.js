import './App.css';
import TeamWeb from './view/TeamWeb';

import { data } from './helper/data';
function App() {
  console.log('team selected is',process.env.REACT_APP_CRICKET_TEAM)
  const teamSelected = process.env.REACT_APP_CRICKET_TEAM;
  return (
    <div className="App">
      {
        teamSelected==='MI'?<TeamWeb data={data.MI}/>:teamSelected==='CSK'?<TeamWeb data={data.CSK}/>:teamSelected==='RCB'?<TeamWeb data={data.RCB}/>:''
      }
    </div>
  );
}

export default App;
