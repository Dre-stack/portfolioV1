import React from 'react';

function Footer() {
  const date = new Date();
  return (
    <div className="footer">
      copyright &copy;{date.getFullYear()} Oludare Odedoyin
    </div>
  );
}

export default Footer;
