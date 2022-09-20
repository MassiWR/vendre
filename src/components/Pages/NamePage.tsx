import React, { FC } from "react";
import IEmployees from "../../models/Employees";


const EmailPage: FC<IEmployees> = (props: IEmployees) => {
    return (
        <>
         <p className="d-flex align-items-center justify-content-start mt-1 text-dark">
        {props.first_name} {props.last_name}
      </p>
        </>
    )
}

export default EmailPage;