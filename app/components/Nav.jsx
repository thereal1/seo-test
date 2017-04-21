const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          {/* image next to title (flaticon) */}
          <li className="menu-text">Ayrshire Plumber</li>
        </ul>
      </div>
      <div className="top-bar-right">
        <div className="menu">
          <li>
            <IndexLink to="/" className="link">Home</IndexLink>
          </li>
          <li>
            <Link to="/about" className="link">About</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

module.exports = Nav
