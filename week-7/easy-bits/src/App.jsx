import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notificationsAtom, totalNotificationSelector } from "./atoms";

const App = () => {
  return <RecoilRoot><MainApp /></RecoilRoot>;
};

function MainApp() {

  const [networkCount, setNetworkCount] = useRecoilState(notificationsAtom);
  const totalNotifications = useRecoilValue(totalNotificationSelector)
  return <>
    <button type="button">Home</button>
    <button type="button">My network ({networkCount.network})</button>
    <button type="button">Jobs ({networkCount.jobs})</button>
    <button type="button">Messages ({networkCount.messages})</button>
    <button type="button">Notifications ({networkCount.notifications})</button>

    <button type="button">Me ({totalNotifications})</button>
  </>
}
export default App;
