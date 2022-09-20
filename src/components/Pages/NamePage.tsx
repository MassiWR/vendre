import React, { FC } from "react";
import IEmployees from "../../models/Employees";


const EmailPage: FC<IEmployees> = (props: IEmployees) => {
    return (
        <>
         <p className="mt-1 text-dark">
        {props.first_name} {props.last_name}
      </p>
        </>
    )
}

export default EmailPage;