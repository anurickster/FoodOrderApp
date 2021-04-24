import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = (props) => {
    return (
        <div className="homecontainer">
            {props.fetchdata.map((currentvalue, index) => {
                return index === 0 ?
                    <NavLink className="parentlink" to='/pizza'><img className="parentimage" src={currentvalue.image} alt=''/><p>{currentvalue.name}</p></NavLink>
                    :
                    <NavLink className="parentlink" to='/burger'><img className="parentimage" src={currentvalue.image} alt=''/><p>{currentvalue.name}</p></NavLink>
            }
            )}
        </div>
    )
}

export default Home
