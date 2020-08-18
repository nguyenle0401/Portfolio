import React from "react";
import "../App.css";
import { Transition } from "react-spring/renderprops";
import { Carousel } from "react-bootstrap";

import Aboutme from "./Aboutme";

function Navbar() {
  const items = [
    { key: 1, text: "H" },
    { key: 2, text: "i" },
    { key: 3, text: "," },
    { key: 4, text: "c" },
    { key: 5, text: "a" },
    { key: 6, text: "l" },
    { key: 7, text: "l" },
    { key: 8, text: "\xa0 " },
    { key: 9, text: "m" },
    { key: 10, text: "e" },
    { key: 11, text: "\xa0" },
    { key: 12, text: "N" },
    { key: 13, text: "g" },
    { key: 14, text: "u" },
    { key: 15, text: "y" },
    { key: 16, text: "e" },
    { key: 17, text: "n" },
    { key: 18, text: "\xa0" },
    { key: 19, text: "L" },
    { key: 10, text: "e" },
  ];
  return (
    <div
      // data-spy="scroll"
      data-target="#pb-navbar"
      data-offset="200"
      class="color size-all"
    >
      <Carousel className="size-caro">
        {/* <Carousel.Item>
          <nav
            class="navbar navbar-expand-lg site-navbar navbar-light bg-light"
            id="pb-navbar"
          >
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarsExample09"
                aria-controls="navbarsExample09"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-md-center">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " href="#section-home">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#section-portfolio">
                      My Projects
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#section-about">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#section-contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </Carousel.Item> */}
        <Carousel.Item>
          <section className="my-name size-caro">
            <Transition
              config={{ tension: 10, friction: 2, precision: 0.1 }}
              items={items}
              unique={true}
              reset={true}
              keys={(item) => item.key}
              from={{ transform: "translate3d(0,-80px,0)" }}
              enter={{ transform: "translate3d(0,0px,0)" }}
              leave={{ transform: "translate3d(0,-80px,0)" }}
              trail={100}
            >
              {(item) => (props) => <div style={props}>{item.text}</div>}
            </Transition>
            <div></div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="site-section bg-2" id="section-about">
            <div class="container">
              <div class="row mb-5 align-items-center">
                <div class="col-lg-5 pl-lg-5">
                  <div class="section-heading">
                    <h2>
                      <strong>About Me</strong>
                    </h2>
                  </div>
                  <p>
                  "If you wish to reach the highest, begin at the lowest"
                  </p>
                  <p>
                   I'm Nguyen Le, innovation is my passion. With every line of code, I strive to make the web a beautiful place.
                  </p>
                </div>
                <div class="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                  <img src="/Images/me.jpg" alt="me" class="size-img" />
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="site-section size-caro bg-3" id="section-portfolio">
            <div class="container">
              <div class="row">
                <div class="section-heading text-center col-md-12">
                  <h2>
                    <strong>Portfolio</strong>
                  </h2>
                </div>
              </div>
              <div class="filters-content">
                <div class="row grid">
                  <div class="single-portfolio col-sm-4 all packaging">
                    <div class="relative">
                      <div class="thumb">
                        <a
                          href="https://amazing-lovelace-9275c8.netlify.app/"
                          target="_blank"
                        >
                          <img
                            class="image img-fluid"
                            src="/Images/Tictac.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div class="p-inner">
                      <h4>
                        <strong>Tic Tac Toe</strong>
                      </h4>
                    </div>
                  </div>
                  <div class="single-portfolio col-sm-4 all packaging">
                    <div class="relative">
                      <div class="thumb">
                        <a
                          href="https://trusting-archimedes-fc5270.netlify.app/"
                          target="_blank"
                        >
                          <img
                            class="image img-fluid"
                            src="/Images/Doremon.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div class="p-inner">
                      <h4>
                        <strong>Hungry Up</strong>
                      </h4>
                    </div>
                  </div>
                  <div class="single-portfolio col-sm-4 all packaging">
                    <div class="relative">
                      <div class="thumb">
                        <a
                          href="https://hardcore-wright-d0a0f5.netlify.app/"
                          target="_blank"
                        >
                          <img
                            class="image img-fluid"
                            src="/Images/Guessing.png"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div class="p-inner">
                      <h4>
                        <strong>Guessing Game</strong>
                      </h4>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
        <Carousel.Item>
          <section class="site-section bg-4" id="section-contact">
            <div class="container">
              <div class="row position-contact">
                <div class="col-md-12 mb-5">
                  <div class="section-heading text-center">
                    <h2>
                      <strong>Contact</strong>
                    </h2>
                  </div>
                </div>
                <div class="position-contact">
                  <ul class="site-contact-details">
                    <li>
                      <span class="text-uppercase">Email</span>
                      nle20959@gmail.com
                    </li>
                    <li>
                      <span class="text-uppercase">Phone</span>
                      +84 833 225 280
                    </li>
                    <li>
                      <span class="text-uppercase">Address</span>
                      Doan Van Bo <br />
                      Ho Chi Minh
                    </li>
                    <li>
                      <span class="text-uppercase">Github</span>
                    <a href ="https://github.com/nguyenle0401" target="_blank">https://github.com/nguyenle0401</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Navbar;
