'use client';
import React, { useState } from 'react';
import { ArrOfComments, Comment } from '@/features/blog/utils';
import { useAlert } from '@/store';

export interface CommentsProps {
  postId: string;
  className?: string;
  currentUserId?: string;
}

export const useComments = ({
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
  return {
    comments,
    setComments,
    newComment,
    setNewComment,
    editingComment,
    setEditingComment,
    editContent,
    setEditContent,
    handleSaveContent,
    handleSubmit,
    handleDelete,
    handleBan,
    handleFlag,
    handlePin,
    handleLike,
    handleReply,
    handleEdit,
  };
};
