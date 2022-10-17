import "./FormModal.css";

function FormModal({ userInfo, setModal, handleChange, handleProceed }) {
  const disabledButton = {
    textDecoration: "line-through",
    textDecorationColor: "#161618",
    textDecorationThickness: "2px",
  };

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
            value={userInfo.name}
            autoComplete="off"
            required
          ></input>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Your phone number"
            onChange={handleChange}
            value={userInfo.phoneNumber}
            autoComplete="off"
            required
          ></input>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            onChange={handleChange}
            value={userInfo.email}
            autoComplete="off"
            required
          ></input>
          <input
            type="email"
            id="confirmEmail"
            placeholder="Confirm your email"
            onChange={handleChange}
            value={userInfo.confirmEmail}
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
