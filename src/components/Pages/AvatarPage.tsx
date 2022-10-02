import React, { FC } from "react";
import IEmployees from "../../models/Employees";
import "../../style/styles.css";


const AvatarPage: FC<IEmployees> = (props: IEmployees) => {
  return (
    <>
      <img
        src={props.avatar}
        className="avatar"
        alt=".jpg"
      ></img>
    </>
  );
}
export default AvatarPage;