import React from 'react';
import { Link } from 'react-router-dom';
import Safe from "react-safe";
import {Helmet} from "react-helmet";

const Welcome =() => {
  return (
    <div>
      {/* Start main-content */}
      <div className="main-content">
        {/* Section: home */}
        <section id="home" className="divider layer-overlay overlay-dark-4 parallax" data-bg-img="http://placehold.it/1920x1280">
          <div className="display-table">
            <div className="display-table-cell">
              <div className="container pt-200 pb-200">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="tagline text-white font-64">
                      <span className="typed-text-carousel" data-speed={90} data-back_delay={500} data-loop="true">
                        <span>Welcome to Sian &#38; Morteza</span>
                        <span>Save a Child &#38; Sponsor a Child</span>
                        <span>Raise your helping hand</span>
                      </span>
                    </h1>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: home-boxes */}
        <section className="layer-overlay overlay-theme-colored-8" data-bg-img="http://placehold.it/1920x1280">
          <div className="container pt-0 pb-0">
            <div className="section-content">
              <div className="row" data-margin-top="-90px">
                <div className="col-sm-12 col-md-4">
                  <div className="icon-box p-40 iconbox-theme-colored bg-white border-1px text-center">
                    <a className="icon" href="#">
                      <i className="flaticon-charity-world-in-your-hands font-48 font-weight-100" />
                    </a>
                    <h4 className="text-uppercase mt-0">Expert Engineers</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="icon-box p-40 iconbox-theme-colored bg-white border-1px text-center">
                    <a className="icon" href="#">
                      <i className="flaticon-charity-shaking-hands-inside-a-heart font-48 font-weight-100" />
                    </a>
                    <h4 className="text-uppercase mt-0">Latest Tools</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <div className="icon-box p-40 iconbox-theme-colored bg-white border-1px text-center">
                    <a className="icon" href="#">
                      <i className="flaticon-charity-child-hand-on-adult-hand font-48 font-weight-100" />
                    </a>
                    <h4 className="text-uppercase mt-0">Quick Delivery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias non nulla placeat, odio, qui dicta alias.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: About */}
        <section id="about">
          <div className="container" alt="Donate">
            <div className="section-content" alt="Donate">
              <div className="row" alt="Donate">
                <div className="col-md-6 mt-20" alt="Donate">
                  <div className="row" alt="Donate">
                    <div className="col-md-6 col-sm-6 pl-0" alt="Donate">
                      <div className="img-hover-border mt-sm-40" alt="Donate">
                        <img className="img-fullwidth" src="http://placehold.it/275x335" alt="Donate" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 pl-0 pr-0">
                      <div className="img-hover-border mt-sm-30">
                        <img className="img-fullwidth" src="http://placehold.it/280x156" alt="Donate" />
                      </div>
                      <div className="img-hover-border mt-15 mt-sm-30">
                        <img className="img-fullwidth" src="http://placehold.it/325x176" alt="Donate" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-details">
                    <h2 className="font-36 mt-0"> Welcome to <span className="text-theme-colored">FundPro</span> Please Rise your Helping Hand</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, odioserunt provident maiores consectetur adipisicing elit. Aliquam odio dese runtesseu provident maiores libero porro dolorem est. Velit necessitatibus fugiat error incidunt excepturi doloribus officia aspernatur quod libero  Velit necessitatibus fugiat error incidunt excepturi doloribus officia</p>
                    <div className="singnature mt-20">
                      <img src="images/signature.png" alt="img1" />
                    </div>
                    <a href="#" className="btn btn-flat btn-colored btn-theme-colored mt-15 mr-15">Read More</a><a href="#" className="btn btn-flat btn-colored btn-default btn-theme-colored mt-15">Get a Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Causes */}
        <section id="causes" className="bg-silver-light">
          <div className="container">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="text-uppercase line-bottom-center mt-0">Our <span className="text-theme-colored font-weight-600">Causes</span></h2>
                  <div className="title-icon">
                    <i className="flaticon-charity-hand-holding-a-heart" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum dolor sit Rem autem voluptatem obcaecati</p>
                </div>
              </div>
            </div>
            <div className="row multi-row-clearfix">
              <div className="owl-carousel-3col">
                <div className="item">
                  <div className="causes bg-white maxwidth500 mb-30">
                    <div className="thumb">
                      <img src="http://placehold.it/320x240" alt="Donate" className="img-fullwidth" />
                    </div>
                    <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul className="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li className="pull-left font-weight-400 text-black-333 pr-0">Raised: <span className="text-theme-colored font-weight-700">$2860</span></li>
                        <li className="pull-right font-weight-400 text-black-333 pr-0">Goal: <span className="text-theme-colored font-weight-700">$5000</span></li>
                      </ul>
                      <h4 className="text-uppercase"><a href="page-single-cause.html">Education for Childreen</a></h4>
                      <div className="progress-item mt-0">
                        <div className="progress mb-0">
                          <div data-percent={84} className="progress-bar"><span className="percent">0</span></div>
                        </div>
                      </div>
                      <p className="mt-20">Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
                      <a href="page-donate.html" className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"><i className="flaticon-charity-make-a-donation font-16 ml-5" /> Donate <i className="flaticon-charity-make-a-donation font-16 ml-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="causes bg-white maxwidth500 mb-30">
                    <div className="thumb">
                      <img src="http://placehold.it/320x240" alt="Donate" className="img-fullwidth" />
                    </div>
                    <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul className="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li className="pull-left font-weight-400 text-black-333 pr-0">Raised: <span className="text-theme-colored font-weight-700">$2860</span></li>
                        <li className="pull-right font-weight-400 text-black-333 pr-0">Goal: <span className="text-theme-colored font-weight-700">$5000</span></li>
                      </ul>
                      <h4 className="text-uppercase"><a href="page-single-cause.html">Sponsor a child today</a></h4>
                      <div className="progress-item mt-0">
                        <div className="progress mb-0">
                          <div data-percent={84} className="progress-bar"><span className="percent">0</span></div>
                        </div>
                      </div>
                      <p className="mt-20">Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
                      <a href="page-donate.html" className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"><i className="flaticon-charity-make-a-donation font-16 ml-5" /> Donate <i className="flaticon-charity-make-a-donation font-16 ml-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="causes bg-white maxwidth500 mb-30">
                    <div className="thumb">
                      <img src="http://placehold.it/320x240" alt="Donate" className="img-fullwidth" />
                    </div>
                    <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul className="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li className="pull-left font-weight-400 text-black-333 pr-0">Raised: <span className="text-theme-colored font-weight-700">$2860</span></li>
                        <li className="pull-right font-weight-400 text-black-333 pr-0">Goal: <span className="text-theme-colored font-weight-700">$5000</span></li>
                      </ul>
                      <h4 className="text-uppercase"><a href="page-single-cause.html">Shelter for Poor Child</a></h4>
                      <div className="progress-item mt-0">
                        <div className="progress mb-0">
                          <div data-percent={84} className="progress-bar"><span className="percent">0</span></div>
                        </div>
                      </div>
                      <p className="mt-20">Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
                      <a href="page-donate.html" className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"><i className="flaticon-charity-make-a-donation font-16 ml-5" /> Donate <i className="flaticon-charity-make-a-donation font-16 ml-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="causes bg-white maxwidth500 mb-30">
                    <div className="thumb">
                      <img src="http://placehold.it/320x240" alt="Donate" className="img-fullwidth" />
                    </div>
                    <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul className="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li className="pull-left font-weight-400 text-black-333 pr-0">Raised: <span className="text-theme-colored font-weight-700">$2860</span></li>
                        <li className="pull-right font-weight-400 text-black-333 pr-0">Goal: <span className="text-theme-colored font-weight-700">$5000</span></li>
                      </ul>
                      <h4 className="text-uppercase"><a href="page-single-cause.html">Happiness for orphan child</a></h4>
                      <div className="progress-item mt-0">
                        <div className="progress mb-0">
                          <div data-percent={84} className="progress-bar"><span className="percent">0</span></div>
                        </div>
                      </div>
                      <p className="mt-20">Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
                      <a href="page-donate.html" className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"><i className="flaticon-charity-make-a-donation font-16 ml-5" /> Donate <i className="flaticon-charity-make-a-donation font-16 ml-5" /></a>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="causes bg-white maxwidth500 mb-30">
                    <div className="thumb">
                      <img src="http://placehold.it/320x240" alt="Donate" className="img-fullwidth" />
                    </div>
                    <div className="causes-details clearfix border-bottom p-15 pt-15 pb-15">
                      <ul className="list-inline font-20 font-weight-600 clearfix mb-5">
                        <li className="pull-left font-weight-400 text-black-333 pr-0">Raised: <span className="text-theme-colored font-weight-700">$2860</span></li>
                        <li className="pull-right font-weight-400 text-black-333 pr-0">Goal: <span className="text-theme-colored font-weight-700">$5000</span></li>
                      </ul>
                      <h4 className="text-uppercase"><a href="page-single-cause.html">Donation for helpless child</a></h4>
                      <div className="progress-item mt-0">
                        <div className="progress mb-0">
                          <div data-percent={84} className="progress-bar"><span className="percent">0</span></div>
                        </div>
                      </div>
                      <p className="mt-20">Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.Lorem ipsum dolor sit amet, consect adipisicing elit. Praesent quos sit.</p>
                      <a href="page-donate.html" className="btn btn-default btn-theme-colored btn-xs font-16 mt-10"><i className="flaticon-charity-make-a-donation font-16 ml-5" /> Donate <i className="flaticon-charity-make-a-donation font-16 ml-5" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider: Funfact */}
        <section className="divider parallax layer-overlay overlay-dark-9" data-bg-img="http://placehold.it/1920x1280" data-parallax-ratio="0.7">
          <div className="container pt-80 pb-80">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
                <div className="funfact text-center">
                  <i className="pe-7s-smile mt-5 text-white" />
                  <h2 data-animation-duration={2000} data-value={1054} className="animate-number text-white font-42 font-weight-500 mt-0 mb-0">0</h2>
                  <h5 className="text-white text-uppercase font-weight-600">Happy Donators</h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
                <div className="funfact text-center">
                  <i className="pe-7s-rocket mt-5 text-white" />
                  <h2 data-animation-duration={2000} data-value={875} className="animate-number text-white font-42 font-weight-500 mt-0 mb-0">0</h2>
                  <h5 className="text-white text-uppercase font-weight-600">Success Mission</h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
                <div className="funfact text-center">
                  <i className="pe-7s-add-user mt-5 text-white" />
                  <h2 data-animation-duration={2000} data-value={1248} className="animate-number text-white font-42 font-weight-500 mt-0 mb-0">0</h2>
                  <h5 className="text-white text-uppercase font-weight-600">Volunteer Reached</h5>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 mb-md-50">
                <div className="funfact text-center">
                  <i className="pe-7s-global mt-5 text-white" />
                  <h2 data-animation-duration={2000} data-value={54} className="animate-number text-white font-42 font-weight-500 mt-0 mb-0">0</h2>
                  <h5 className="text-white text-uppercase font-weight-600">Globalization Work</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Mission  */}
        <section>
          <div className="container pb-30">
            <div className="section-content">
              <div className="row">
                <div className="col-md-8 pb-sm-20">
                  <h3 className="line-bottom mt-0">Our Mission</h3>
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="icon-box left media bg-silver-light border-1px border-theme-colored p-15 mb-20"> <a className="media-left pull-left flip" href="#"><i className="flaticon-charity-shaking-hands-inside-a-heart text-theme-colored" /></a>
                        <div className="media-body">
                          <h4 className="font-15 text-uppercase">Save The children</h4>
                          <p>Lorem ipsum dolor sit ametcons ecte adipisicing eli cumconse teturs lorem ipsum dolor is emmit</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="icon-box left media bg-silver-light border-1px border-theme-colored p-15 mb-20"> <a className="media-left pull-left flip" href="#"><i className="flaticon-charity-shelter text-theme-colored" /></a>
                        <div className="media-body">
                          <h4 className="font-15 text-uppercase">Help The Helpless</h4>
                          <p>Lorem ipsum dolor sit ametcons ecte adipisicing eli cumconse teturs lorem ipsum dolor is emmit</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="icon-box left media bg-silver-light border-1px border-theme-colored p-15 mb-20"> <a className="media-left pull-left flip" href="#"><i className="flaticon-charity-responsible-use-of-water text-theme-colored" /></a>
                        <div className="media-body">
                          <h4 className="font-15 text-uppercase">Pure Water For Poor</h4>
                          <p>Lorem ipsum dolor sit ametcons ecte adipisicing eli cumconse teturs lorem ipsum dolor is emmit</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <div className="icon-box left media bg-silver-light border-1px border-theme-colored p-15 mb-20"> <a className="media-left pull-left flip" href="#"><i className="flaticon-charity-make-a-donation text-theme-colored" /></a>
                        <div className="media-body">
                          <h4 className="font-15 text-uppercase">Donation for poor</h4>
                          <p>Lorem ipsum dolor sit ametcons ecte adipisicing eli cumconse teturs lorem ipsum dolor is emmit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <h3 className="line-bottom border-bottom mt-0">Upcoming Events</h3>
                  <div className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15">
                    <div className="row">
                      <div className="col-xs-2 col-md-3 pr-0">
                        <div className="event-date text-center bg-theme-colored border-1px p-0 pt-10 pb-10 sm-custom-style">
                          <ul>
                            <li className="font-28 text-white font-weight-700">28</li>
                            <li className="font-18 text-white text-center text-uppercase">Feb</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-9 pr-10 pl-10">
                        <div className="event-content mt-10 p-5 pb-0 pt-0">
                          <h5 className="media-heading font-16 font-weight-600"><a href="#">Event: Help The Children</a></h5>
                          <ul className="list-inline font-weight-600 text-gray-dimgray">
                            <li><i className="fa fa-clock-o text-theme-colored" /> 5.00 pm - 7.30 pm</li>
                            <li> <i className="fa fa-map-marker text-theme-colored" /> 25 Newyork City.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event media sm-maxwidth400 border-bottom mt-5 mb-0 pt-10 pb-15">
                    <div className="row">
                      <div className="col-xs-2 col-md-3 pr-0">
                        <div className="event-date text-center bg-theme-colored border-1px p-0 pt-10 pb-10 sm-custom-style">
                          <ul>
                            <li className="font-28 text-white font-weight-700">26</li>
                            <li className="font-18 text-white text-center text-uppercase">OCT</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-9 pr-10 pl-10">
                        <div className="event-content mt-10 p-5 pb-0 pt-0">
                          <h5 className="media-heading font-16 font-weight-600"><a href="#">Event: Foods For Poor</a></h5>
                          <ul className="list-inline font-weight-600 text-gray-dimgray">
                            <li><i className="fa fa-clock-o text-theme-colored" /> 6.00 pm - 8.30 pm</li>
                            <li> <i className="fa fa-map-marker text-theme-colored" /> 25 Newyork City.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="event media sm-maxwidth400 mt-5 mb-0 pt-10 pb-15">
                    <div className="row">
                      <div className="col-xs-2 col-md-3 pr-0">
                        <div className="event-date text-center bg-theme-colored border-1px p-0 pt-10 pb-10 sm-custom-style">
                          <ul>
                            <li className="font-28 text-white font-weight-700">12</li>
                            <li className="font-18 text-white text-center text-uppercase">DEC</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-xs-9 pr-10 pl-10">
                        <div className="event-content mt-10 p-5 pb-0 pt-0">
                          <h5 className="media-heading font-16 font-weight-600"><a href="#">Event: Save The Water</a></h5>
                          <ul className="list-inline font-weight-600 text-gray-dimgray">
                            <li><i className="fa fa-clock-o text-theme-colored" /> 4.00 pm - 6.00 pm</li>
                            <li> <i className="fa fa-map-marker text-theme-colored" /> 25 Newyork City.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: volunteers */}
        <section id="team" className="bg-silver-light">
          <div className="container">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="text-uppercase line-bottom-center mt-0">Our <span className="text-theme-colored font-weight-600">volunteers</span></h2>
                  <div className="title-icon">
                    <i className="flaticon-charity-hand-holding-a-heart" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum dolor sit Rem autem voluptatem obcaecati</p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row multi-row-clearfix">
                <div className="col-xs-12 col-sm-6 col-md-4 mb-30">
                  <div className="team-member clearfix">
                    <div className="team-thumb">
                      <img alt="Donate" src="http://placehold.it/360x360" className="img-fullwidth" />
                      <div className="overlay">
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iste nihil ex libero ab esse, dignissimos maxime enim sint laborum.</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-info bg-theme-colored">
                      <h3 className="mt-0 text-white">Sakib Jacson</h3>
                      <ul className="styled-icons icon-circled icon-theme-colored">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 mb-30">
                  <div className="team-member clearfix">
                    <div className="team-thumb">
                      <img alt="Donate" src="http://placehold.it/360x360" className="img-fullwidth" />
                      <div className="overlay">
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iste nihil ex libero ab esse, dignissimos maxime enim sint laborum.</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-info bg-theme-colored">
                      <h3 className="mt-0 text-white">Jerin Jacson</h3>
                      <ul className="styled-icons icon-circled icon-theme-colored">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 mb-30">
                  <div className="team-member clearfix">
                    <div className="team-thumb">
                      <img alt="Donate" src="http://placehold.it/360x360" className="img-fullwidth" />
                      <div className="overlay">
                        <div className="content">
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea iste nihil ex libero ab esse, dignissimos maxime enim sint laborum.</p>
                        </div>
                      </div>
                    </div>
                    <div className="team-info bg-theme-colored">
                      <h3 className="mt-0 text-white">Alex Jacobson</h3>
                      <ul className="styled-icons icon-circled icon-theme-colored">
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* divider: Emergency Services */}
        <section className="divider parallax layer-overlay overlay-dark-9" data-stellar-background-ratio="0.2" data-bg-img="http://placehold.it/1920x1280">
          <div className="container">
            <div className="section-content text-center">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="mt-0 text-white">How you can help us</h2>
                  <h2 className="text-white">Just call at <span className="text-theme-colored">(01) 234 5678</span> to make a donation</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Become a Volunteer */}
        <section>
          <div className="container">
            <div className="section-content">
              <div className="row">
                <div className="col-md-6">
                  <h3 className="bg-theme-colored p-15 pl-30 mb-0 text-white">Become a Volunteer</h3>
                  <form id="volunteer_apply_form" className="bg-light p-30 pb-15" name="job_apply_form" action="includes/become-volunteer.php" method="post" encType="multipart/form-data">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form_name">Name <small>*</small></label>
                          <input id="form_name" name="form_name" type="text" placeholder="Enter Name" required className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form_email">Email <small>*</small></label>
                          <input id="form_email" name="form_email" className="form-control required email" type="email" placeholder="Enter Email" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form_sex">Sex <small>*</small></label>
                          <select id="form_sex" name="form_sex" className="form-control required">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label htmlFor="form_branch">Choose Branch <small>*</small></label>
                          <select id="form_branch" name="form_branch" className="form-control required">
                            <option value="UK">UK</option>
                            <option value="USA">USA</option>
                            <option value="Australia">Australia</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="form_message">Message <small>*</small></label>
                      <textarea id="form_message" name="form_message" className="form-control required" rows={3} placeholder="Your cover letter/message sent to the employer" defaultValue={""} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form_attachment">C/V Upload</label>
                      <input id="form_attachment" name="form_attachment" className="file" type="file" multiple data-show-upload="false" data-show-caption="true" />
                    </div>
                    <div className="form-group">
                      <input id="form_botcheck" name="form_botcheck" className="form-control" type="hidden" defaultValue />
                      <button type="submit" className="btn btn-block btn-dark btn-theme-colored btn-sm mt-20 pt-10 pb-10" data-loading-text="Please wait...">Apply Now</button>
                    </div>
                  </form>
                  {/* Job Form Validation*/}
                </div>
                <div className="col-md-6 sm-text-center mt-40">
                  <img className="hidden-sm hidden-xs" src="http://placehold.it/410x504" alt="Donate" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Testimonials */}
        <section className="divider parallax layer-overlay overlay-dark-9" data-bg-img="http://placehold.it/1920x844" data-parallax-ratio="0.7">
          <div className="container pt-60 pb-60">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <h2 className="text-white mt-0">Happy Donors Say</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="pt-20">
                  <div className="testimonial style1 owl-carousel-2col">
                    <div className="item">
                      <div className="comment border-radius-15px">
                        <p>Lorem ipsum dolor sit ametconse ctetur adipisicing elitvolup tatem error sit qui dolorem facilis. adipisicing elitvolup tatem error</p>
                      </div>
                      <div className="content mt-20">
                        <div className="thumb pull-right">
                          <img className="img-circle" alt="Donate" src="http://placehold.it/75x75" />
                        </div>
                        <div className="patient-details text-right pull-right mr-20 mt-10">
                          <h5 className="text-theme-colored">Jonathan Smith</h5>
                          <h6 className="title">kode inc.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="comment border-radius-15px">
                        <p>Lorem ipsum dolor sit ametconse ctetur adipisicing elitvolup tatem error sit qui dolorem facilis. adipisicing elitvolup tatem error</p>
                      </div>
                      <div className="content mt-20">
                        <div className="thumb pull-right">
                          <img className="img-circle" alt="Donate" src="http://placehold.it/75x75" />
                        </div>
                        <div className="patient-details text-right pull-right mr-20 mt-10">
                          <h5 className="text-theme-colored">Jonathan Smith</h5>
                          <h6 className="title">kode inc.</h6>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="comment border-radius-15px">
                        <p>Lorem ipsum dolor sit ametconse ctetur adipisicing elitvolup tatem error sit qui dolorem facilis. adipisicing elitvolup tatem error</p>
                      </div>
                      <div className="content mt-20">
                        <div className="thumb pull-right">
                          <img className="img-circle" alt="Donate" src="http://placehold.it/75x75" />
                        </div>
                        <div className="patient-details text-right pull-right mr-20 mt-10">
                          <h5 className="text-theme-colored">Jonathan Smith</h5>
                          <h6 className="title">kode inc.</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Gallery */}
        <section id="gallery" className="bg-silver-light">
          <div className="container">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="text-uppercase line-bottom-center mt-0">Photo <span className="text-theme-colored font-weight-600">Gallery</span></h2>
                  <div className="title-icon">
                    <i className="flaticon-charity-hand-holding-a-heart" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum dolor sit Rem autem voluptatem obcaecati</p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-md-12">
                  {/* Portfolio Gallery Grid */}
                  <div className="gallery-isotope grid-4 gutter-small clearfix" data-lightbox="gallery">
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg1.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg2.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg3.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg4.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg5.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg6.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg7.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg8.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg9.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg10.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg11.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                    {/* Portfolio Item Start */}
                    <div className="gallery-item">
                      <div className="thumb">
                        <img alt="project" src="http://placehold.it/285x195" className="img-fullwidth" />
                        <div className="overlay-shade" />
                        <div className="icons-holder">
                          <div className="icons-holder-inner">
                            <div className="styled-icons icon-sm icon-dark icon-circled icon-theme-colored">
                              <a href="images/gallery/gallery-lg12.jpg" data-lightbox-gallery="gallery"><i className="fa fa-picture-o" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Portfolio Item End */}
                  </div>
                  {/* End Portfolio Gallery Grid */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section: blog */}
        <section id="blog">
          <div className="container">
            <div className="section-title text-center">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <h2 className="text-uppercase line-bottom-center mt-0">Our <span className="text-theme-colored font-weight-600">Blog</span></h2>
                  <div className="title-icon">
                    <i className="flaticon-charity-hand-holding-a-heart" />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem voluptatem obcaecati! <br />ipsum dolor sit Rem autem voluptatem obcaecati</p>
                </div>
              </div>
            </div>
            <div className="section-content">
              <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <article className="post clearfix mb-sm-30 bg-silver-light">
                    <div className="entry-header">
                      <div className="post-thumb thumb">
                        <img src="http://placehold.it/360x245" alt="Donate" className="img-responsive img-fullwidth" />
                      </div>
                    </div>
                    <div className="bg-theme-colored p-5 text-center pt-10 pb-10">
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-share-alt mr-5 text-white" />24 Share</span>
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-commenting-o mr-5 text-white" /> 214 Comments</span>
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-heart-o mr-5 text-white" /> 895 Likes</span>
                    </div>
                    <div className="entry-content p-20 pr-10">
                      <div className="entry-meta media mt-0 no-bg no-border">
                        <div className="entry-date media-left text-center flip bg-theme-colored pt-5 pr-15 pb-5 pl-15">
                          <ul>
                            <li className="font-16 text-white font-weight-600 border-bottom">28</li>
                            <li className="font-12 text-white text-uppercase">Feb</li>
                          </ul>
                        </div>
                        <div className="media-body pl-15">
                          <div className="event-content pull-left flip">
                            <h4 className="entry-title text-white text-uppercase m-0 mt-5"><a href="#">This is a standard post with thumbnail</a></h4>
                          </div>
                        </div>
                      </div>
                      <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis deleniti, sint assumenda. Pariatur iste veritatis excepturi, ipsa optio nobis.</p>
                      <a href="#" className="btn btn-default btn-sm btn-theme-colored mt-10">Read more</a>
                    </div>
                  </article>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <article className="post clearfix mb-sm-30 bg-silver-light">
                    <div className="entry-header">
                      <div className="post-thumb thumb">
                        <img src="http://placehold.it/360x245" alt="Donate" className="img-responsive img-fullwidth" />
                      </div>
                    </div>
                    <div className="bg-theme-colored p-5 text-center pt-10 pb-10">
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-share-alt mr-5 text-white" />24 Share</span>
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-commenting-o mr-5 text-white" /> 214 Comments</span>
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-heart-o mr-5 text-white" /> 895 Likes</span>
                    </div>
                    <div className="entry-content p-20 pr-10">
                      <div className="entry-meta media mt-0 no-bg no-border">
                        <div className="entry-date media-left text-center flip bg-theme-colored pt-5 pr-15 pb-5 pl-15">
                          <ul>
                            <li className="font-16 text-white font-weight-600 border-bottom">28</li>
                            <li className="font-12 text-white text-uppercase">Feb</li>
                          </ul>
                        </div>
                        <div className="media-body pl-15">
                          <div className="event-content pull-left flip">
                            <h4 className="entry-title text-white text-uppercase m-0 mt-5"><a href="#">This is a standard post with thumbnail</a></h4>
                          </div>
                        </div>
                      </div>
                      <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis deleniti, sint assumenda. Pariatur iste veritatis excepturi, ipsa optio nobis.</p>
                      <a href="#" className="btn btn-default btn-sm btn-theme-colored mt-10">Read more</a>
                    </div>
                  </article>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                  <article className="post clearfix mb-sm-30 bg-silver-light">
                    <div className="entry-header">
                      <div className="post-thumb thumb">
                        <img src="http://placehold.it/360x245" alt="Donate" className="img-responsive img-fullwidth" />
                      </div>
                    </div>
                    <div className="bg-theme-colored p-5 text-center pt-10 pb-10">
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-share-alt mr-5 text-white" />24 Share</span>
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-commenting-o mr-5 text-white" /> 214 Comments</span>
                      <span className="mb-10 text-white mr-10 font-13"><i className="fa fa-heart-o mr-5 text-white" /> 895 Likes</span>
                    </div>
                    <div className="entry-content p-20 pr-10">
                      <div className="entry-meta media mt-0 no-bg no-border">
                        <div className="entry-date media-left text-center flip bg-theme-colored pt-5 pr-15 pb-5 pl-15">
                          <ul>
                            <li className="font-16 text-white font-weight-600 border-bottom">28</li>
                            <li className="font-12 text-white text-uppercase">Feb</li>
                          </ul>
                        </div>
                        <div className="media-body pl-15">
                          <div className="event-content pull-left flip">
                            <h4 className="entry-title text-white text-uppercase m-0 mt-5"><a href="#">This is a standard post with thumbnail</a></h4>
                          </div>
                        </div>
                      </div>
                      <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipisi cing elit. Molestias eius illum libero dolor nobis deleniti, sint assumenda. Pariatur iste veritatis excepturi, ipsa optio nobis.</p>
                      <a href="#" className="btn btn-default btn-sm btn-theme-colored mt-10">Read more</a>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Divider: Clients */}
        <section className="clients bg-theme-colored">
          <div className="container pt-0 pb-0">
            <div className="row">
              <div className="col-md-12">
                {/* Section: Clients */}
                <div className="owl-carousel-6col clients-logo transparent text-center">
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                  <div className="item"> <a href="#"><img src="http://placehold.it/200x120" alt="Donate" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* end main-content */}

    </div>

  );
};

export default Welcome;