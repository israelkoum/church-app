import React from 'react'
import five from '../img/tmp/thumbnails/5.jpg'
import six from '../img/tmp/thumbnails/6.jpg'
import four from '../img/tmp/thumbnails/4.jpg'
const CardEvents = () => {
    return (
        <div className="row">
                        <div className="col-sm-4">
                            <div className="block">
                                <div className="block-picture">
                                    <a href="#">
                                        <span className="block-picture-hover">
                                            <i className="fa fa-plus"></i>
                                        </span>

                                        <img src={five} alt="" />
                                    </a>
                                </div>  

                                <div className="block-body">
                                    <div className="block-meta">
                                        <i className="fa fa-calendar"></i> 03 January 2014 <span className="separator">|</span> <i className="fa fa-clock-o"></i> 09:30 am
                                    </div>

                                    <h3 className="block-title"><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing</a></h3>
                                
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="block">
                                <div className="block-picture">
                                    <a href="#">
                                        <span className="block-picture-hover">
                                            <i className="fa fa-plus"></i>
                                        </span>

                                        <img src={six} alt="" />
                                    </a>
                                </div>

                                <div className="block-body">
                                    <div className="block-meta">
                                        <i className="fa fa-calendar"></i> 03 January 2014 <span className="separator">|</span> <i className="fa fa-clock-o"></i> 09:30 am
                                    </div>

                                    <h3 className="block-title"><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing</a></h3>
                                
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                                </div>
                            </div>
                        </div>                      

                        <div className="col-sm-4">
                            <div className="block">
                                <div className="block-picture">
                                    <a href="#">
                                        <span className="block-picture-hover">
                                            <i className="fa fa-plus"></i>
                                        </span>

                                        <img src={four} alt="" />
                                    </a>
                                </div>

                                <div className="block-body">
                                    <div className="block-meta">
                                        <i className="fa fa-calendar"></i> 03 January 2014 <span className="separator">|</span> <i className="fa fa-clock-o"></i> 09:30 am
                                    </div>

                                    <h3 className="block-title"><a href="#">Lorem ipsum dolor sit amet, consectetuer adipiscing</a></h3>
                                
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
                                </div>
                            </div>
                        </div>                                              
                    </div>
    )
}

export default CardEvents