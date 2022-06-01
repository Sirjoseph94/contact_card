import fa from '../image/fa.png'
import git from '../image/git.png'
import insta from '../image/insta.png'
// import twitter from '../image/twitter.png'
import linkedin from '../image/linkedin.png'

const Footer = () => {
    return(
        <footer>
            <a href='https://github.com/Sirjoseph94/'><img src={git} alt="linkedin"></img></a>
            <a href='https://www.linkedin.com/in/joseph-ero/'><img src={linkedin} alt="linkedin"></img></a>
            <a href='https://www.instagram.com/joseph_ero/'><img src={insta} alt="Instagram"></img></a>
            {/* <a href='#'><img src={twitter} alt="Twitter"></img></a> */}
            <a href='https://www.facebook.com/joseph.o.ero'><img src={fa} alt="Facebook"></img></a>
        </footer>
    )
}
export default Footer