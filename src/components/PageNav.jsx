import Button from "./Button";
import { Link } from "react-router-dom";

function PageNav() {
  return (
    <div className="flex flex-col">
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/modules">
        <Button>modules</Button>
      </Link>
      <Link to="/lectures">
        <Button>lectures</Button>
      </Link>
      <Link to="/coursework">
        <Button>coursework</Button>
      </Link>
      <Link to="/exams">
        <Button>exams</Button>
      </Link>
    </div>
  );
}

export default PageNav;
