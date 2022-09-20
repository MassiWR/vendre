import React, { FC } from "react";
import IEmployees from "../../models/Employees";

const AvatarPage: FC<IEmployees> = (props: IEmployees) => {
  return (
    <>
      <img
        src={props.avatar}
        className="rounded-circle p-2 max-width"
        alt=".jpg"
      ></img>
    </>
  );
}
export default AvatarPage;