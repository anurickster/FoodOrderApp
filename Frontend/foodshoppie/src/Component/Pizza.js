import React from 'react'

const Pizza = (props) => {

    var data = props.fetchdata[0]

    if (data) {
        return (
            <div className="childcontainer">
                <h1 className="childhead">{data.subItemsData.name}</h1>
                {data.subItemsData.subItems.map((value, index) => <div className="cardstyle">
                    <div className="childelement">
                        <p className="childelementname">{value.name}</p>
                        <p className="childelementprice">₹ {value.price}</p>
                        <p className="childelementdiscription">{value.description}</p>
                        <button className="childelementbutton" onClick={() => { props.addprop(value) }}>Order Now</button>
                    </div>
                    <div className="childelementimage">
                    <img src={value.image} alt=""></img>
                    </div>
                </div>
                )}
            </div>
        )
    } else {
        return (
            <div>Error in fetching data</div>
        )
    }
}

export default Pizza
