import { supabase } from "./client";

export const logout = async (navFn, navPath) =>  {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error('Ошибка выхода из системы:', error);
      return;
    }

    console.log('Выход из системы успешно выполнен');
    navFn(navPath);
    // Вы можете перенаправить пользователя на страницу входа или домашнюю страницу
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
}
