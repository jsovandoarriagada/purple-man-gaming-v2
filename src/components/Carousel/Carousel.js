import "./Carousel.css";

const Carousel = () => {
  return (
    <>
      <div className="main__carousel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
          data-interval="3000"
          data-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://i.ibb.co/Hxkdpwd/desktop-1.jpg"
                className="desktop-img w-100 h-100"
                alt="Tiny Tina's Wonderlands Carousel 1"
              />
              <img
                src="https://i.ibb.co/cYjj2xw/mobile-1.jpg"
                className="mobile-img w-100"
                alt="Tiny Tina's Wonderlands Carousel 1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.ibb.co/ZYftLQd/desktop-2.jpg"
                className="desktop-img w-100 h-100"
                alt="Tiny Tina's Wonderlands Carousel 2"
              />
              <img
                src="https://i.ibb.co/bs3vHq9/mobile-2.jpg"
                className="mobile-img w-100"
                alt="Tiny Tina's Wonderlands Carousel 2"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="carousel__bar">
        <div className="bar">
          <img
            className="bar__img"
            src="https://i.ibb.co/N2mCJnb/c12a34983b37ecfd4778ebb5bd7809b4.png"
            alt="Tiny Tina's Wonderlands"
          />
          <div className="carousel__cost">
            <p className="carousel__discount">20%</p>
            <div className="carousel__price">
              <p className="carousel__price--base">$50 USD</p>
              <p className="carousel__price--final">$40 USD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
