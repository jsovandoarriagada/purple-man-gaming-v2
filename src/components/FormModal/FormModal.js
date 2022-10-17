import "./FormModal.css";

function FormModal({ openModal, createOrder }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__title">BILLING INFORMATION</p>
        <form className="modal__form">
          <input type="text" id="name" placeholder="NAME" autoComplete="off"></input>
          <input type="tel" id="phoneNumber" placeholder="PHONE NUMBER" autoComplete="off"></input>
          <input type="email" id="email" placeholder="EMAIL" autoComplete="off"></input>
          <input type="email" id="confirmEmail" placeholder="CONFIRM EMAIL" autoComplete="off"></input>
        </form>
        <div className="modal__buttons">
          <button className="modal__proceed" onClick={createOrder}>
            PROCEED
          </button>
          <button
            className="modal__cancel"
            onClick={() => {
              openModal(false);
            }}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormModal;
