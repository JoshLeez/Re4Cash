const RatingCard = () => {
  return (
    <section className="rating-wrapper">
      <div className="rating-ulasan-progressbar">
        <div className="left-side-rating">
          <h5>Rating dan Ulasan</h5>
          <h1>5,0</h1>
          <div className="star-rate-detail">
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
            <iconify-icon icon="typcn:star" />
          </div>
        </div>
        <div className="right-side-rating">
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>5</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>4</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>3</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>2</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
          <div className="wrapper-progressbar">
            <iconify-icon icon="typcn:star" />
            <p>1</p>
            <div className="progressbar-grey">
              <div className="progressbar-green" />
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  );
};

export default RatingCard;
