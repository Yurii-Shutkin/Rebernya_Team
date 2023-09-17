import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../supabase/signIn'
import { checkUser } from '../../supabase/checkUser'
import './Auth.scss'
import Button from '../../Common/Button/Button'

export default function Auth({ supabase }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser(navigate, '/all_info')
  })

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
    signIn(formData, navigate, '/all_info', '/auth', setError);
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
