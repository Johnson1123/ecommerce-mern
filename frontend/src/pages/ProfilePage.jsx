import React, { useState } from "react";
import styles from "../styles/styles";
import ProfileSidebar from "../components/profile/ProfileSidebar.jsx";
import ProfileContent from "../components/profile/ProfileContent.jsx";

function ProfilePage() {
  const [active, setActive] = useState(1);
  return (
    <div className={`${styles.section} bg-[#f5f5f5] flex py-10`}>
      <div className="w-[50px] 800px:w-[335px] sticky mt-[18%] 800px:mt-0">
        <ProfileSidebar active={active} setActive={setActive} />
      </div>
      <ProfileContent active={active} />
    </div>
  );
}

export default ProfilePage;
