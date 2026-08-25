import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <div>
      404 Page not found. Fuck off mate!
      <br />
      <Link to="/">Home From the Link Tag</Link>
      <br />
      <a href="/">Home From the A Tag</a>
    </div>
  );
}
