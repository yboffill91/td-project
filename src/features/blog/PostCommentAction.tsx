'use client';

import React, { useState, useEffect } from 'react';
import { MoreHorizontal, Edit, Trash2, Flag, Ban, Pin } from 'lucide-react';
import { useAlert } from '@/store';

interface PostCommentActionProps {
  commentId: string;
  authorId: string;
  currentUserId: string;
  isReply?: boolean;
  isFlagged?: boolean;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onPin: (id: string) => void;
  onBan: (authorId: string) => void;
  onFlag: (id: string) => void;
  isPinned?: boolean;
  isAdmin?: boolean;
}

export function CommentActions({
  commentId,
  authorId,
  currentUserId,
  onDelete,
  onEdit,
  onPin,
  isReply = false,
  onBan,
  onFlag,
  isPinned = false,
  isFlagged = false,
  isAdmin = true, // Temporarily set to true for testing
}: PostCommentActionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const showAlert = useAlert((state) => state.showAlert);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.comment-actions-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const actions = [
    {
      icon: Pin,
      label: isPinned ? 'Unpin Comment' : 'Pin Comment',
      onClick: () => {
        const action = isPinned ? 'unpin' : 'pin';
        showAlert({
          type: 'info',
          title: isPinned ? 'Unpin Comment' : 'Pin Comment',
          message: `Are you sure you want to ${action} this comment? ${
            !isPinned ? 'It will appear at the top of the discussion.' : ''
          }`,
          confirmText: isPinned ? 'Unpin Comment' : 'Pin Comment',
          cancelText: 'Cancel',
          onConfirm: () => {
            onPin(commentId);
            setIsOpen(false);
          },
        });
      },
      adminOnly: true,
      show: isAdmin && !isReply,
    },
    {
      icon: Edit,
      label: 'Edit Comment',
      onClick: () => {
        onEdit(commentId);
        setIsOpen(false);
      },
      adminOnly: false,
      show: authorId === currentUserId,
    },
    {
      icon: Flag,
      label: 'Flag as Inappropriate',
      onClick: () => {
        showAlert({
          type: 'warning',
          title: 'Report Comment',
          message:
            'Are you sure you want to report this comment? Our moderators will review it.',
          confirmText: 'Report',
          cancelText: 'Cancel',
          onConfirm: () => {
            onFlag(commentId);
            setIsOpen(false);
          },
        });
      },
      adminOnly: false,
    },
    {
      icon: Ban,
      label: 'Ban User',
      onClick: () => {
        showAlert({
          type: 'error',
          title: 'Ban User',
          message:
            'Are you sure you want to ban this user? They will no longer be able to participate in discussions.',
          confirmText: 'Ban User',
          cancelText: 'Cancel',
          onConfirm: () => {
            onBan(authorId);
            setIsOpen(false);
          },
        });
      },
      adminOnly: true,
      danger: true,
    },
    {
      icon: Trash2,
      label: 'Delete Comment',
      onClick: () => {
        showAlert({
          type: 'error',
          title: 'Delete Comment',
          message:
            'Are you sure you want to delete this comment? This action cannot be undone.',
          confirmText: 'Delete',
          cancelText: 'Cancel',
          onConfirm: () => {
            onDelete(commentId);
            setIsOpen(false);
          },
        });
      },
      adminOnly: false,
      show: isAdmin || authorId === currentUserId,
      danger: true,
    },
  ];

  return (
    <div className='relative comment-actions-menu'>
      {isPinned && (
        <div className='absolute -left-8 top-1/2 -translate-y-1/2 flex items-center gap-2'>
          <Pin className='w-5 h-5 text-blue-500' />
          {isFlagged && <Flag className='w-5 h-5 text-yellow-500' />}
        </div>
      )}
      {!isPinned && isFlagged && (
        <div className='absolute -left-8 top-1/2 -translate-y-1/2'>
          <Flag className='w-5 h-5 text-yellow-500' />
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-md transition-colors'
      >
        <MoreHorizontal className='w-5 h-5' />
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50 animate-fade-in'>
          {actions
            .filter((action) => {
              if (action.show !== undefined) return action.show;
              return !action.adminOnly || isAdmin;
            })
            .map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm ${
                  action.danger
                    ? 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/10'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                } transition-colors`}
              >
                <action.icon className='w-4 h-4' />
                {action.label}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
