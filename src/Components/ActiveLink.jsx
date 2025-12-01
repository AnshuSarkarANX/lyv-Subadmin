import { Link, useLocation } from "react-router";

const ActiveLink = ({ to, children, onClick }) => {
  const location = useLocation();
  // Extract the first segment after the domain from both current pathname and the target "to"
  const currentSegment = location.pathname.split("/")[1];
  const targetSegment = to.split("/")[1];

  let isActive = false;
  if (targetSegment === "") {
    // If the target route is "/" (home), ensure location is exactly "/"
    isActive = location.pathname === "/";
  } else {
    isActive = currentSegment === targetSegment;
  }

  return (
    <Link
      to={to}
      onClick={onClick}
      className={isActive ? "text-CTA duration-200" : "text-Used opacity-80"}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
