import React, { useState } from 'react'
import '../cssFiles/Pagination.css'
// import ReactPaginate from 'react-paginate';



const Pagination = ({ totalPost, postPerPage, setCurrentPage }) => {
   
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pages.push(i);
    }
    return (
        <div className='pagination'>
            <div>
                {
                    pages.map((page, index) => {
                        return <button key={index} onClick={() => {
                            setCurrentPage(page);
                        }
                        } >{page}</button>
                    })
                }
            </div>
        </div>
    )













    //     const [currentPage, setCurrentPage] = useState(1);
    //     const [dataPerPage] = useState(10);

    //     const indexOfLastPost = currentPage * dataPerPage;
    //    const indexOfFirstPost = indexOfLastPost - dataPerPage;
    //    const currentList = details.slice(indexOfFirstPost, indexOfLastPost);

    //    const paginate = ({ selected }) => {
    //     setCurrentPage(selected + 1);
    //  };


    //     return (
    //                <ReactPaginate
    //                   onPageChange={paginate}
    //                   pageCount={Math.ceil(details.length / currentList)}
    //                   previousLabel={'Prev'}
    //                   nextLabel={'Next'}
    //                   containerClassName={'pagination'}
    //                   pageLinkClassName={'page-number'}
    //                   previousLinkClassName={'page-number'}
    //                   nextLinkClassName={'page-number'}
    //                   activeLinkClassName={'active'}
    //                />
    //     )





}

export default Pagination
