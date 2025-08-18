import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function GET(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const searchParams = request.nextUrl.searchParams
    
    // Parse query parameters
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const depth = parseInt(searchParams.get('depth') || '1')
    const sort = searchParams.get('sort') || '-publishedAt'
    const whereParam = searchParams.get('where')
    
    let where = {}
    if (whereParam) {
      try {
        where = JSON.parse(whereParam)
      } catch (error) {
        return NextResponse.json(
          { error: 'Invalid where parameter' },
          { status: 400 }
        )
      }
    }

    // Fetch posts from PayloadCMS
    const posts = await payload.find({
      collection: 'posts',
      page,
      limit,
      depth,
      sort,
      where,
    })

    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config })
    const data = await request.json()

    // Create new post
    const post = await payload.create({
      collection: 'posts',
      data,
    })

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}