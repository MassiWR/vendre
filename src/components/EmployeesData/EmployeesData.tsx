import React, { useEffect, useState, FC } from "react";
import ApiData from "../../services/ApiData";
import EmployeesPage from "./EmployeesPage";

const UserData: FC = () => {

    const [users, setUser] = useState<any[]>([])
    
    const getUsers = (): void => {
        const data = ApiData.loadApiData();
        data.then((res: any) => {
            setUser(res.data.data);
        });
    }

    useEffect(() => {
        getUsers();
    }, [])


    return(
        <div>
      <div className="container">
        <div className="row">
          {users?.map((user) => {
            return (
              <EmployeesPage
                key={user.id}
                id={user.id}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
              ></EmployeesPage>
            );
          })}
        </div>
      </div>
      </div>
    )


}

export default UserData;