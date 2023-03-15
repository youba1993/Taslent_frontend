import Footer from "../components/Footer";
import Header from "../components/Header";
import NotFound from "./NotFound";
import UnderConstruction from "./UnderConstruction";


const Home = () => {
    return (
        <div>
           
                <Header />
                <UnderConstruction />
                <NotFound />

           
                <Footer />
            
        </div>
    );
}

export default Home;