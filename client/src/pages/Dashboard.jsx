import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParas = new URLSearchParams(location.search);
    const tabFromUrl = urlParas.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-56">
        <DashSideBar />
      </div>
      {tab === "profile" && <DashProfile />}
    </div>
  );
}
