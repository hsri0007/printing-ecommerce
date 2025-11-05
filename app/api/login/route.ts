import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { username, password } = body

    const ADMIN_USER = 'srinivas.kappera@brahmanigraphics.com'  
    const ADMIN_PASS = '@SRINI_#Brahmani'

    if (!ADMIN_USER || !ADMIN_PASS) {
      return NextResponse.json({ success: false, message: 'Server not configured' }, { status: 500 })
    }

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const res = NextResponse.json({ success: true })
      // Set a simple httpOnly cookie. Replace with secure session in production.
      const maxAge = 60 * 60 * 24 // 1 day
      const secure = process.env.NODE_ENV === 'production'
      const cookie = `admin_auth=1; Path=/; HttpOnly; Max-Age=${maxAge}; SameSite=Strict${secure ? '; Secure' : ''}`
      res.headers.set('Set-Cookie', cookie)
      return res
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 })
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 })
  }
}