import { Container } from "react-bootstrap";
import { SlSocialFacebook, SlSocialTwitter, SlSocialGoogle, SlSocialLinkedin, SlSocialInstagram, SlSocialGithub } from "react-icons/sl";
const Footer = () => {
    return ( 
        <Container bg='light' className='text-center text-lg-start text-muted'>

      
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='/' className='me-4 text-reset'>
            <SlSocialFacebook />
          </a>
          <a href='/' className='me-4 text-reset'>
            <SlSocialTwitter />
          </a>
          <a href='/' className='me-4 text-reset'>
            <SlSocialGoogle />
          </a>
          <a href='/' className='me-4 text-reset'>
            <SlSocialInstagram />
          </a>
          <a href='/' className='me-4 text-reset'>
            <SlSocialLinkedin />
          </a>
          <a href='/' className='me-4 text-reset'>
            <SlSocialGithub />
          </a>
        </div>
        </section>  

        </Container>   
     );
}
 
export default Footer;