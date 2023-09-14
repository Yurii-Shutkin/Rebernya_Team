import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Auth.scss'
import Button from '../../Common/Button/Button'

export default function Auth({ supabase }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const session = supabase.auth.session();

  useEffect(() => {
    const authListener = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        navigate('/all_info')
      } else {
        return
      }
    });
  })
  // const signIn = async(num) => {
  //   let { error } = await supabase.auth.signInWithOtp(
  //     { phone: num }
  //   )

  //   if (error) {
  //     console.log(error)
  //     return
  //   }
  // }

  const signIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      navigate('/all_info')
      if (error) {
        setError(error.message); // Установка ошибки в состояние
        navigate('/auth')
        return; // Выход из функции, чтобы избежать дальнейших действий
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevFormData)=> {
      return {
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
  }
  
  const onSignInHandler = () => {
    signIn();
  }
  
  const onSignUpHandler = () => {
    navigate('/sign_up')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='auth'>
      <h4 className='auth__title'>Авторізація</h4>
      <p className='auth__greet'>Вітаємо!</p>
      <span className='auth__placeholder'>Введіть ваш e-mail та пароль</span>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name='email' 
          id='email' 
          placeholder='E-mail' 
          onChange={handleChange}
          className='auth__input'
        />
        <input 
          type="password" 
          name='password' 
          id='password' 
          placeholder='Пароль' 
          onChange={handleChange}
          className='auth__input'
        />
        {error && <p className='auth__error'>Невірний e-mail або пароль</p>} {/* Отображение ошибки, если она есть */}
        <Button 
          type={'submit'} 
          title={'Продовжити'} 
          color={'red'}
          onClickHandler={onSignInHandler}
        />
        <span className='auth__divider'>або</span>
        <Button 
          type={'submit'} 
          title={'Зареєструватись'} 
          color={'green'}
          onClickHandler={onSignUpHandler}
        />
      </form>
    </div>
  )
}
