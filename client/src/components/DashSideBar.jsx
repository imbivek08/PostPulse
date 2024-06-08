import { Sidebar } from "flowbite-react";
import { HiDocumentText, HiUser } from "react-icons/hi";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export default function DashSideBar() {
  const { currentUser } = useSelector((state) => state.user);
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
    <div className="">
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Link to={"/dashboard?tab=profile"}>
              <Sidebar.Item
                active={tab === "profile"}
                icon={HiUser}
                label="User"
                as="div"
              >
                Profile
              </Sidebar.Item>
            </Link>
            {currentUser.isAdmin && (
              <Link to="/dashboard?tab=posts">
                <Sidebar.Item
                  active={tab === "posts"}
                  icon={HiDocumentText}
                  as="div"
                >
                  Posts
                </Sidebar.Item>
              </Link>
            )}
            <Sidebar.Item icon={FaSignOutAlt}>SignOut</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
