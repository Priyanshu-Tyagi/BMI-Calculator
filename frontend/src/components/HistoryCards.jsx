import React from 'react'

const HistoryCards = ({ data }) => {
    return (
        <div style={{display:"grid", width:"100%", gridTemplateColumns:"repeat(3,1fr)", gap:"1rem" }}>
            {data.map((i) =>
            (<div key={i._id} style={{ padding: "1.5rem", backgroundColor: "orange", marginBottom: "2rem", borderRadius:".6rem" }}>
                <p style={{fontSize:"1.2rem"}}><span style={{fontWeight:"700", marginRight:"1rem"}}>Height</span>{i.height}</p>
                <p style={{fontSize:"1.2rem"}}><span style={{fontWeight:"700", marginRight:"1rem"}}>Weight</span>{i.weight}</p>
                <p style={{fontSize:"1.2rem"}}><span style={{fontWeight:"700", marginRight:"1rem"}}>BMI</span>{i.BMI}</p>
                <p style={{fontSize:"1.2rem"}}><span style={{fontWeight:"700", marginRight:"1rem"}}>Time</span>{i.createdAt.split("T")[1].split(".")[0]}</p>
                <p style={{fontSize:"1.2rem"}}><span style={{fontWeight:"700", marginRight:"1rem"}}>Date</span>{i.createdAt.split("T")[0]}</p>
            </div>)
            )
            }
        </div>
    )
}

export default HistoryCards