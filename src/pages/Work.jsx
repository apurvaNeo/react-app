import Header from '../layout/header/Header';
import Footer from '../layout/footer/Footer';
import Projects from '../components/project/Projects';

const WorkPage = ()=>{
    return(
        <div>
            <div className='Top_section'>
                <Header/>
            </div>
            <Projects />
            <Footer/>
        </div>
    )
}
export default WorkPage;