import React, { useState } from 'react';
import '../assets/css/LoanTracker.css'
import HomeNav from './HomeNav';
import Footer from './Footer';

const LoanTracker = () => {
  const [loanNumber, setLoanNumber] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Add your logic here to handle the search using the loanNumber state
    console.log(`Searching for loan number: ${loanNumber}`);
  };

  return (
    <>
    <HomeNav/>
    <div className="page-container">
      <div className="loan-tracker-container">
        <h1 className="tracker-header">Loan Tracker</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={loanNumber}
            onChange={(e) => setLoanNumber(e.target.value)}
            placeholder="Enter Loan Number"
            required
            className="loan-input"
            />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default LoanTracker;
