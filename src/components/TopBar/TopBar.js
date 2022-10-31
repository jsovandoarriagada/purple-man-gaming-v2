import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="top__container">
        <figure className="top__figure top__figure--official">
          <img src="https://i.ibb.co/c2k1zVZ/hands.png" alt="OFFICIAL RETAILER" />
          <div className="top__text">
            <h3 className="top__h3">
              OFFICIAL <span>RETAILER</span>
            </h3>
            <p className="top__p">Games comes from publishers</p>
          </div>
        </figure>
        <figure className="top__figure top__figure--confidence">
          <img src="https://i.ibb.co/VCwYfsQ/thumb.png" alt="SHOP WITH CONFIDENCE" />
          <div className="top__text">
            <h3 className="top__h3">
              SHOP WITH <span>CONFIDENCE</span>
            </h3>
            <p className="top__p">Fast & free electronic delivery</p>
          </div>
        </figure>
        <figure className="top__figure top__figure--ecologi">
          <img src="https://i.ibb.co/6JBz03p/tree.png" alt="ECOLOGI PARTNER" />
          <div className="top__text">
            <h3 className="top__h3">
              ECOLOGI <span>PARTNER</span>
            </h3>
            <p className="top__p">Reducing C02 by planting trees</p>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default TopBar;
