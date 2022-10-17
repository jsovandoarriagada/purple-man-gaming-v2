import "./FormModal.css";

function FormModal({ openModal, createOrder }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__title">PLEASE, FILL IN ALL FIELDS</p>
        <form className="modal__form">
          <input type="text" id="name" placeholder="Your name" autoComplete="off" required></input>
          <input type="tel" id="phoneNumber" placeholder="Your phone number" autoComplete="off" required></input>
          <input type="email" id="email" placeholder="Your email" autoComplete="off" required></input>
          <input type="email" id="confirmEmail" placeholder="Confirm your email" autoComplete="off" required></input>
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
