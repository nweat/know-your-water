import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';
import Filter from './Filter';

const NavContainer = () => {
  useEffect(() => {
    let collapsible = document.querySelectorAll('.collapsible');
    let sidenav = document.querySelectorAll('.sidenav');
    M.Collapsible.init(collapsible, {});
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div>
      <ul id="slide-out" className="sidenav sidenav-fixed">
        <li>
          <img src="logo.png" id="logo" alt="logo" />
        </li>
        <li>
          <Filter />
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">info</i>How can I help?
              </div>
              <div className="collapsible-body"></div>
            </li>
          </ul>
        </li>
      </ul>
      {/* <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>*/}
    </div>
  );
};

export default NavContainer;
