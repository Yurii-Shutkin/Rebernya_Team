import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { logout } from '../supabase/logout'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import LoadSpinner from '../Common/LoadSpinner/LoadSpinner'

export default function Home({ supabase }) {
  const [userMetadata, setUserMetaData] = useState(null);
  const navigate = useNavigate();
  const fetchUserMetadata = useCallback(async () => {
    try {
      supabase.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_IN') {
          navigate('/all_info')
          console.log('kek')
        }
      });
      const { data, error } = await supabase.auth.getUser();
      if (data.user) {
        console.log('Метаданные пользователя:', data.user.user_metadata);
        setUserMetaData(data.user.user_metadata);
        console.log(userMetadata)
      } else if (error) {
        navigate('/auth')
        console.error('Ошибка получения метаданных пользователя:', error.message);
      }
    
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }, [navigate, supabase.auth, userMetadata])

  useEffect(() => {
    if(!userMetadata) {
      fetchUserMetadata(); 
    }
  }, [userMetadata, fetchUserMetadata]);


  const onClickHandler = () => {
    logout(navigate, '/auth');
    
  }

  return (
    userMetadata 
    ? 
    <div>
      <Header 
        firstName={userMetadata.first_name}
        lastName={userMetadata.last_name}
        lokalNum={userMetadata.lokal_num}
        duty={userMetadata.duty}
      />
      <Nav />
      <button onClick={onClickHandler}>Выйти</button>
      <Outlet />
    </div>
    :
    <LoadSpinner />
  )
}
