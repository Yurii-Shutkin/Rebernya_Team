import React, {useState} from 'react'
import './NumberConfirm.scss'
import Button from '../../Common/Button/Button'

export default function NumberConfirm({ supabase, number }) {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const confirm = async(num, tok) => {
    let { error } = await supabase.auth.verifyOtp({
      phone: `${num}`,
      token: `${tok}`,
      type: 'sms'
    })
    if (error) {
      console.log(error)
      return
    } else {
      console.log('user reg sucsess')
    }
  }
  const onContinueHandler = () => {
    confirm(number, inputValue)
  }

  return (
    <div className='confirm'>
      <span className='confirm__title'>Введи код з SMS</span>
      <form onSubmit={handleSubmit}>
        <input 
        type={'tel'} 
        name={'codeSMS'} 
        id={'codeSMS'} 
        placeholder={'******'} 
        onChange={handleInputChange}
        value={inputValue}
        className='confirm__input'/>
        <Button 
          type={'submit'} 
          title={'Продовжити'} 
          color={'red'}
          onClickHandler={onContinueHandler}
          url={'/sign_up'}
        />
      </form>
    </div>
  )
}
