import React from 'react'

const Tracking = () => {
  return (
    <section className="modal-wrapper">
      <div className="model-container1">
        <button className="close" onClick={props.pass}>
          {" "}
          X
        </button>
        <h2 style={{ display: "inline-block", margin: "0 0 10px 0" }}>
          Edit Profile
        </h2>
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className="subcontainer1">
              
              
              </div>

           
          </form>
        </div>
      </div>
    </section>
  )
}

export default Tracking