import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className="nav-wrapper light-blue lighten-1">
        <i className="large material-icons heading-icon">local_dining</i> HealthyBites
        <ul id="nav-mobile" className="right">
          <li>
            <i className="material-icons heading-icon">
              <small className="notification-badge">test</small> shopping_basket
            </i>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
