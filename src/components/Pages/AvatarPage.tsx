import React, { FC } from "react";
import IEmployees from "../../models/Employees";
/* import NamePage from "../pages/NamePage";
import ProfileAvatar from "../pages/AvatarPage";
import EmailPage from "../pages/EmailPage"; */

const AvatarPage: FC<IEmployees> = (props: IEmployees) => {
  return (
    <>
      <img
        src={props.avatar}
        className="rounded-circle m-2 p-2"
        alt=".jpg"
      ></img>
    </>
  );
}
export default AvatarPage;