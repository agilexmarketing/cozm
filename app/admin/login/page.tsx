'use client'

import { signIn, getSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  
  useEffect(() => {
    // Check if already logged in
    getSession().then((session) => {
      if (session) {
        router.push('/admin')
      }
    })
  }, [router])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      
      if (result?.error) {
        setError('Invalid credentials')
      } else {
        router.push('/admin')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      minHeight: '60vh'
    }}>
      <div style={{ 
        maxWidth: 400, 
        width: '100%',
        padding: '40px',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        backgroundColor: 'white'
      }}>
        <h1 style={{ 
          fontSize: '1.8rem', 
          fontWeight: 'bold', 
          textAlign: 'center',
          marginBottom: '30px',
          color: '#1f2937'
        }}>
          Admin Login
        </h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '6px',
              fontWeight: '500',
              color: '#374151'
            }}>
              Email
            </label>
            <input 
              type="email"
              placeholder="admin@example.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ 
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '6px',
              fontWeight: '500',
              color: '#374151'
            }}>
              Password
            </label>
            <input 
              type="password"
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ 
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
          </div>
          
          {error && (
            <div style={{ 
              color: '#dc2626', 
              fontSize: '0.9rem',
              textAlign: 'center',
              padding: '8px',
              backgroundColor: '#fef2f2',
              borderRadius: '6px'
            }}>
              {error}
            </div>
          )}
          
          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: isLoading ? '#9ca3af' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginTop: '8px'
            }}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  )
}
