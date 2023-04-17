import {Link} from 'react-router-dom'

const Home = () => {
    const ticketImg = "https://img.freepik.com/free-vector/vector-two-designed-cinema-tickets-close-up-top-view-isolated-white-background_1284-47320.jpg?w=996&t=st=1681367384~exp=1681367984~hmac=116c83b8cee8be628123d55b697f58017f7d0233965458f98d5ac4b49a68cbbf"
    return(
        <>
        <div className="text-center">
            <h2>Find a movie to watch tonight</h2>
        </div>
        <div className="row">
            <div className="col-md-2 mx-auto">
                <Link to="/movies">
                <img className="img-fluid" src={ticketImg} alt="movie ticket"/>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Home