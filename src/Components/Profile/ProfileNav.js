import React, { useEffect } from "react";

export default function ProfileNav({ active }) {
  useEffect(() => {
    console.log(active);
  }, [active]);
  return (
    <div className="profileNav">
      <div className="profileNavHeader">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/860/860790.png"
            alt=""
          />
        </div>
        <div>Home</div>
      </div>
      <div className="personalSettings">
        <div className="personalSettingsHeader">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
              alt=""
            />
          </div>
          <div>Personal</div>
        </div>
        <div className="personalSettingsContent">
          <div className={active === "edit" ? "active" : ""}>Edit profile</div>
          <div>Help & Support</div>
        </div>
      </div>
    </div>
  );
}
