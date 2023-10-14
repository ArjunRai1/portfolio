import React, { Component } from 'react';
import './portfolio.css';
export default class Porfolio extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of my projects.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className="columns portfolio-item">
                                          <div className="item-wrap">
                                            <a href="#modal-01">
                                              <div className="image-container">
                                                <img src={`${item.imgurl}`} className="item-img" />
                                              </div>
                                              <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                  <h5>{item.name}</h5>
                                                  <p>{item.description}</p>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                      );
                                      
                                })
                            }
                        </div>
                    </div>
                </div >
            </section >
        );
    }
}