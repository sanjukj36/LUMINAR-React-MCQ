import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Container >
        <div className='bg-white m-5 p-5 shadow rounded'>
          <h1 className='text-center mb-3'><strong><u> MCQ </u></strong></h1>
          <p className='ms-2 fs-3'>Choose a subject for your multiple-choice questions and evaluate your level of knowledge.</p>

          <div className='d-flex justify-content-between m-5'>



            <div className="card border-primary me-4 mt-4 mb-3" style={{ maxWidth: "20rem" }}>
              <Link to={"HTML/"} style={{ textDecoration: "none" }} >

                <div className="card-body">
                  <h4 className="card-title">HTML</h4>
                </div>

              </Link>
            </div>


            <div className="card border-primary me-4 mt-4 mb-3" style={{ maxWidth: "20rem" }}>
              <Link to={"Css/"} style={{ textDecoration: "none" }} >

                <div className="card-body">
                  <h4 className="card-title">CSS</h4>
                </div>
              </Link>
            </div>

            <div className="card border-primary mt-4 mb-3" style={{ maxWidth: "20rem" }}>
              <Link to={"Js/"} style={{ textDecoration: "none" }} >
                <div className="card-body">
                  <h4 className="card-title">JAVASCRIPT</h4>
                </div>
              </Link>
            </div>

            <div className="card border-primary mt-4 mb-3" style={{ maxWidth: "20rem" }}>
              <Link to={"React/"} style={{ textDecoration: "none" }} >
                <div className="card-body">
                  <h4 className="card-title">REACT</h4>
                </div>
              </Link>
            </div>

          </div>


        </div>
      </Container>
    </>
  )
}

export default Home