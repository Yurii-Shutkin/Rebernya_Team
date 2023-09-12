import React from 'react'
import './NumberConfirm.scss'
import Input from '../../Common/Input/Input'
import Button from '../../Common/Button/Button'

export default function NumberConfirm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onContinueHandler = () => {
    console.log('clicked')
  }

  return (
    <div className='confirm'>
      <span className='confirm__title'>Введи код з SMS</span>
      <form onSubmit={handleSubmit}>
        <Input 
          type={'password'}
          name={'codeSMS'}
          id={'codeSMS'}
          placeholder={'*******'}
        />
        <Button 
          type={'submit'} 
          title={'Продовжити'} 
          color={'red'}
          onClickHandler={onContinueHandler}
        />
      </form>
    </div>
  )
}
