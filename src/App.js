import Navbare from './Navbare';
import Home from './Home';

function App() {

  const links = "https//:www.google.com"
  const title = "first app"
  const authname = "sir hader bahi"
  return (
    <div className="App">
          <Navbare/>
      <div className='content'>
          <Home/>
      </div>
    </div>
    
    
  );
}

export default App;
