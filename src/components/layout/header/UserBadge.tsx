'use client';

import { useState } from 'react';
import { User2 } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { NotificationsDropdown } from '@/components/layout/header';
import { useNotificationStore } from '@/store';
import { useClickOutside } from '@/components/layout/header/utils/useClickOutsideRef';
import Image from 'next/image';

interface UserBadgeProps {
  photoUrl: string | null;
}

export const UserBadge = ({ photoUrl }: UserBadgeProps) => {
  const [subMenu, setSubMenu] = useState(false);
  const { unreadCount } = useNotificationStore();
  const ref = useClickOutside(() => setSubMenu(false));
  const onUserBadgeClick = () => {
    setSubMenu(!subMenu);
  };

  return (
    <>
      {!subMenu && (
        <div
          className={`rounded-lg relative ${
            unreadCount > 0 ? 'border border-secondary-green' : 'border'
          }`}
        >
          {unreadCount > 0 && (
            <span className='absolute right-0 top-0 size-2 rounded bg-secondary-green text-xs flex items-center justify-center text-primary-foreground'>
              <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-green -z-0 opacity-75' />
            </span>
          )}
          <button
            className={`flex items-center rounded-lg`}
            onClick={onUserBadgeClick}
          >
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt='User Picture'
                className='rounded-lg size-8'
                width={100}
                height={100}
              />
            ) : (
              <User2 className='rounded-lg size-8 bg-card' />
            )}
          </button>
        </div>
      )}
      {subMenu && (
        <div
          className={`rounded-lg relative ${
            unreadCount > 0 ? 'border border-secondary-green' : 'border'
          }`}
        >
          {unreadCount > 0 && (
            <span className='absolute right-0 top-0 size-2 rounded bg-secondary-green text-xs flex items-center justify-center text-primary-foreground'>
              <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-green -z-0 opacity-75' />
            </span>
          )}
          <button
            className={`flex items-center rounded-lg`}
            onClick={onUserBadgeClick}
          >
            {photoUrl ? (
              <Image
                src={photoUrl}
                alt='User Picture'
                className='rounded-lg size-8'
                width={100}
                height={100}
              />
            ) : (
              <User2 className='rounded-lg size-8 bg-card' />
            )}
          </button>
        </div>
      )}
      <span>
        <AnimatePresence>
          {subMenu && <NotificationsDropdown ref={ref} />}
        </AnimatePresence>
      </span>
    </>
  );
};
