import { create } from 'zustand';
import type { AlertType } from '@/components/ui';

interface AlertState {
  isOpen: boolean;
  type: AlertType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  showAlert: (params: ShowAlertParams) => void;
  closeAlert: () => void;
}

interface ShowAlertParams {
  type?: AlertType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
}

export const useAlert = create<AlertState>((set) => ({
  isOpen: false,
  type: 'info',
  title: '',
  message: '',
  confirmText: '',
  cancelText: '',
  onConfirm: undefined,
  showAlert: (params) => set({ isOpen: true, ...params }),
  closeAlert: () => set({ isOpen: false }),
}));
