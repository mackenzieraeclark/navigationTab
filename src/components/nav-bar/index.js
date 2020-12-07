import React, {Component} from "react";
import "./index.css";

import PropTypes from "prop-types";

export default class NavBar extends Component {
  state = {}

  render() {
    const { activeTab, tabHandler, tabs } = this.props;

    return (
      // first wrap the the component with styling
      // *** I changed some of the original HackerRank styling to allow for better spacing of the navigation bar
      <div className="layout-column justify-content-center align-items-center">
      <div className="layout-row justify-content-around align-items-center mt-20 links"
           data-testid="navigation-tabs">
             {/* inside of this parent container we run a MAP of the tab props (an object array with two key values: label and value) */}
             {/* the label will be returned by the map in a child div */}
             {tabs.map(({ label, value }) => (
               <div className="card w-20 ma-15">
                <section className="card-text" data-testid="tab-content">
                  <span 
                  // pass the value using the tabHandler which acts as our function
                  // the activeTab prop will show the currently active tab in the NavBar component (using a className)
                  className={`tab ${value === activeTab ? 'selected-tab' : ''}`}
                  // the onClick will pass this value to show the active tab 
                  onClick={() => { tabHandler(value); }}
                  >{label}</span>
                </section>
             </div>
             ))}
      </div>
    </div>
  );
  }
}

// use the compenent to manage the tabs using prop-types
NavBar.propTypes = {
  activeTab: PropTypes.number.isRequired,
  tabHandler: PropTypes.func.isRequired,
  tab: PropTypes.arrayOf(Object).isRequired,
};