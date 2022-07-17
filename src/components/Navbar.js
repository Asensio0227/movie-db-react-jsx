import React, {useState, useRef, useEffect} from 'react'
import { social, links } from '../data';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const containerRef = useRef(null);
  const linksRef = useRef(null);
  
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    
    if (showLinks) {
      containerRef.current.style.height = `${linksHeight}px`;
    } else {
      containerRef.current.style.height = `0px`;
    }
  },[showLinks])

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h4>sky<span>coding</span></h4>
          <button className="nav-toggle" onClick={()=>setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div ref={containerRef} className="links-container">
          <ul ref={linksRef} className="links">
          <li>
            <Link to='/'>
              home
            </Link>
          </li>
            {links.map((link) => {
              const { url, text, id } = link;
              return (
                <li key={id}>
                  <a href={url}>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="social-links">
          {social.map((icons) => {
            const { icon, url, id } = icons;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
};

export default Navbar
