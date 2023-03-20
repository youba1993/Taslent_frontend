import { Col, Container, Nav, Row } from "react-bootstrap";


const About = () => {
    return (
        <div>
            <Container>
                <Row>

                    <Nav className="ml-auto" id="basic-navbar-nav" >
                        <Nav.Item>
                            <Nav.Link className="active " href='#history' type="button" >History</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className="active" href='#villageRules' >Village Charter</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Col>
                        <Container className="py-4">
                            <article className="text-left mt-3" id="history">
                                <h1 style={{ fontWeight: "bold" }}>History </h1>
                                <Row className="bg-light py-3">
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
                        <Container className="py-4">
                            <article className="text-left mt-3" id="villageRules">
                                <h1 style={{ fontWeight: "bold" }}>Village Charter</h1>
                                <Row className="bg-light py-3">

                                    <Col className="col-sm-4">
                                        <h4>PREAMBLE :</h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <p>Faithful to the commitments of our ancestors. We have the elements of the past, but at the same time, we adapt them to the present. We worked according to the means available in order to perpetuate the vital dynamism of our society. The development of this document allows us to lay a foundation, a reference for future generations.</p>
                                    </Col>
                                    </Row>
                                    <Row className="bg-light py-3">
                                    <Col className="col-sm-4">
                                        <h4>CHAPTER 1: PURPOSE</h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <h5>ARTICLE-1: </h5><p>An association called: Village Committee TASLENT commune of IGHRAM is created, bringing together all the citizens of the village.</p>
                                        <h5>ARTICLE-2: </h5><p>The headquarters of the association located in EL DJAMAA TASLENT may be transferred by decision of the committee to any other place located in the village.</p>
                                        <h5>ARTICLE-3: </h5><p>Is considered a citizen of the village any person who has lived, stayed or has a particular attachment to the village. However, the association is open to all natural or legal persons who will bring their contributions. Any discrimination based on race, religion, or any other consideration has no place in our community. Any foreign family that comes to settle permanently in the village will have the same rights and duties. he will be granted all his rights after consultation with all the villagers in a general assembly.</p>
                                        <h5>ARTICLE-4: </h5><p>To have the quality of the citizen of the village, it is necessary to discharge its contributions annually and this before January 31st of the beginning of the exercise of each year. In the event of non-payment, a reminder letter is sent from the first of February to invite the member to honor his debt within one month, but in the event of no response (by March 31) After this date, the recipient is no longer considered a citizen of the village. He can, however, regularize his situation during the current calendar year with an increase in contributions. By paying the reinstatement rights as well as the current contribution. -The rights of reinstatement are fixed as follows
                                            ; ... DA
                                            During the period of non-payment, the person concerned loses all his rights vis-à-vis the village committee, reinstatement will take place after the payment of the rights.</p>
                                        <h5>ARTICLE-5: </h5><p>The village committee is the only legitimate representative of the villagers to the authorities.</p>
                                    </Col>
                                    </Row>
                                    <Row className="bg-light py-3">
                                    <Col className="col-sm-4">
                                        <h4>CHAPTER 2: OBJECTIVES AND MISSIONS </h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <h5>ARTICLE-6: </h5><p>The objectives of the committee are the search for solutions to the problems relating to the development of the village to improve the living environment.
                                            <ul>
                                                <li>Mutual aid (solidarity)</li>
                                                <li>Listening to the needs of the villagers </li>
                                                <li>Celebration of traditional festivals</li>
                                                <li>Creation of a "village festival" day</li>
                                                <li>Promote the TASLENT village</li>
                                                <li>Acquisition of tools and materials necessary for burials</li>
                                                <li>Acquisition of the necessary furniture for the festivities of the villagers.</li>
                                            </ul>
                                        </p>
                                        <h5>ARTICLE-7: </h5><p>The office of the association, thus composed, is responsible on behalf of the association for:
                                            <ul>
                                                <li>Represent the association nearby public authorities.</li>
                                                <li>Conclude any contract, convention or agreement related to its purpose.</li>
                                                <li>Acquire, free of charge or against payment, movable or immovable property for the needs
                                                    activities of the association as provided for by the statutes.</li>
                                                <li>Suggest to the decision-making body all measures likely to improve the system of organization and the installation of various bodies of the association.</li>
                                                <li>Make amendments to the statutes and internal regulations.</li>
                                                <li>Define the attributions of each vice president and his assessors.</li>
                                                <li>Guaranteed the application of the statutes as well as the decisions of the general assemblies.</li>
                                                <li>Management of the association's assets.</li>
                                            </ul>
                                        </p>
                                        <h5>ARTICLE-8: </h5><p>The association is managed by members of the office elected by the GA for a period of 2 years. The committee is made up of the members of the office, namely:
                                            <ol>
                                                <li>The president and two vice-presidents</li>
                                                <li>The treasurer and an assistant treasurer</li>
                                                <li>Secretary and Assistant Secretary</li>
                                                <li>The eight alternates</li>
                                            </ol>
                                            <ul>
                                                <li>Board members meet once a month. The decisions are taken on a majority basis. In the event of a tie, the casting vote of the President.</li>
                                                <li>The members of the office report once a year to the general meeting on the general situation and the financial statement for the year. A discharge is given each year by the general meeting after approval of its reports.</li>
                                                <li>The general meeting is convened 48 hours in advance by posting.</li>
                                                <li>In case of emergency The call to the general assembly can be made by sound system through the imam or his representative</li>
                                            </ul>
                                        </p>
                                        <h5>ARTICLE-9: </h5><p>The ordinary general meeting meets once a month. It validly deliberates on the first ballot since no quorum is required. Decisions will be taken by simple majority, ie half of the votes cast plus one clear vote (for or against); In the event of a tie, the President's vote is decisive.</p>
                                    </Col>

                                    </Row>
                                    <Row className="bg-light py-3">
                                    <Col className="col-sm-4">
                                        <h4>CHAPTER 3: FINANCIAL PROVISIONS</h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <h5>ARTICLE-10: </h5><p>The amount of the contributions is fixed by the general assembly. Contributions apply to any adult head of household. The subscription can be paid either by check payable to the association, or in cash against delivery of a receipt. Social cases are exempt from contributions.</p>
                                        <h5>ARTICLE-11: </h5><p>Is considered social case the head of the family without resources proposed by the committee and submitted to the approval of the general assembly of the village.</p>
                                        <h5>ARTICLE-12: </h5><p>The resources of the village in accordance with the regulations in force come from:
                                            <ol>
                                                <li>Contributions</li>
                                                <li>Donations</li>
                                                <li>Income related to its activities</li>
                                                <li>Subsidies</li>
                                            </ol>
                                        </p>
                                        <h5>ARTICLE-13: </h5><p>Only the person who is up to date with his contributions will benefit from tombstones, sands, concrete blocks as well as the property of the village.</p>
                                        <h5>ARTICLE-14: </h5><p>The association has a bank account. Any disbursement of funds must be paid by check signed jointly by the treasurer and the president.</p>
                                        <h5>ARTICLE-15: </h5><p>The accounts of the association must be presented in the form of a statement comprising two parts:
                                            <ul>
                                                <li>Resources component: they must be justified by means of a receipt declined with each entry of funds.</li>
                                                <li>Expenses section: they must be justified at each outflow of funds by a supporting document (invoices or voucher; expenditure order).</li>
                                            </ul>
                                        </p>
                                    </Col>
                                    </Row>
                                    <Row className="bg-light py-3">
                                    <Col className="col-sm-4">
                                        <h4>CHAPTER 4: MISCELLANEOUS PROVISIONS</h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <h5>ARTICLE-16: </h5><p>The detailed inventory of the village's assets will be presented at the latest at the end of each year. The terms of use and rental of these assets are set at a general meeting.
                                            <ul>
                                                <li>With regard to deaths, the provision of these goods is free for the villagers and even for citizens outside the village on an exceptional basis.</li>
                                                <li>The olive trees of the village are auctioned at the start of the season at a general meeting.</li>
                                                <li>The cleaning of the cemetery will be done from the month of June; the highest bidder wins works</li>
                                                <li>The cleaning of public fountains (sources of the village) will be done in May of each year</li>
                                            </ul>
                                        </p>
                                        <h5>ARTICLE-17: </h5><p>Anyone wishing to make their house available to someone from outside the village must keep the village committee informed.</p>
                                        <h5>ARTICLE-18: </h5><p>Toute personne ayant atteint l'âge de majorité chef de famille est tenu d'assister:
                                            <ol>
                                                <li>The general assembly of the village</li>
                                                <li>Volunteering</li>
                                                <li>At funerals</li>
                                                <li>Emergencies</li>
                                                <li>Respond to any call from the committee</li>
                                            </ol>
                                        </p>
                                    </Col>
                                    </Row>
                                    <Row className="bg-light py-3">
                                    <Col className="col-sm-4">
                                        <h4>CHAPTER 5: DISCIPLINARY PROVISION</h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <h5>ARTICLE-19: </h5><p>
                                            Any amount paid or any property acquired is property of the village. Resignation or exclusion does not entitle you to any reimbursement.</p>
                                        <h5>ARTICLE-20: </h5><p>Any disturbance to the public tranquility of the village; the person concerned will be called to order at a general meeting and will pay a fine, if he repeats the offense he will be brought before a disciplinary committee, once decided, a complaint will be filed.
                                            <ul>
                                                <li>Legal proceedings will be initiated for the following types of offences:</li>
                                            </ul>
                                            <ol>
                                                <li>Encroachments of public spaces</li>
                                                <li>forest fire</li>
                                                <li>Excessive use of pipes on public fountain in summer</li>
                                                <li>Nocturnal noise disrupts public tranquility</li>
                                                <li>Discharge of wastewater or waste in public spaces</li>
                                                <li>Theft and damage to village public property</li>
                                            </ol>

                                            Any person from outside the village causing harm or disturbing the public tranquility of the village will be the subject of a complaint to the competent courts.
                                        </p>
                                        <h5>ARTICLE-21: </h5><p>Any member of the office who, without reason, has not attended five consecutive meetings, may be considered as having resigned.</p>
                                        <h5>ARTICLE-22: </h5><p>This regulation was adopted on , may be subject to amendment provided that it is in the interest of the village; it must be approved by the general assembly.</p>
                                    </Col>
                                    </Row>
                                    <Row className="bg-light py-3">
                                    <Col className="col-sm-4">
                                        <h4>CONCLUSION</h4>
                                    </Col>
                                    <Col className="col-sm-8">
                                        <p>“ The myth works in societies like the dream in the individual. Like him, he has the elements of the past, he transmits them but at the same time, he arranges them according to the present. When a trauma occurs, the myth, like the dream, never ceases to represent it, until its inscription in history is possible, until its content can be named, become a memory of the Kabyle myth, which functions as a true myth: it designates an origin and a corpus of values, it permeates the unconscious and the conscious, it circulates in memory and in language. It establishes the vital dynamism of a society.“</p>
                                    </Col>

                                </Row>
                            </article>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;