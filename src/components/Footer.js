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
          <a href='https://www.facebook.com/people/Taslent-Tadart-iw/100063650622647/' className='me-4 text-reset'>
            <SlSocialFacebook />
          </a>
          <a href='https://twitter.com/ChannelSefar' className='me-4 text-reset'>
            <SlSocialTwitter />
          </a>
          <a href='https://fr.wikipedia.org/wiki/Taslent' className='me-4 text-reset'>
            <SlSocialGoogle />
          </a>
          <a href='https://www.linkedin.com/in/youba-idjis/' className='me-4 text-reset'>
            <SlSocialLinkedin />
          </a>
          <a href='https://github.com/youba1993/Taslent_frontend' className='me-4 text-reset'>
            <SlSocialGithub />
          </a>
        </div>
      </section>
      <div  className='text-center p-3 bg-light' >
        &copy; {new Date().getFullYear()} Copyright:{' '} Village Taslent
      </div>
    </Container>
  );
}

export default Footer;