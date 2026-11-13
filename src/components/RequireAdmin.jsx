import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function RequireAdmin({ children }) {
  const { session, isAdmin, loading } = useAuth()

  if (loading) {
    return (
      <div className="page container" style={{ paddingBlock: '96px', textAlign: 'center' }}>
        <p>Checking access…</p>
      </div>
    )
  }

  if (!session || !isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return children
}
