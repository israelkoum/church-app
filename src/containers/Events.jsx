import React from 'react'
import CardEvents from '../components/CardEvents'


const Events = () => {
    return (
        <div className="block-content no-padding">
            <div className="block-content-inner">
                <div className="container">
                    <div className="decorated-title">
                        <div className="decorated-title-inner">
                            <div className="rules"></div>
                            <h2 className="title">Church Events</h2>
                            <div className="rules"></div>
                        </div>
                    </div>           
                    <CardEvents />
                    
                </div>
            </div>
        </div>
    )
}

export default Events