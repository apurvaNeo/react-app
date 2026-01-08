import Banner from '../components/banner/Banner';
import Header from '../layout/header/Header';
import Services from '../components/service/Services';
import AboutUs from '../components/about/About';
import WorkWithUs from '../components/work/WorkwithUs';
import Projects from '../components/project/Projects';
import Footer from "../layout/footer/Footer";


const HomePage = ()=>{
    return(
        <div>
            <div className='Top_section'>
                <Header/>
                <Banner/>
            </div>
            <Services/>
            <AboutUs/>
            <Projects/>
            <WorkWithUs/>
            <Footer/>
        </div>
    )
}
export default HomePage;