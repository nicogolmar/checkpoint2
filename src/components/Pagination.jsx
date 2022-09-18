
const Pagination=({onPrevious,onNext})=>
{
const previous=()=>{
onPrevious();

}
const next=()=>{
onNext();
    
}

    return(
            <nav>
                <ul className="pagination justify-content-center">
                   {
                    <li className="page-item">
                        <button className="page-link" onClick={previous}>Previous</button>
                    </li>
                   }
                {
                    next ?
                    <li className="page-item">
                        <button className="page-link" onClick={next}>Next</button>
                    </li>
                    :
                    null
                }
                </ul>
            </nav>


    );
}

export default Pagination