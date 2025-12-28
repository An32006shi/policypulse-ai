
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import api from '@/lib/api';

type AppRole = 'admin' | 'citizen';

interface User {
  _id: string;
  name: string;
  email: string;
  role: AppRole;
  token?: string;
}

interface AuthContextType {
  user: User | null;
  role: AppRole | null;
  isLoading: boolean;
  isAdmin: boolean;
  signUp: (email: string, password: string, name: string, role?: string) => Promise<{ data?: any; error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const { data } = await api.get('/auth/profile');
          setUser(data);
          setRole(data.role);
        } catch (error) {
          console.error('Auth check failed:', error);
          localStorage.removeItem('token');
          setUser(null);
          setRole(null);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const signUp = async (email: string, password: string, name: string, role: string = 'citizen') => {
    try {
      const { data } = await api.post('/auth/register', { email, password, name, role });
      localStorage.setItem('token', data.token);
      setUser(data);
      setRole(data.role);
      // setIsAdmin is derived from role in render, no need to set state
      return { data, error: null };
    } catch (error: any) {
      return { data: null, error: error.response?.data?.message || 'Registration failed' };
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      setUser(data);
      setRole(data.role);
      return { error: null };
    } catch (error: any) {
      return { error: error.response?.data?.message || 'Login failed' };
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setRole(null);
  };

  const value = {
    user,
    role,
    isLoading,
    isAdmin: role === 'admin',
    signUp,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
