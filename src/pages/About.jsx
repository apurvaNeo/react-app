import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import AboutUs from '../components/about/About';

const AboutPage = ()=>{
    return(
        <div>
            <div className='Top_section'>
                <Header/>
            </div>
            <AboutUs/>
            <Footer/>
        </div>
    )
}
export default AboutPage;