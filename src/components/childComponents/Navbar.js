import React, { useState } from 'react';
import data from '../../records.json';
import '../cssFiles/Navbar.css'

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
        <h1>Employee Data</h1>
        <button onClick={handleButtonClick}>
            <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
      {isOpen && (
        <><div className='drop-down'>
                  <table>
                      <thead>
                          <tr>
                              <th>ID</th>
                              <th>Employee Avatar</th>
                              <th>Emloyee Name</th>
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
                  <button onClick={handleSeeAllClick}>See All</button>
              </div>
              <div className='table-bg'></div>
            </>
      )}
    </div>
  );
}

export default App;