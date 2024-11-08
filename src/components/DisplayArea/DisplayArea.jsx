import "./styles.css"

function DisplayArea({ title, desc, buttonDesc, page }){
    return(
        <div className="displayArea">

            <h1 className="headerArea"> 
                <div className="descriptionArea">
                    <h1>{title}</h1>
                    <h2>{desc}</h2>
                </div>
                <button>{buttonDesc}</button>
            </h1>

            <div className="pageArea">
                {page}
            </div>
        </div>
    )
}

export default DisplayArea;