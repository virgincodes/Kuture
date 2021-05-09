import React from "react";
import styled from "styled-components";
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import Instagram from "./images/instagram.svg";
import Copyright from "./images/kulture_copy.svg";

const FooterDiv = styled.div`
  background: #3f3d56;
  margin-top: 3rem;
  color: #fff;
  @media (min-width: 300px) and (max-width: 600px) {
    .body_footer {
      display: flex;
      width: 95%;
      margin: auto;
      padding-top: 2rem;
    }
    footer {
      padding-bottom: 1rem;
    }
    p {
      font-size: 13px;
    }
    .first_div {
      width: 40%;
    }
    .second_div {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -1.72rem;
    }
    .second_div a {
      padding-right: 0.5rem;
    }
    .copyright {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
  @media (min-width: 600px) and (max-width: 960px) {
    .body_footer {
      display: flex;
      width: 95%;
      margin: auto;
      padding-top: 2rem;
    }
    footer {
      padding-bottom: 1rem;
    }
    p {
      font-size: 13px;
    }
    .first_div {
      width: 40%;
    }
    .second_div {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -1.72rem;
    }
    .second_div a {
      padding-right: 0.5rem;
    }
    .copyright {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
  @media (min-width: 960px) {
    .body_footer {
      display: flex;
      width: 95%;
      margin: auto;
      padding-top: 2rem;
    }
    footer {
      padding-bottom: 1rem;
    }
    p {
      font-size: 13px;
    }
    .first_div {
      width: 40%;
    }
    .second_div {
      width: 60%;
      margin-left: auto;
      margin-right: auto;
      margin-top: -1.72rem;
    }
    .second_div a {
      padding-right: 0.5rem;
    }
    .copyright {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
    h6 {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterDiv>
      <footer>
        <div className="body_footer">
          <div className="first_div">
            <p>Contact us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>T&C</p>
          </div>
          <div className="second_div">
            <h6>Follow us on social media</h6>
            <a href="facebook.com/kulturefresh">
              <img src={Facebook} alt="facebook" />
            </a>
            <a href="twitter.com/kulturefresh">
              <img src={Twitter} alt="twitter" />
            </a>
            <a href="instagram.com">
              <img src={Instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <img src={Copyright} alt="copyright" className="copyright" />
      </footer>
    </FooterDiv>
  );
}