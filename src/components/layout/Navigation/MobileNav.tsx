'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { NavigationItem } from './MainNav';
import Link from 'next/link';

interface MobileNavProps {
  items?: NavigationItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='lg:hidden p-2 text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'
        aria-label='Toggle navigation menu'
      >
        {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </button>

      <div
        className={cn(
          'fixed inset-y-0 left-0 transform lg:hidden bg-white dark:bg-gray-800 w-64 transition-transform duration-300 ease-in-out z-30',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className='p-6 space-y-4'>
          {items?.map((item, index) => {
            if (item.items) {
              return (
                <div key={index} className='space-y-2'>
                  <p className='font-medium text-gray-900 dark:text-gray-100'>
                    {item.label}
                  </p>
                  <div className='pl-4 space-y-2'>
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className='block text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={index}
                href={item.href!}
                className='block text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400'
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
