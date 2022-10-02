import React, { FC } from "react";
import IEmployees from "../../models/Employees";

const EmailPage: FC<IEmployees> = (props: IEmployees) => {
    return (
    <>
        <a
        href={"mailto:" + props.email}
        style={{ textDecoration: "none" }}
        className="text-dark mt-4">
        Contact
        </a>

    </>
    )
}

export default EmailPage;