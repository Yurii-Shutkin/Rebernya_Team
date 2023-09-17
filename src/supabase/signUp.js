import { supabase } from "./client"

export const signUp = async (formData, navFn, navPath) => {
  const { data, error } = await supabase.auth.signUp(
    {
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          first_name: formData.first_name,
          last_name: formData.last_name,
          lokal_num: formData.lokal_num,
          date_of_birth: formData.date_of_birth,
          city: formData.city,
        }
      }
    }
  )
  navFn(navPath)
  console.log('Check your verif link')
}
