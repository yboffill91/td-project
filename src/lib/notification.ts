import { toast } from '@/components/ui/hooks';
import { useNotificationStore, NotificationType } from '@/store';

interface NotifyOptions {
  title: string;
  message: string;
  type: NotificationType;
  persistent?: boolean;
}

export const notify = ({
  title,
  message,
  type,
  persistent = false,
}: NotifyOptions) => {
  // Show toast notification
  toast({
    title,
    description: message,
    variant: type === 'error' ? 'destructive' : 'default',
  });

  // If persistent, add to notification store
  if (persistent) {
    useNotificationStore.getState().addNotification({
      title,
      message,
      type,
      persistent,
    });
  }
};
