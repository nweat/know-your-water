import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';
import Filter from './Filter';

const NavContainer = () => {
  useEffect(() => {
    let collapsible = document.querySelectorAll('.collapsible');
    let sidenav = document.querySelectorAll('.sidenav');
    M.Collapsible.init(collapsible, {});
    M.Sidenav.init(sidenav, {});
    /*nv.addEventListener("click", function () {
            let elem = document.querySelector(".sidenav");
            let instance = M.Sidenav.getInstance(elem);
            if (instance.isOpen) {
                console.log("Is open: I need to close it");
                instance.close();
            } else {
                console.log("Is closed: I need to open it");
                instance.open();
            }
        });*/
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
                <i className="material-icons">info_outline</i>Contaminants
              </div>
              <div className="collapsible-body"></div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">local_drink</i>Water Quality Standards
              </div>
              <div className="collapsible-body"></div>
            </li>
          </ul>
        </li>
        <li>
          <ul className="collapsible collapsible-accordion">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">info_outline</i>Data Sources
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