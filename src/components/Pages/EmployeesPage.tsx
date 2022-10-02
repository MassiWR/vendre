import React, { FC } from "react";
import IEmployees from "../../models/Employees";
import AvatarPage from "./AvatarPage";
import EmailPage from "./EmailPage";
import NamePage from "./NamePage";
import "../../style/styles.css";

const EmployeesPage: FC<IEmployees> = (props: IEmployees) => {
  return (
    <div className="cards">
        <AvatarPage avatar={props.avatar} id={props.id}  />
        <NamePage first_name={props.first_name} last_name={props.last_name} id={props.id}/>
        <EmailPage email={props.email} id={props.id} /> 
      </div>
  );
}
export default EmployeesPage;
