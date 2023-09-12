import React, { useState } from 'react'
import './Auth.scss'
import Button from '../../Common/Button/Button'
import NumberConfirm from '../NumberConfirm/NumberConfirm';

export default function Auth({ supabase }) {
  const [inputValue, setInputValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const signIn = async(num) => {
    let { error } = await supabase.auth.signInWithOtp(
      { phone: num }
    )
    setIsClicked(true);
    if (error) {
      console.log(error)
      return
    }
  }

  const onChangeHandler = (e) => {
    setInputValue(e.target.value)
  }
  
  const onContinueHandler = () => {
    console.log('clicked')
  }
  
  const onSignUpHandler = () => {
    signIn(inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    isClicked 
    ?
    <NumberConfirm supabase={supabase} number={inputValue}/>
    :
    <div className='auth'>
      <h4 className='auth__title'>Авторізація</h4>
      <p className='auth__greet'>Вітаємо!</p>
      <span className='auth__placeholder'>Введіть ваш номер телефону</span>
      <form onSubmit={handleSubmit}>
        <input 
          type="tel" 
          name='tel' 
          id='tel' 
          placeholder='+380XXXXXXXXX' 
          value={inputValue}
          onChange={onChangeHandler}
          className='auth__input'/>
        <Button 
          type={'submit'} 
          title={'Продовжити'} 
          color={'red'}
          onClickHandler={onContinueHandler}
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
