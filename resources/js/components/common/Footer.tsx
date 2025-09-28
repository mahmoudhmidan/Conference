import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer-col">
                <h4>products</h4>
                <ul className="list-unstyled">
                    <li><a href="#gallery" className="text-white">Our Team</a></li>
                    <li><a href="#contact" className="text-white">Contact Us</a></li>
                    <li><a href="#clients" className="text-white">References</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Services & Products</h4>
                <ul className="list-unstyled">
                    <li><a href="#services" className="text-white">Services</a></li>
                    <li><a href="#projects" className="text-white">Products</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Legal</h4>
                <ul className="list-unstyled">
                    <li><a href="#" className="text-white">Privacy Policy</a></li>
                    <li><a href="#" className="text-white">Cookie Settings</a></li>
                    <li><a href="#" className="text-white">Contracts</a></li>
                </ul>
            </div>
            <div className="footer-coll">
            <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.8251237429545!2d44.016807715501295!3d36.191143880069245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400724b3b0f89761%3A0xa5f6e35bbed9918b!2sErbil!5e0!3m2!1sen!2siq!4v1678319820517!5m2!1sen!2siq"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            
        </footer>
    );
};

export default Footer;


