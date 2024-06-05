import React from 'react'

const Cancel = () => {
  return (
    <div className="row justify-content-center">
    <div className="col-md-5">
      <div
        style={{
          boxShadow: "0 15px 25px #00000019",
          padding: 45,
          width: "100%",
          textAlign: "center",
          margin: "40px auto",
          borderBottom: "solid 4px red"
        }}
      >
        <i
          style={{ fontSize: 55, color: "red" }}
          className="fa fa-times-circle"
          aria-hidden="true"
        />
        <h2
          style={{
            marginBottom: 12,
            fontSize: 40,
            fontWeight: 500,
            lineHeight: "1.2",
            marginTop: 10
          }}
        >
          Your payment failed
        </h2>
        <p
          style={{
            marginBottom: 0,
            fontSize: 18,
            color: "#495057",
            fontWeight: 500
          }}
        >
          Try again later
        </p>
      </div>
    </div>
  </div>
  )
}

export default Cancel