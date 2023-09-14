import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import LoadSpinner from '../Common/LoadSpinner/LoadSpinner'

export default function Home({ supabase }) {
  const [userMetadata, setUserMetaData] = useState(null);
  const user = supabase.auth.getUser();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserMetadata() {
      try {
        const authListener = supabase.auth.onAuthStateChange((event, session) => {
          if (event === 'SIGNED_IN') {
            navigate('/all_info')
            console.log('kek')
          }
        });
        const { data, session, error } = await supabase.auth.getUser();
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
    }

    fetchUserMetadata(); // Вызов функции для получения метаданных при монтировании компонента
  }, []);

  async function logout() {
    try {
      const { error } = await supabase.auth.signOut();
  
      if (error) {
        console.error('Ошибка выхода из системы:', error);
        return;
      }
  
      console.log('Выход из системы успешно выполнен');
      navigate('/auth')
      // Вы можете перенаправить пользователя на страницу входа или домашнюю страницу
    } catch (error) {
      console.error('Ошибка:', error.message);
    }
  }

  console.log(user)

  const onClickHandler = () => {
    logout();
    
  }

  return (
    userMetadata 
    ? 
    <div>
      <Header 
        firstName={userMetadata.first_name}
        lastName={userMetadata.last_name}
        lokalNum={userMetadata.lokal_num}
      />
      <Nav />
      <button onClick={onClickHandler}>Выйти</button>
    </div>
    :
    <LoadSpinner />
  )
}
