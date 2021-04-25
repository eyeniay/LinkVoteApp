import "../styles/header.css";

function Header() {
  return (
    <div className="header">
        <div className="company-name">
          <p className="light-grey">hepsiburada</p>
          <p className="dark-grey">.com</p>
        </div>
        <div className="project-name">
          <p className="black">Link</p>
          <p className="light-black">VOTE</p>
          <p className="dark-black"> Challenge</p>
        </div>
    </div>
  );
}

export default Header;
