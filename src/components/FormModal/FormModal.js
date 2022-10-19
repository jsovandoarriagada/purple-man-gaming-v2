import "./FormModal.css";

function FormModal({ buyerInfo, setModal, handleChange, handleProceed }) {
  return (
    <div className="modal">
      <div className="modal__container">
        <p className="modal__title">PLEASE, FILL IN ALL FIELDS</p>
        <form className="modal__form">
          <input
            type="text"
            id="name"
            placeholder="Your name"
            onChange={handleChange}
            value={buyerInfo.name}
            autoComplete="off"
            required
          ></input>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Your phone number"
            onChange={handleChange}
            value={buyerInfo.phoneNumber}
            autoComplete="off"
            required
          ></input>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            onChange={handleChange}
            value={buyerInfo.email}
            autoComplete="off"
            required
          ></input>
          <input
            type="email"
            id="confirmEmail"
            placeholder="Confirm your email"
            onChange={handleChange}
            value={buyerInfo.confirmEmail}
            autoComplete="off"
            required
          ></input>
        </form>
        <div className="modal__buttons">
          <button className="modal__proceed" onClick={handleProceed}>
            PROCEED
          </button>
          <button
            className="modal__cancel"
            onClick={() => {
              setModal(false);
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
