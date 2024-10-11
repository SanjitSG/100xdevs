import axios from "axios";
import { atom, selector } from "recoil";

// Async data queries
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get("http://192.168.31.162:3000/");
      console.log(res.data.notifications);

      return res.data.notifications;
    },
  }),
});


// Selector to calculate total notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const notifications = get(notificationsAtom);
    return (
      notifications.network +
      notifications.jobs +
      notifications.messages +
      notifications.notifications
    );
  },
});
