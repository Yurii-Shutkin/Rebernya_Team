import React from 'react'
import Input from '../../Common/Input/Input'
import Button from '../../Common/Button/Button'

import './SignUp.scss'

export default function SignUp () {
  return (
    <form className='signUp'>
      <Input 
        type={'text'}
        name={'firstName'}
        id={'firstName'}
        placeholder={'Ім’я'}
      />
      <Input 
        type={'text'}
        name={'lastName'}
        id={'lastName'}
        placeholder={'Призвіще'}
      />
      <Input 
        type={'tel'}
        name={'local_num'}
        id={'local_num'}
        placeholder={'Номер картки Local'}
      />
      <Input 
        type={'date'}
        name={'dateOfBirth'}
        id={'dateOfBirth'}
        placeholder={'Дата народження'}
      />
      <Input 
        type={'text'}
        name={'city'}
        id={'city'}
        placeholder={'Місто проживання'}
      />
      <Button 
        type={'submit'}
        color={'red'}
        title={'Продовжити'}
      />
    </form>
  )
}
