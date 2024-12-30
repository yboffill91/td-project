import { format } from 'date-fns';
import { Button } from '@/components/ui';
import { useNotificationStore } from '@/store';

export const Notifications = () => {
  const { notifications, unreadCount, markAsRead, markAllAsRead } =
    useNotificationStore();
  const handleNotificationClick = (id: string) => {
    markAsRead(id);
  };

  return (
    <div className='w-full flex-col'>
      <header className='flex items-center justify-between p-4 w-full'>
        <div className='text-sm font-semibold'>Notifications</div>
        {unreadCount > 0 && (
          <Button variant='ghost' size='sm' onClick={() => markAllAsRead()}>
            Mark all as read
          </Button>
        )}
      </header>
      <main>
        <div className='max-h-96 overflow-y-auto'>
          {notifications.length === 0 ? (
            <div className='p-4 text-center text-muted-foreground'>
              No notifications
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-1 ${
                  !notification.read
                    ? 'text-foreground bg-background/50 cursor-pointer'
                    : ''
                }`}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <div className='space-y-1 border-b border-foreground/10 py-2'>
                  <div className='flex items-center justify-between bg-card/50 text-primary-foreground'>
                    <p className='text-sm font-medium'>{notification.title}</p>
                    <span className='text-xs text-muted-foreground'>
                      {format(notification.timestamp, 'PP')}
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground text-pretty'>
                    {notification.message}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};
