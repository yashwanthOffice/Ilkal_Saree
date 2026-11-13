import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="page container" style={{ textAlign: 'center', paddingBlock: '96px' }}>
      <h1 style={{ fontSize: '3rem' }}>404</h1>
      <p style={{ color: 'var(--color-charcoal-soft)', margin: '16px 0 24px' }}>
        This page doesn't exist, or the saree you're looking for has been unwoven.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </div>
  )
}
