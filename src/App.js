import './App.css';
import { Route } from 'react-router-dom';
import Allquotes from './pages/allquotes'
import Quotesdetails from './pages/quotesdetails'
import Newquotes from './pages/newquotes';
import { Redirect, Switch } from 'react-router-dom';
import Head from './Hedaer'


function App() {

  return(<>
   <Head/>
<Switch>
  
  <Route path="/" exact>
    <Redirect to="/quotes"></Redirect>
  </Route>
<Route path="/quotes" exact>
<Allquotes/>
</Route>
<Route path="/quotes/:quotesid">
<Quotesdetails/>
</Route>
<Route path="/newquotes">
<Newquotes/>
</Route>

</Switch>
</>


  )


}

export default App;
