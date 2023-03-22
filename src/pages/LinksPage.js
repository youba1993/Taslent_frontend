import React from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";

const LinksPage = () => {
            const links = [
                { id: 1, name: "Birth Certificate", url: "www.etatcivil.interieur.gov.dz/ActeNaissance/" },
                { id: 2, name: "Marriage Certificate", url: "www.etatcivil.interieur.gov.dz/ActeMariage/" },
                { id: 3, name: "Death Certificate", url: "www.etatcivil.interieur.gov.dz/ActeDeces/" },
                { id: 4, name: "Facebook Page 'Taslent Tadarth'", url: "https://www.facebook.com/groups/6259572290726554/user/100086820773962/" },
                { id: 5, name: "Facebook Group 'Comité des notables Tadarth TASLENT'", url: "https://www.facebook.com/groups/6259572290726554" },
            ];

            return (
                <Container>
                    <h1 className="my-4">Link List</h1>
                    <ListGroup>
                        {links.map((link) => (
                            <ListGroupItem key={link.id}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                    {link.name}
                                </a>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Container>
            );
}

export default LinksPage;