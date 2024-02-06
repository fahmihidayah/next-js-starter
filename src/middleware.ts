'use server'
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import { authOptions } from './app/api/auth/[...nextauth]/route';
import { routePathUtils } from './libs/routes';

// This function can be marked `async` if using `await` inside
export default async function loggingMiddleware(request: NextRequest) {
  console.log(`Received ${request.method} request to ${request.url} at ${new Date()}`);
  // const session = await getServerSession(authOptions);
  // console.log('middleware ', session)
  // if(!session?.token) {
  //   return NextResponse.redirect(routePathUtils.auth().login());
  // }
  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}