import { atom, selector } from "recoil"

// consolodating all notificaitons into a single atom

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: {
    network: 4,
    jobs: 6,
    messaging: 3,
    notifications: 3
  }
})



export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotification = get(notificationsAtom)
    return + allNotification.network + allNotification.jobs + allNotification.messaging + allNotification.notifications
  }
})