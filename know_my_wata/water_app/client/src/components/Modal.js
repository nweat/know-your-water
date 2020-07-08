import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize';

const Modal = ({ message }) => {
  useEffect(() => {
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal, {});
  }, []);

  return (
    <div id="modal1" className="modal bottom-sheet">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>{message}</p>
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
