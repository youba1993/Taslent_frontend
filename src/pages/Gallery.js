import CarouselPage from "../components/Carrousel";
import { Container } from "react-bootstrap";

const Gallery = () => {
    return (

        <Container className="py-5">
            <h1 className="text-center mb-5">Gallery</h1>
            <CarouselPage />
            
            <p className="lead text-center py-4">Welcome to our gallery, where we showcase some of the beautiful sights and events of our village.</p>

            

        </Container>
    );
}

export default Gallery;
