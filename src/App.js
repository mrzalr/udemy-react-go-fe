import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Alert from "./components/Alert"

function App() {
  const [jwt, SetJwt] = useState("")
  const [alertMessage, SetAlertMessage] = useState("")
  const [alertClassName, SetAlertClassName] = useState("d-none")

  const navigate = useNavigate()

  const logOut = () => {
    SetJwt("")
    navigate("/login")
  }

  return (
    <div className="container">
      <div className="row d-flex align-items-center my-3">
        <div className="col">
          <h1>Go Watch a Movie</h1>
        </div>
        <div className="col text-end">
          { jwt === "" ?
            <Link to="/login"><span className="badge bg-success">Login</span></Link> :
            <a href="" onClick={logOut}><span className="badge bg-danger">Logout</span></a>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <nav>
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to="/movies" className="list-group-item list-group-item-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genres</Link>
              { jwt !== "" &&
                <>
                  <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Add Movie</Link>
                  <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage Catalogue</Link>
                  <Link to="/graphql" className="list-group-item list-group-item-action">GraphQL</Link>
                </>
              }
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert className={alertClassName} message={alertMessage}/>
          <Outlet context={{
            jwt, SetJwt, SetAlertClassName, SetAlertMessage
          }}/>
        </div>
      </div>
    </div>
  );
}

export default App;
