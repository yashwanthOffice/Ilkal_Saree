import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [session, setSession] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    supabase.auth.getSession().then(({ data }) => {
      if (!mounted) return
      setSession(data.session)
      checkAdmin(data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
      checkAdmin(newSession)
    })

    async function checkAdmin(currentSession) {
      if (!currentSession) {
        setIsAdmin(false)
        setLoading(false)
        return
      }
      // RLS on `admins` blocks direct reads, so we check admin-ness indirectly:
      // try a harmless admin-only write-path check via a lightweight RPC-free
      // approach — attempt to select something only admins can see. Simplest
      // reliable option: call a Postgres function that returns a boolean.
      const { data, error } = await supabase.rpc('is_admin')
      setIsAdmin(!error && data === true)
      setLoading(false)
    }

    return () => {
      mounted = false
      listener?.subscription?.unsubscribe()
    }
  }, [])

  async function login(email, password) {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
  }

  async function logout() {
    await supabase.auth.signOut()
  }

  const value = { session, isAdmin, loading, login, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
