import React from 'react';
import './EmailConfirmationPage.scss'

const EmailConfirmationPage = () => {
  return (
    <div className="email-confirmation">
      <h2>Подтверждение Email</h2>
      <p>Для завершения регистрации, пожалуйста, подтвердите ваш email.</p>
      <p>Проверьте свой почтовый ящик и нажмите на ссылку для подтверждения.</p>
    </div>
  );
};

export default EmailConfirmationPage;
