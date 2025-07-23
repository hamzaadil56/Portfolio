import { NextRequest, NextResponse } from 'next/server';
import { validateAdmin } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Login request received:', { username: body.username, password: '***' });
    
    const { username, password } = body;
    
    if (!username || !password) {
      console.log('Missing username or password');
      return NextResponse.json(
        { success: false, error: 'Username and password are required' },
        { status: 400 }
      );
    }
    
    const isValid = validateAdmin(username, password);
    console.log('Validation result:', isValid);
    
    if (isValid) {
      console.log('Authentication successful');
      return NextResponse.json({ 
        success: true, 
        message: 'Authentication successful' 
      });
    } else {
      console.log('Invalid credentials provided');
      return NextResponse.json(
        { success: false, error: 'Invalid username or password. Please check your credentials.' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return NextResponse.json(
      { success: false, error: 'Authentication failed. Please try again.' },
      { status: 500 }
    );
  }
}