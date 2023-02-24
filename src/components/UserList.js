
import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../styles/UserList.css'
import Navbar from './Navbar'
import Pagination from './Pagination'
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import records from '../records.json'

const UserList = () => {
    const [details, setDetails] = useState([]);
    const [order, setOrder] = useState("ASC");
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);

    // const dispatch = useDispatch()
    const getData = ()=> {
        axios.get('https://63dcf998df83d549ce97a7ea.mockapi.io/empD')
        .then((res) => {
            setDetails(res.data);
            // dispatch({payload: res.data})
        })
    }

    useEffect(()=>{
        getData();
    },[])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentList = details.slice(firstPostIndex, lastPostIndex);


    const handleDelete = (id) =>{
        axios.delete(`https://63dcf998df83d549ce97a7ea.mockapi.io/empD/${id}`)
        .then(()=>{
          getData();
        })
    }

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
            <Navbar details={details} handleDelete={handleDelete} getData={getData} />
            <Link to="/addItem">
                            <button className='add'><i className='fa fa-plus add-btn' title='Add Item'></i></button>
                            </Link>
            <Table className="table table-striped table-style">
                <thead>
                    <tr>
                        {/* <th>S.NO.</th> */}
                        <th>EMPLOYEE-AVATAR</th>
                        <th
                            onClick={() => sorting("name")}
                            title={"Click to sort"} style={{cursor:"pointer"}}>EMPLOYEE-NAME</th>
                        <th>E-MAIL</th>
                        {/* <th>DATE-OF-JOINING</th> */}
                        <th>CONTACT</th>
                        <th>ACTIONS
                            
                            </th>
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
                                <td>
                                    <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={()=> handleDelete(detail.id)}></i></td>
                            </tr>
                        })}
                </tbody>
            </Table>
            <Pagination style={{position:'fixed'}} totalPost={details.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default UserList