// import { createClient } from '@supabase/supabase-js';
import './App.scss';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';


function App() {
  // const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
  // const SUPABASE_API_KEY = process.env.REACT_APP_SUPABASE_API_KEY;
  // const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

  return (
    <div className="App">
      <Header />
      <Nav />
    </div>
  );
}

export default App;
