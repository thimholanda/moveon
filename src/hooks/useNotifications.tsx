import { createContext, ReactNode, useContext, useState } from "react";

interface Notification {
  id: number;
  title: string;
}

interface NotificationsProviderProps {
  children: ReactNode;
}

interface NotificationsContextData {
  createNotification: (title: string) => void;
  removeNotification: (id: number) => void;
  notifications: Notification[];
  removeAllNotifications: () => void;
}

const NotificationsContext = createContext<NotificationsContextData>(
  {} as NotificationsContextData
);

export function NotificationsProvider({
  children,
}: NotificationsProviderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  function createNotification(title: string) {
    const notification: Notification = {
      id: notifications.length + 1,
      title,
    };
    setNotifications([...notifications, notification]);
  }

  function removeNotification(id: number) {
    const updatedNotifications = [...notifications];
    const notificationIndex = updatedNotifications.findIndex(
      (notification) => notification.id === id
    );
    updatedNotifications.splice(notificationIndex, 1);
    setNotifications(updatedNotifications);
  }

  function removeAllNotifications() {
    setNotifications([]);
  }

  return (
    <NotificationsContext.Provider
      value={{
        createNotification,
        removeNotification,
        notifications,
        removeAllNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
}

export function useNotifications() {
  return useContext(NotificationsContext);
}
