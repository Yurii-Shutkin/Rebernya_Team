// import { createClient } from '@supabase/supabase-js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './Components/Home';
import Auth from './Pages/Auth/Auth';
import AllInfo from './Pages/AllInfo/AllInfo';
import WorkShedule from './Pages/WordShedule/WorkShedule';
import PointSystem from './Pages/PointSystem/PointSystem';
import Info from './Pages/Info/Info';
import ShareCommon from './Pages/ShareCommon/ShareCommon';
import Chat from './Pages/Chat/Chat';
import NumberConfirm from './Pages/NumberConfirm/NumberConfirm';

function App() {
  // const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
  // const SUPABASE_API_KEY = process.env.REACT_APP_SUPABASE_API_KEY;
  // const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

  return (
    <Router>
       <div className="App">
        <Routes>
          <Route path={'/home'} element={<Home />} />
          <Route path={'/auth'} element={<Auth />} />
          <Route path={'/confirm_num'} element={<NumberConfirm />} />

        </Routes>
        <Routes>
          <Route path={'/all_info'} element={<AllInfo />}/>
          <Route path={'/work_shedule'} element={<WorkShedule />}/>
          <Route path={'/point_system'} element={<PointSystem />}/>
          <Route path={'/info'} element={<Info />}/>
          <Route path={'/share_common'} element={<ShareCommon />}/>
          <Route path={'/chat'} element={<Chat />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
