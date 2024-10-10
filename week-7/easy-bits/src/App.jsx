import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { notificationsAtom, totalNotificationSelector } from "./atoms";


const App = () => {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>;
};

function MainApp() {

  const { network, jobs, messaging, notifications } = useRecoilValue(notificationsAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return <div style={{
    padding: 10,
    display: "flex",
    gap: 5
  }}>
    <button type="button">My Network ({network >= 100 ? "99+" : network})</button>
    <button type="button">Jobs ({jobs})</button>
    <button type="button">Messaging ({messaging})</button>
    <button type="button">Notification ({notifications})</button>
    <button type="button">Me ({totalNotificationCount})</button>
  </div>
}
export default App;
