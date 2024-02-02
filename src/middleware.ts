import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export default function loggingMiddleware(request: NextRequest) {
  console.log(`Received ${request.method} request to ${request.url} at ${new Date()}`);
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}