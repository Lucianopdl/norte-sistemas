import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse('google-site-verification: google9a9489e23fd8ac2a.html', {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
