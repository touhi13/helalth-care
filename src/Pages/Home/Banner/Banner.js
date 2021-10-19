import React from 'react';
import BannerImg from '../../../Images/image1.jpg'

const Banner = () => {
    return (
        <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src={BannerImg} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Protected Together with Vaccine</h1>
            <p class="lead">The global pandemic requires a global response based on unity immunities</p>
          </div>
        </div>
      </div>
    );
};

export default Banner;