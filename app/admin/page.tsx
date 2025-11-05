'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Toaster as SonnerToaster } from '@/components/ui/toaster'
// ...existing code...

export default function AdminLoginPage() {
  const router = useRouter()
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)

  // new state for inline UI messages
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null) // clear previous error
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: user, password: pass }),
      })
      const data = await res.json()
      if (res.ok && data.success) {
        // successful login — navigate to admin area
        router.push('/admin/quotes')
      } else {
        // show error in UI instead of toast
        setErrorMessage(data.message || 'Invalid credentials')
      }
    } catch (err) {
      setErrorMessage('Server error. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Admin Login</h2>

        {/* inline error message */}
        {errorMessage && (
          <div className="mb-4 p-3 text-sm text-red-800 bg-red-100 border border-red-200 rounded">
            {errorMessage}
          </div>
        )}

        <label className="block mb-2">
          <span className="text-sm">Username</span>
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </label>

        <label className="block mb-4">
          <span className="text-sm">Password</span>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className="mt-1 block w-full rounded border px-3 py-2"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>

      {/* optional: keep Toaster mounted if you still use toast elsewhere */}
      <div style={{ zIndex: 9999 }}>
        <SonnerToaster />
      </div>
    </div>
  )
}
