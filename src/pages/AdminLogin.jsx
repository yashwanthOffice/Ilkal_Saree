import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function AdminLogin() {
  const { session, isAdmin, loading, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const navigate = useNavigate()

  if (!loading && session && isAdmin) {
    return <Navigate to="/admin" replace />
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      setError(err.message || 'Login failed. Check your email and password.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', padding: '24px' }}>
      <style>{`
.admin-login-card {
  width: 100%;
  max-width: 380px;
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: var(--space-5);
  box-shadow: var(--shadow-hover);
}

.admin-login-card h1 {
  font-size: 1.5rem;
  margin-bottom: var(--space-1);
}

.admin-login-card p.sub {
  color: var(--color-charcoal-soft);
  font-size: 0.88rem;
  margin-bottom: var(--space-4);
}

.admin-login-card label {
  display: block;
  font-size: 0.82rem;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: var(--space-3);
}

.admin-login-card input {
  width: 100%;
  border: 1px solid var(--color-blush);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  font-size: 0.95rem;
}

.admin-login-card__error {
  color: var(--color-error);
  font-size: 0.85rem;
  margin-top: var(--space-3);
}

.admin-login-card button {
  margin-top: var(--space-5);
}
      `}</style>

      <form className="admin-login-card" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <p className="sub">Sign in to manage sarees and categories.</p>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />

        {error && <p className="admin-login-card__error">{error}</p>}

        <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
          {submitting ? 'Signing in…' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
