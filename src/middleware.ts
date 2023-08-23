import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
// import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export default authMiddleware({
  publicRoutes: ['/', '/user/:user', '/api/get-certifications', '/user/:user/about'],
  ignoredRoutes: ['/api/register-user'],
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    if (req.url === `${BASE_URL}/` && auth.userId) {
      return NextResponse.redirect('http://localhost:3000/dashboard')
    }
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
