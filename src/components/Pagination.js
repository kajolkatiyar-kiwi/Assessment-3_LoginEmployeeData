import React from 'react'
import '../styles/Pagination.css'

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

}

export default Pagination