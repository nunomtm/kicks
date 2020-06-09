import React from 'react'
import GetData from './GetData'

function Main() {
    return (
        <section>
            <div className="mainContainer">
                <h2>Up Coming</h2>
                <div className="wrapper">
                    <GetData />
                </div>
            </div>
        </section>
    )
}

export default Main;
