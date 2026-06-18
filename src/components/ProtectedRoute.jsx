import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from "../supabase"; 

export default function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null)

  useEffect(() => {
    let isMounted = true;
    const check = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!isMounted) return;
      if (!user) return setAllowed(false)

      const { data: profile, error } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()
      
      if (!isMounted) return;
      
      if (error) {
        console.error("Error fetching profile:", error);
        return setAllowed(false);
      }

      setAllowed(profile?.role === 'admin')
    }
    check()

    return () => { isMounted = false; };
  }, [])

  if (allowed === null) return null
  if (!allowed) return <Navigate to="/login" />

  return children
}