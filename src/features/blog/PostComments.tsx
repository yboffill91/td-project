'use client';
import React, { useState } from 'react';
import { ArrOfComments, Comment } from '@/features/blog/utils';
import { useAlert } from '@/store';
import { Button, ShimmerButton } from '@/components/ui';
import { Reply, ThumbsUp } from 'lucide-react';
import { CommentActions } from '@/features/blog';

export interface CommentsProps {
  postId: string;
  className?: string;
  currentUserId?: string;
}

export const Comments = ({
  postId,
  className,
  currentUserId = 'guest',
}: CommentsProps) => {
  const showAlert = useAlert((state) => state.showAlert);
  const [comments, setComments] = useState(ArrOfComments);
  const [newComment, setNewComment] = useState('');
  const [editingComment, setEditingComment] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  // Handle saving edits and new replies
  const handleSaveContent = (commentId: string) => {
    if (!editContent.trim()) return;

    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, content: editContent, isEditing: false };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === commentId) {
                return { ...reply, content: editContent, isEditing: false };
              }
              if (reply.replies) {
                return {
                  ...reply,
                  replies: reply.replies.map((nestedReply) =>
                    nestedReply.id === commentId
                      ? {
                          ...nestedReply,
                          content: editContent,
                          isEditing: false,
                        }
                      : nestedReply
                  ),
                };
              }
              return reply;
            }),
          };
        }
        return comment;
      });
    });

    setEditingComment(null);
    setEditContent('');
  };

  const handleSubmit = (e: React.FormEvent | KeyboardEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now().toString(),
      author: {
        id: currentUserId,
        name: 'Guest User',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest',
      },
      content: newComment,
      date: new Date().toISOString(),
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  const handleDelete = (commentId: string) => {
    showAlert({
      type: 'warning',
      title: 'Delete Comment',
      message:
        'Are you sure you want to delete this comment? This action cannot be undone.',
      confirmText: 'Delete',
      cancelText: 'Cancel',
      onConfirm: () => {
        setComments((prevComments) => {
          // Handle top-level deletion
          if (prevComments.some((c) => c.id === commentId)) {
            return prevComments.filter((c) => c.id !== commentId);
          }

          // Handle nested deletions
          return prevComments.map((comment) => ({
            ...comment,
            replies: comment.replies?.filter((reply) => {
              if (reply.id === commentId) return false;
              if (reply.replies) {
                reply.replies = reply.replies.filter(
                  (nestedReply) => nestedReply.id !== commentId
                );
              }
              return true;
            }),
          }));
        });
      },
    });
  };

  const handleBan = (authorId: string) => {
    showAlert({
      type: 'error',
      title: 'Ban User',
      message:
        'Are you sure you want to ban this user? They will no longer be able to comment on any posts.',
      confirmText: 'Ban User',
      cancelText: 'Cancel',
      onConfirm: () => {
        setComments((prevComments) => {
          // Filter out all comments from banned user
          const filtered = prevComments.filter(
            (comment) => comment.author.id !== authorId
          );

          // Filter out all replies from banned user
          return filtered.map((comment) => ({
            ...comment,
            replies: comment.replies?.filter((reply) => {
              if (reply.author.id === authorId) return false;
              if (reply.replies) {
                reply.replies = reply.replies.filter(
                  (nestedReply) => nestedReply.author.id !== authorId
                );
              }
              return true;
            }),
          }));
        });
      },
    });
  };

  const handleFlag = (commentId: string) => {
    showAlert({
      type: 'info',
      title: 'Report Comment',
      message:
        'Are you sure you want to report this comment? Our moderators will review it.',
      confirmText: 'Report',
      cancelText: 'Cancel',
      onConfirm: () => {
        setComments((prevComments) => {
          // Flag top-level comment
          if (prevComments.some((c) => c.id === commentId)) {
            return prevComments.map((c) =>
              c.id === commentId ? { ...c, isFlagged: true } : c
            );
          }

          // Flag nested comments
          return prevComments.map((comment) => ({
            ...comment,
            replies: comment.replies?.map((reply) => {
              if (reply.id === commentId) {
                return { ...reply, isFlagged: true };
              }
              if (reply.replies) {
                return {
                  ...reply,
                  replies: reply.replies.map((nestedReply) =>
                    nestedReply.id === commentId
                      ? { ...nestedReply, isFlagged: true }
                      : nestedReply
                  ),
                };
              }
              return reply;
            }),
          }));
        });

        // Show success message after flagging
        showAlert({
          type: 'success',
          title: 'Comment Reported',
          message:
            'Thank you for helping keep our community safe. Our moderators will review this comment.',
          confirmText: 'Close',
        });
      },
    });
  };

  const handlePin = (commentId: string) => {
    setComments((prevComments) => {
      // First check if it's a top-level comment
      const topLevelComment = prevComments.find((c) => c.id === commentId);
      if (topLevelComment) {
        const updatedComment = {
          ...topLevelComment,
          isPinned: !topLevelComment.isPinned,
        };
        const otherComments = prevComments.filter((c) => c.id !== commentId);
        return updatedComment.isPinned
          ? [updatedComment, ...otherComments]
          : [...otherComments, updatedComment];
      }

      // If not found, check replies
      return prevComments.map((comment) => {
        if (comment.replies) {
          const replyToUpdate = comment.replies.find((r) => r.id === commentId);
          if (replyToUpdate) {
            const updatedReply = {
              ...replyToUpdate,
              isPinned: !replyToUpdate.isPinned,
            };
            const otherReplies = comment.replies.filter(
              (r) => r.id !== commentId
            );
            return {
              ...comment,
              replies: updatedReply.isPinned
                ? [updatedReply, ...otherReplies]
                : [...otherReplies, updatedReply],
            };
          }
        }
        return comment;
      });
    });
  };

  const handleLike = (commentId: string) => {
    setComments((prevComments) => {
      return prevComments.map((comment) => {
        // Handle main comment like
        if (comment.id === commentId) {
          return { ...comment, likes: comment.likes + 1 };
        }
        // Handle reply likes
        if (comment.replies) {
          const updatedReplies = comment.replies.map((reply) => {
            // Handle direct reply like
            if (reply.id === commentId) {
              return { ...reply, likes: reply.likes + 1 };
            }
            // Handle nested reply likes
            if (reply.replies) {
              return {
                ...reply,
                replies: reply.replies.map((nestedReply) =>
                  nestedReply.id === commentId
                    ? { ...nestedReply, likes: nestedReply.likes + 1 }
                    : nestedReply
                ),
              };
            }
            return reply;
          });
          return { ...comment, replies: updatedReplies };
        }
        return comment;
      });
    });
  };

  const handleReply = (commentId: string) => {
    const parentComment = findComment(commentId, comments);
    if (!parentComment) return;

    const newReply = {
      id: Date.now().toString(),
      author: {
        id: currentUserId,
        name: 'Guest User',
        image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Guest',
      },
      content: '',
      date: new Date().toISOString(),
      likes: 0,
      replies: [],
      isEditing: true,
    };

    setEditContent('');
    setEditingComment(newReply.id);

    setComments((prevComments) => {
      return prevComments.map((comment) => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...(comment.replies || []), newReply],
          };
        } else if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map((reply) => {
              if (reply.id === commentId) {
                return {
                  ...reply,
                  replies: [...(reply.replies || []), newReply],
                };
              }
              return reply;
            }),
          };
        }
        return comment;
      });
    });
  };

  const findComment = (id: string, comments: Comment[]): Comment | null => {
    for (const comment of comments) {
      if (comment.id === id) return comment;
      if (comment.replies) {
        const found = findComment(id, comment.replies);
        if (found) return found;
      }
    }
    return null;
  };

  const handleEdit = (commentId: string) => {
    const comment = findComment(commentId, comments);
    if (comment && comment.author.id === currentUserId) {
      const content = comment.content || '';
      setEditingComment(commentId);
      setEditContent(content);
    }
  };
  return (
    <div className={className}>
      <div className='mb-8'>
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
          Discussion ({comments.length})
        </h3>
        <p className='text-gray-600 dark:text-gray-400'>
          Share your thoughts and engage with our community
        </p>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className='mb-8'>
        <div className='mb-4'>
          <textarea
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder='Add to the discussion...'
            className='w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px]'
          />
        </div>
        <div className='flex justify-end'>
          <Button type='submit' className='px-6 py-2'>
            Comment
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className='space-y-6'>
        {comments.map((comment) => (
          <div
            key={comment.id}
            className='bg-white dark:bg-gray-800 rounded-lg p-6'
          >
            {/* Comment Header */}
            <div className='flex items-start justify-between mb-4 relative'>
              <div className='flex items-center gap-3'>
                <img
                  src={comment.author.image}
                  alt={comment.author.name}
                  className='w-10 h-10 rounded-full'
                />
                <div>
                  <h4 className='font-medium text-gray-900 dark:text-white'>
                    {comment.author.name}
                  </h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {new Date(comment.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>
              <CommentActions
                commentId={comment.id}
                authorId={comment.author.id}
                currentUserId={currentUserId}
                isPinned={comment.isPinned}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onPin={handlePin}
                onBan={handleBan}
                onFlag={handleFlag}
              />
            </div>

            {/* Comment Content */}
            {editingComment === comment.id ? (
              <div className='mb-4'>
                <textarea
                  autoFocus
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className='w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSaveContent(comment.id);
                    }
                  }}
                />
                <div className='flex justify-end gap-2 mt-2'>
                  <ShimmerButton
                    variant='secondary'
                    onClick={() => setEditingComment(null)}
                  >
                    Cancel
                  </ShimmerButton>
                  <ShimmerButton
                    variant='primary'
                    onClick={() => handleSaveContent(comment.id)}
                  >
                    Save
                  </ShimmerButton>
                </div>
              </div>
            ) : (
              <p className='text-gray-600 dark:text-gray-300 mb-4'>
                {comment.content}
              </p>
            )}

            {/* Comment Actions */}
            <div className='flex items-center gap-4'>
              <button
                onClick={() => handleLike(comment.id)}
                className='flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors'
              >
                <ThumbsUp className='w-4 h-4' />
                <span className='text-sm'>{comment.likes}</span>
              </button>
              <button
                onClick={() => handleReply(comment.id)}
                className='flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors'
              >
                <Reply className='w-4 h-4' />
                <span className='text-sm'>Reply</span>
              </button>
            </div>

            {/* Replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className='mt-4 pl-6 border-l-2 border-gray-200 dark:border-gray-700 space-y-4'>
                {comment.replies.map((reply) => (
                  <div
                    key={reply.id}
                    className='bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4'
                  >
                    <div className='flex items-start justify-between mb-3'>
                      <div className='flex items-center gap-3'>
                        <img
                          src={reply.author.image}
                          alt={reply.author.name}
                          className='w-8 h-8 rounded-full'
                        />
                        <div>
                          <h5 className='font-medium text-gray-900 dark:text-white'>
                            {reply.author.name}
                          </h5>
                          <p className='text-xs text-gray-500 dark:text-gray-400'>
                            {new Date(reply.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </div>
                      <CommentActions
                        commentId={reply.id}
                        authorId={reply.author.id}
                        currentUserId={currentUserId}
                        isReply={true}
                        onDelete={handleDelete}
                        onEdit={handleEdit}
                        onPin={handlePin}
                        onBan={handleBan}
                        onFlag={handleFlag}
                      />
                    </div>
                    {editingComment === reply.id ? (
                      <div className='mb-4'>
                        <textarea
                          autoFocus
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          className='w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                              e.preventDefault();
                              handleSaveContent(reply.id);
                            }
                          }}
                        />
                        <div className='flex justify-end gap-2 mt-2'>
                          <ShimmerButton
                            variant='secondary'
                            onClick={() => setEditingComment(null)}
                          >
                            Cancel
                          </ShimmerButton>
                          <ShimmerButton
                            variant='primary'
                            onClick={() => handleSaveContent(reply.id)}
                          >
                            Save
                          </ShimmerButton>
                        </div>
                      </div>
                    ) : (
                      <p className='text-gray-600 dark:text-gray-300 mb-3'>
                        {reply.content}
                      </p>
                    )}
                    <div className='flex items-center gap-4'>
                      <button
                        onClick={() => handleLike(reply.id)}
                        className='flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors'
                        type='button'
                      >
                        <ThumbsUp className='w-4 h-4' />
                        <span className='text-sm'>{reply.likes}</span>
                      </button>
                      <button
                        onClick={() => handleReply(reply.id)}
                        className='flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors'
                        type='button'
                      >
                        <Reply className='w-4 h-4' />
                        <span className='text-sm'>Reply</span>
                      </button>
                    </div>
                    {/* Nested Replies */}
                    {reply.replies && reply.replies.length > 0 && (
                      <div className='mt-4 pl-6 border-l-2 border-gray-200 dark:border-gray-700 space-y-4'>
                        {reply.replies.map((nestedReply) => (
                          <div
                            key={nestedReply.id}
                            className='bg-gray-100 dark:bg-gray-900/80 rounded-lg p-4'
                          >
                            {/* Nested Reply Content */}
                            <div className='flex items-start justify-between mb-3'>
                              <div className='flex items-center gap-3'>
                                <img
                                  src={nestedReply.author.image}
                                  alt={nestedReply.author.name}
                                  className='w-8 h-8 rounded-full'
                                />
                                <div>
                                  <h5 className='font-medium text-gray-900 dark:text-white'>
                                    {nestedReply.author.name}
                                  </h5>
                                  <p className='text-xs text-gray-500 dark:text-gray-400'>
                                    {new Date(
                                      nestedReply.date
                                    ).toLocaleDateString()}
                                  </p>
                                </div>
                              </div>
                              <CommentActions
                                commentId={nestedReply.id}
                                authorId={nestedReply.author.id}
                                currentUserId={currentUserId}
                                isReply={true}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                                onPin={handlePin}
                                onBan={handleBan}
                                onFlag={handleFlag}
                              />
                            </div>
                            {editingComment === nestedReply.id ? (
                              <div className='mb-4'>
                                <textarea
                                  autoFocus
                                  value={editContent}
                                  onChange={(e) =>
                                    setEditContent(e.target.value)
                                  }
                                  className='w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && !e.shiftKey) {
                                      e.preventDefault();
                                      handleSaveContent(nestedReply.id);
                                    }
                                  }}
                                />
                                <div className='flex justify-end gap-2 mt-2'>
                                  <ShimmerButton
                                    variant='secondary'
                                    onClick={() => setEditingComment(null)}
                                  >
                                    Cancel
                                  </ShimmerButton>
                                  <ShimmerButton
                                    variant='primary'
                                    onClick={() =>
                                      handleSaveContent(nestedReply.id)
                                    }
                                  >
                                    Save
                                  </ShimmerButton>
                                </div>
                              </div>
                            ) : (
                              <p className='text-gray-600 dark:text-gray-300 mb-3'>
                                {nestedReply.content}
                              </p>
                            )}
                            <div className='flex items-center gap-4'>
                              <button
                                onClick={() => handleLike(nestedReply.id)}
                                className='flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors'
                              >
                                <ThumbsUp className='w-4 h-4' />
                                <span className='text-sm'>
                                  {nestedReply.likes}
                                </span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
