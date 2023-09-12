import React from 'react'
import './Auth.scss'
import Button from '../../Common/Button/Button'
import Input from '../../Common/Input/Input'

export default function Auth() {
  const onContinueHandler = () => {
    console.log('clicked')
  }
  const onSignUpHandler = () => {
    console.log('clicked')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='auth'>
      <h4 className='auth__title'>Авторізація</h4>
      <p className='auth__greet'>Вітаємо!</p>
      <span className='auth__placeholder'>Введіть ваш номер телефону</span>
      <Input 
        type={'tel'}
        name={'tel'}
        id={'tel'}
        placeholder={'+380XXXXXXXXX'}
      />
      <form onSubmit={handleSubmit}>
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
