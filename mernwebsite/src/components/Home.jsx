import React from 'react'
import { NavLink } from 'react-router-dom';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white ">
                Feel the fresh business persective
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                lasf sfjslk sdflskdj sifldsjfl isfldshfl
                ijkldvjljiosfdjflsdjfslkdjfs sdfdslfjs ajfldsjflksjdflkasjd
                skdjflsak.
              </p>
              <div className="buttons d-flex justify-content-center">
                <NavLink to='/about' className="btn btn-light me-4 rounded-pill py-2">
                  Get Quote
                </NavLink>
                <NavLink to='/services' className="btn btn-outline-light me-4 rounded-pill py-2">
                  Our Services
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services/>
    </div>
  );
}

export default Home