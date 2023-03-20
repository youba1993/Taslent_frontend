import { Col, Container, Nav, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col className="col-sm-4">
                        <Nav className="nav-pills flex-column position-fixed" id='aboutNav'>
                            <Nav.Item>
                                <Nav.Link className="active my-2" href='#history' >History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link className="active my-2" href='#villageRules' >Village Rules</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="col-sm-8">
                        <Container className="bg-light my-3 py-4">
                            <article className="text-left mt-3" id="history">
                                <h1>History :</h1>
                                <Row>
                                    <Col className="col-sm-6">
                                        <p>Taslent g’Illoulen is a village located 7 km from Akbou and situated on the west bank of the Soummam river in the foothills of the Djurdjura mountain range. It stands at an altitude of over 700 meters and is surrounded by the villages of El Mechta and Ath-Sellam to the west, Iamouren, Tighilt, and Ath-Ammar-Ouzeggan to the north, Tazaghart to the east, and Ighram to the south. Formerly known as Aguni n’Teslent, it takes its name from a century-old tree, the ash tree (aslen, taslent), which is widespread in its territory. </p>

                                        <p>Home to 3,200 people and located on mountainous land that is not conducive to agriculture, Taslent nonetheless derives its wealth from olive production. In fact, the olive tree occupies almost its entire area of approximately 5 km².</p>

                                        <p>Its first fountain (Thala Ouathman) was built in the 11th century and reportedly had a spout made of solid gold. Its ancestral laws were recorded by Hanoteau and Letourneux in the Revue Africaine in 1859 (the Kanoun of the village Taslent).</p>

                                    </Col>
                                    <Col className="col-sm-6">

                                        <p>Known since the 15th century for having housed the Zaouia "Aboudhaoudh," which made it Djbel ennour (The Mountain of Light. Adhrar n'Tafath), it was independent of the branches that existed simultaneously with it, such as Rahmania and Sufism.</p>

                                        <p>In addition to purely religious programs, it taught scientific disciplines such as astronomy, rhetoric, and calculus.</p>

                                        <p>Among its illustrious students were Cheikh Belkacem, the founder of the El Hammel zaouïa in Biskra, and Lmahdi Mechehed, secretary to Ahmed Bey of Constantine and founder of the Private Manuscript Library of the Maghreb in Ath-Ourtiran.</p>
                                        <p>The Berber, agricultural, and Muslim calendars were calculated with precision there.</p>

                                        <p>With more than 80 martyrs, Taslent wrote its name in gold during the revolution, especially with the repeated visits of Colonel Amirouche who felt safe there, cited by all biographies of this great hero of the war of independence.</p>

                                    </Col>
                                </Row>
                            </article>
                        </Container>
                        <Container className="bg-light my-3 py-4">
                            <article className="text-left mt-3" id="villageRules">
                                <h1>Village Rules :</h1>
                                <Row>
                                    <Col className="col-sm-6">
                                       <p>Rule-1 :</p>
                                    </Col>
                                    <Col className="col-sm-6">
                                        <p>Rule-2 :</p>
                                    </Col>
                                </Row>
                            </article>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

export default About;