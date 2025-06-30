import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogs, createBlog } from '@/lib/blog-data';

// GET /api/blogs - Get all blogs
export async function GET() {
  try {
    const blogs = getAllBlogs();
    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST /api/blogs - Create a new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const requiredFields = ['title', 'url', 'platform', 'description'];
    for (const field of requiredFields) {
      if (!body[field] || body[field].trim() === '') {
        return NextResponse.json(
          { success: false, error: `Missing or empty required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Set default values for optional fields
    const blogData = {
      title: body.title.trim(),
      url: body.url.trim(),
      platform: body.platform.trim(),
      date: body.date?.trim() || new Date().getFullYear().toString(),
      readTime: body.readTime?.trim() || '5 min read',
      description: body.description.trim(),
      tags: Array.isArray(body.tags) ? body.tags.filter(tag => tag && tag.trim()) : [],
      gradient: body.gradient || 'from-blue-600 to-purple-600',
      platformColor: body.platformColor || 'text-blue-400'
    };

    console.log('Creating blog with data:', blogData);

    const newBlog = createBlog(blogData);
    
    console.log('Blog created successfully:', newBlog);
    
    return NextResponse.json(
      { success: true, data: newBlog },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create blog. Please try again.' },
      { status: 500 }
    );
  }
}