import React from "react";
import PageHeading from '../Common Components/PageHeading/PageHeading'

import ErrorLogo from "../../Assets/Logos Img/error.webp";

import './ErrorPage.css'

function ErrorPage() {
  return (
    <section className="mx-auto">
      
      <div className="Error-Head">
          <PageHeading pageTitle='Error' goBackLink='Home' />
      </div>

      <div className="Error-Body py-20">

        <div className="Error-Logo">
          <img src={ErrorLogo} alt="Error-img" className="block mx-auto object-contain" />
        </div>

        <div className="Error-heading text-center ">

          <h1 className="font-bold">404. Page not found</h1>

          <p className="mb-10">
            Sorry, we couldn’t find the page you where looking for. We suggest
            that <br /> you return to homepage.
          </p>

          <button className="Back-HomeBtn transition-all flex items-center justify-evenly mx-auto">
            <i className="fa-solid fa-arrow-left-long"></i>
            Back To Home
          </button>

        </div>
      </div>
    </section>
  );
}

export default ErrorPage;
