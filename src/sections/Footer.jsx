import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container flex justify-between items-center">
            <div className="socials">
              {socialImgs.map((img) => (
                <a className="icon" target="_blank" href={img.url} key={img.url}>
                  <img src={img.imgPath} width="25px" />
                </a>
              ))}
            </div>
            <div>
              <p className="text-right">
                © {new Date().getFullYear()} Jayant Anand. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      );
}

export default Footer