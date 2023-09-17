import { supabase } from "./client";

export const checkUser = (navFn, navPath) => {
  const authListener = supabase.auth.onAuthStateChange((event, session) => {
    if (event === 'SIGNED_IN') {
      navFn(navPath)
    } 
  });
}
