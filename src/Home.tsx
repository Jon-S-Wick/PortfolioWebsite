
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./dna-svgrepo-com.svg";
import HomeText from "./HomeText.tsx"


export default function Home(){
    return (

    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                I'm Jon Wick
              </h1>

            </Col>

            <Col md={7} style={{ paddingBottom: 20 }}>
            <h2>
              Hello
            </h2>
            </Col>
          </Row>
        </Container>
      </Container>
        <HomeText/>
    </section>
    )
}
