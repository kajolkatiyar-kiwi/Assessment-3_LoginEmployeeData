import React, { useState } from 'react'
import { useEffect } from 'react'
// import axios from 'axios'
import { Table } from 'react-bootstrap';
import './cssFiles/UserList.css'
import Navbar from './childComponents/Navbar';
import Pagination from './childComponents/Pagination';


const UserList = () => {

    const [details, setDetails] = useState([]);
    const [order, setOrder] = useState("ASC");

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);


    const getData = () => {
        fetch('records.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            // console.log(data[0].avatar);
            setDetails(data);
        })
    }

    useEffect(() => {
        getData();
    }, [])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentList = details.slice(firstPostIndex, lastPostIndex);

    // setCurrentPage(currentPage)



    // useEffect(() => {
    //     axios
    //         .get("myreco.json")
    //         .then((response) => {
    //             // setDetails(response.data);
    //             console.log(response.data);
    //         })
    // }, []);


    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...details].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setDetails(sorted);
            setOrder("DESC");
        }

        if (order === "DESC") {
            const sorted = [...details].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setDetails(sorted);
            setOrder("ASC");
        }

    }

    return (
        <div>
            <Navbar />
            <Table className="table table-striped table-style">
                <thead>
                    <tr>
                        {/* <th>S.NO.</th> */}
                        <th>EMPLOYEE-AVATAR</th>
                        <th
                            onClick={() => sorting("name")}
                            title={"Click to sort"}>EMPLOYEE-NAME</th>
                        <th>E-MAIL</th>
                        {/* <th>DATE-OF-JOINING</th> */}
                        <th>CONTACT</th>
                        <th><i className='fa fa-plus add-btn' title='Add Item'></i></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentList.map((detail, i) => {
                            // let date = new Date(detail["doJ"]);
                            return <tr key={i}>
                                {/* <td>{detail["id"]}</td> */}
                                <td>
                                    <img src={detail.avatar} alt="employeeLogo" className="empLogo" />
                                </td>
                                <td>{detail["name"]}</td>
                                <td>{detail["email"]}</td>
                                {/* <td>{date.toLocaleDateString()}</td> */}
                                <td>{detail["contact"]}</td>
                                <td><i className='far fa-trash-alt add-btn' title='Delete Item'></i></td>
                            </tr>
                        })}
                </tbody>
            </Table>
            <Pagination style={{position:'fixed'}} totalPost={details.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default UserList
