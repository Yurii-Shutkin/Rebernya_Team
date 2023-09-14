import { createClient } from '@supabase/supabase-js';
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
import SignUp from './Pages/SignUpPage/SignUp';
import EmailConfirmationPage from './Components/EmailConfirmationPage/EmailConfirmationPage';
// import NumberConfirm from './Pages/NumberConfirm/NumberConfirm'

function App() {
  const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
  const SUPABASE_API_KEY = process.env.REACT_APP_SUPABASE_API_KEY;
  const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

  // const user = supabase.auth.getUser()
  // if (user) {
  //   console.log('Пользователь зарегистрирован:', user);
  //   console.log(user)
  //   // Здесь вы можете использовать данные пользователя, например, его идентификатор (user.id)
  // } else {
  //   console.log('Пользователь не зарегистрирован');
  // }

  return (
    <Router>
       <div className="App">
        <Routes>
          <Route path={'/'} element={<Home supabase={supabase}/>} />
          <Route path={'/auth'} element={<Auth supabase={supabase}/>} />
          <Route path={'/confirm'} element={<EmailConfirmationPage supabase={supabase}/>} />
          {/* <Route path={'/confirm_num'} element={<NumberConfirm supabase={supabase}/>} /> */}
          <Route path={'/sign_up'} element={<SignUp supabase={supabase}/>} />
          <Route path={'/all_info'} element={<AllInfo supabase={supabase}/>}/>
          <Route path={'/work_shedule'} element={<WorkShedule supabase={supabase}/>}/>
          <Route path={'/point_system'} element={<PointSystem supabase={supabase}/>}/>
          <Route path={'/info'} element={<Info supabase={supabase}/>}/>
          <Route path={'/share_common'} element={<ShareCommon supabase={supabase}/>}/>
          <Route path={'/chat'} element={<Chat supabase={supabase}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
