
const SectionInfo =({title,discription,discriptionMore})=>{
    return(
        <div className="sectionHead">
            <h2 className="section_title">{title}</h2>
            <p className="section_text">{discription}</p>
            <p className="section_text">{discriptionMore}</p>
        </div>
    )
}

export default SectionInfo;