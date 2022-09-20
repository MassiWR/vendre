import React, { FC } from "react";
import IEmployees from "../../models/Employees";
import AvatarPage from "./AvatarPage";
import EmailPage from "./EmailPage";
import NamePage from "./NamePage";


const EmployeesPage: FC<IEmployees> = (props: IEmployees) => {
  return (
    <div className="flex-col w-auto justify-content-center mb-4">
      <div
        className="text-center rounded mt-2 p-2 w-auto"
        style={{ backgroundColor: "#ddd"}}
      >
        <AvatarPage avatar={props.avatar} id={props.id}  />
        <NamePage first_name={props.first_name} last_name={props.last_name} id={props.id}/>
        <EmailPage email={props.email} id={props.id} /> 
      </div>
    </div>
  );
}
export default EmployeesPage;
