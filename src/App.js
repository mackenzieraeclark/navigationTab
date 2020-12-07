import React, {useState}  from 'react';
import './App.css';
import NavBar from './components/nav-bar/index.js';
import 'h8k-components';

const title = "Navigation Bar";

// create an array of tabs each with two key values that will show the title of the tab and its respective content
const TABS = [
  { label: "Home", value: "HOME PAGE" },
  { label: "News", value: "NEWS PAGE" },
  { label: "Contact", value: "CONTACT PAGE" },
  { label: "About", value: "ABOUT PAGE" }
];

function App() {
  // use hooks to manage the activeTab prop
  const [ activeTab, tabHandler ] = useState("HOME PAGE");
  return (
    <div>
      <h8k-navbar header={title} />
      <NavBar tabs={TABS} activeTab={activeTab} tabHandler={tabHandler} />
      <div className="layout-column justify-content-center align-items-center">
        <div className="card w-20 ma-20">
          {" "}
          <section className="card-text" data-testid="tab-content">
            {/* here we use the activeTab to render the appropriate content for the chosen tab */}
            <span>{activeTab}</span>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;