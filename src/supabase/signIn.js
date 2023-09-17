import { supabase } from "./client";

export const signIn = async (formData, navFn, okNavPath, errNavPath, errState) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    })
    navFn(okNavPath)
    if (error) {
      errState(error.message); // Установка ошибки в состояние
      navFn(errNavPath)
      return; // Выход из функции, чтобы избежать дальнейших действий
    }
  } catch (error) {
    console.log(error)
  }
}
