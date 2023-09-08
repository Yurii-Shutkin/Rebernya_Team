import React from 'react'

export default function Auth() {
  return (
    <div className='Auth'>
      <h4>Авторізація</h4>
      <p>Вітаємо!</p>
      <span>Введіть ваш номер телефону</span>
      <input type="tel" name="tel" id="tel" />
      <button type="button">Продовжити</button>
    </div>
  )
}
