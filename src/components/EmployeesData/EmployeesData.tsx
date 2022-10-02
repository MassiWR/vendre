import React, { useEffect, useState, FC } from "react";
import ReactPaginate from "react-paginate";
import ApiData from "../../services/ApiData";
import EmployeesPage from "../Pages/EmployeesPage";
import "../../style/styles.css";


const UserData: FC = () => {

  const [users, setUser] = useState<any[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
    
  const getUsers = (): void => {
      const data = ApiData.loadApiData();
        data.then((res: any) => {
            setUser(res.data.data);
            setPageCount(res.data.total_pages);
        });
    }

  const getNextPageData = (page: number):void => {
    const data = ApiData.getNextPageData(page);
    data.then((res:any) => {
      setUser(res.data.data);
    });
  };

  const handlePageChange = (page:any):void => {
    getNextPageData(page.selected + 1);
  };

  useEffect(() => {
      getUsers();        
  }, [pageCount]);

  return(
    <div>
      <div className="userContainer mb-4">
         {users?.map((user, i) => {
            return (
              <EmployeesPage
                key={i}
                id={user.id}
                email={user.email}
                first_name={user.first_name}
                last_name={user.last_name}
                avatar={user.avatar}
              ></EmployeesPage>
            );
          })}
        </div>
        <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"} 
        pageLinkClassName={"page-link"}
        previousLabel={"<"}
        nextLabel={">"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-link"}
        activeClassName={"active"}
        
      ></ReactPaginate>
      </div>
  )
}

export default UserData;