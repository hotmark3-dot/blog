import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/api'

export async function GET() {
  const posts = getAllPosts()
  return NextResponse.json(posts)
}
