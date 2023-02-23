import React, { useState } from 'react';
import data from '../records.json'
import '../styles/Navbar.css'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [tableData, setTableData] = useState([]);

  const handleButtonClick = () => {
    // Fetch 10 objects and sort them by the 'id' property
    const sortedData = data.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 10);
    setTableData(sortedData);
    setIsOpen(!isOpen);
  };

  const handleSeeAllClick = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className='navbar'>
        <h2>EMPLOYEE-DATA</h2>
        <button onClick={handleButtonClick}>
          {/* <i class="fa-solid fa-bars"></i> */}
          <i className="bi bi-person-lines-fill icon"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
          </svg>
        </button>
      </nav>


      {isOpen && (
        <><div className='drop-down'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Employee Avatar</th>
                <th>Employee Name</th>
                <th><i className='fa fa-plus add-btn' title='Add Item'></i></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <img src={item.avatar} alt="employeeLogo" className="empLogo" />
                  <td>{item.name}</td>
                  <td><i className='far fa-trash-alt add-btn' title='Delete Item'></i></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSeeAllClick} className='btn'>See All</button>
        </div>
          <div className='table-bg'></div>
        </>
      )}
    </div>
  );
}

export default App;