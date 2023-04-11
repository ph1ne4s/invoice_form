import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="number" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" required />
        </div>
        <div className="form-group">
          <label className="group-label">Invoice Details</label>
          <div className="form-row">
            <div className="form-col">
              <label htmlFor="invoice-no">Invoice No.</label>
              <input type="text" id="invoice-no" name="invoice-no"  required />
            </div>
            <div className="form-col">
              <label htmlFor="rbi-purpose-code">RBI Purpose Code</label>
              <input type="text" id="rbi-purpose-code" name="rbi-purpose-code" required />
            </div>
            <div className="form-col">
              <label htmlFor="invoice-date">Invoice Date</label>
              <input type="date" id="invoice-date" name="invoice-date" required />
            </div>
            <div className="form-col">
              <label htmlFor="due-date">Due Date</label>
              <input type="date" id="due-date" name="due-date" required />
            </div>
          </div>
        </div>
        <button type="submit">Generate Invoice</button>
      </form>
    </div>
  );
}

export default App;
