'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { GoogleIcon } from '@/components/icons/google-icon';
import Link from 'next/link';
import { AuthError } from '../components/auth-error';

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      // Add your sign-up logic here
      console.log('Sign up:', { username, email, password });
      // Simulate loading
      await new Promise((resolve) => setTimeout(resolve, 1000));
      router.push('/protected/account');
    } catch (error) {
      setError('An unexpected error occurred');
      console.error('Sign up error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='space-y-4'>
      <form onSubmit={handleSubmit} className='space-y-4'>
        {error && <AuthError message={error} />}
        <Input
          type='text'
          placeholder='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />
        <Input
          type='password'
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
        />
        <Button type='submit' fullWidth size='lg' disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </Button>
      </form>

      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t border-gray-300 dark:border-gray-700' />
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-500'>
            Or continue with
          </span>
        </div>
      </div>

      <Button
        type='button'
        variant='outline'
        fullWidth
        size='lg'
        disabled={loading}
        onClick={() => {
          // Add Google sign-up logic here
          console.log('Google sign-up clicked');
        }}
      >
        <GoogleIcon className='w-5 h-5 mr-2' />
        <span>Sign up with Google</span>
      </Button>
    </div>
  );
}
