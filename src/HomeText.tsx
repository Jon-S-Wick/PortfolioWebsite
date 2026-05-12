import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <h1>Jon Wick</h1>
        <h2>WWU 26' Molecular and Cellular biology, CS minor</h2>
        <h3>
          I am a biologist and a programmer interested in an intedisciplinary
          approach to research.
        </h3>
        <h3>
          I fell in love with biology my junior year of high school during a
          biotech class. Ever since I my first PCR I knew this was the right
          field for me. Throughout the year my interest deepened until I decide
          to join the lab in which my teacher worked at. While starting research
          I realized how a science I loved could be used to help people and the
          environment.
          <br />
          Ever since then I have been interested in education and research.
          Participating in educational research with Dr. Sushil Oswal, UW and
          RNAi research with Dr. Lee WWU. I am interested in pursuing a career
          in research with a focus on understanind molecular mechanisms of
          disease progression and translating that knowledge into potential
          treatments.
        </h3>
      </Container>
    </Container>
  );
}
export default Home2;
