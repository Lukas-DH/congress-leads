import React from 'react';
import LeadForm from './LeadForm';
import './styles.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="caring-logo.png" alt="Company Logo" />
        <h1>Welcome to FFER</h1>
        <p>Learn more about our products and sign up to receive updates!</p>
      </header>
      <main>
        <LeadForm />
      </main>
      <footer className="App-footer">
        <p>Powered by OpenIVF</p>
      </footer>
    </div>
  );
}

export default App;
