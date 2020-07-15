import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';

const Modal = ({ modal, header, message }) => {
  useEffect(() => {
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal, {});
  }, []);

  return (
    <div id={modal} className="modal">
      <div className="modal-content">
        <h4 style={{ textTransform: 'uppercase' }}>{header}</h4>
        <p>{message}</p>

        <div className="chip">
          Data Source:
          <a href="https://wq.epa.gov.tw/Code/Business/Standard.aspx?Languages=en" target="__blank">
            {' '}
            Environmental Protection Administration
          </a>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#" className="modal-close waves-effect waves-blue btn-flat">
          Close
        </a>
      </div>
    </div>
  );
};

export default Modal;
