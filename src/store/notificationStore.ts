import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: number;
  read: boolean;
  persistent: boolean;
}

interface NotificationStore {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
}

export const useNotificationStore = create<NotificationStore>()(
  persist(
    (set, get) => ({
      notifications: [],
      unreadCount: 0,
      addNotification: (notification) => {
        const newNotification = {
          ...notification,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          read: false,
        };
        
        set((state) => ({
          notifications: [newNotification, ...state.notifications],
          unreadCount: state.unreadCount + 1,
        }));
      },
      markAsRead: (id) =>
        set((state) => {
          const notifications = state.notifications.map((n) =>
            n.id === id && !n.read ? { ...n, read: true } : n
          );
          const unreadCount = notifications.filter((n) => !n.read).length;
          return { notifications, unreadCount };
        }),
      markAllAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((n) => ({ ...n, read: true })),
          unreadCount: 0,
        })),
      removeNotification: (id) =>
        set((state) => {
          const notifications = state.notifications.filter((n) => n.id !== id);
          const unreadCount = notifications.filter((n) => !n.read).length;
          return { notifications, unreadCount };
        }),
      clearAll: () => set({ notifications: [], unreadCount: 0 }),
    }),
    {
      name: 'notification-storage',
    }
  )
);

