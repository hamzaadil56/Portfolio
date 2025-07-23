// Simple admin authentication (in production, use proper authentication)
export interface AdminUser {
  username: string;
  password: string;
}

// In production, store this securely and hash passwords
const ADMIN_CREDENTIALS: AdminUser = {
  username: "admin",
  password: "admin123" // In production, this should be hashed
};

export const validateAdmin = (username: string, password: string): boolean => {
  console.log('Validating admin credentials:', { username, password: '***' });
  console.log('Expected credentials:', { username: ADMIN_CREDENTIALS.username, password: '***' });
  
  const isValid = username.trim() === ADMIN_CREDENTIALS.username && password.trim() === ADMIN_CREDENTIALS.password;
  console.log('Validation result:', isValid);
  
  return isValid;
};

// Simple session management (in production, use proper JWT or session management)
export const setAdminSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminAuthenticated', 'true');
    localStorage.setItem('adminLoginTime', Date.now().toString());
    console.log('Admin session set');
  }
};

export const clearAdminSession = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    console.log('Admin session cleared');
  }
};

export const isAdminAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const loginTime = localStorage.getItem('adminLoginTime');
  
  console.log('Checking authentication:', { isAuthenticated, loginTime });
  
  if (!isAuthenticated || !loginTime) {
    console.log('Not authenticated or no login time');
    return false;
  }
  
  // Session expires after 24 hours
  const sessionDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
  const isSessionValid = Date.now() - parseInt(loginTime) < sessionDuration;
  
  console.log('Session validity:', { isSessionValid, timeDiff: Date.now() - parseInt(loginTime) });
  
  if (!isSessionValid) {
    console.log('Session expired, clearing');
    clearAdminSession();
    return false;
  }
  
  return true;
};