import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const allLinks = links.map ((eachLink) => (
     <a key={eachLink } href={"#" + eachLink}>{eachLink}</a>  
  ))  ;

  return ( 
        <nav>
            {/* display an <a> tag for each link here */}
            {allLinks}
        </nav>
        )
};

export default NavBar;
