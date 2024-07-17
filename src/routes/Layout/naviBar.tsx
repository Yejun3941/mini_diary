import { useState } from "react";
import { Link as RRLink } from "react-router-dom";
import { Link } from "../../componentes/Link";

export default function NaviBar() {
  const [loggedUser, loggedUpdate] = useState(false);
  // const {loggedUser} = useAuth()

  return (
    <div className="flex justify-between bg-base-100">
      <div className="flex p-2 navbar">
        <Link to="/" className="btn btn-link">
          Home
        </Link>
        <Link to="/test" className="btn btn-link">
          This 404 test
        </Link>
        {loggedUser && (
          <Link to="Diary" className="ml-btn btn-link">
            Diary
          </Link>
        )}
      </div>
      <div></div>
    </div>
  );
}
