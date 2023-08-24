import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { BASE_URL } from './app/constant/baseUrl'
// import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware

export default authMiddleware({
  publicRoutes: [
    '/',
    '/user/:user',
    '/user/:user/about',
    '/api/get-certifications'
  ],
  ignoredRoutes: ['/api/user'],
  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url })
    }
    if (req.url === `${BASE_URL}/` && auth.userId) {
      return NextResponse.redirect(`${BASE_URL}/dashboard`)
    }
  }
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
}
