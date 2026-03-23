import React from 'react';
import cl from './../styles/About.module.css'

const About = () => {
    return (
        <div className = {cl.divOfTextAbout}>
            About <br/><br/>

            ## About Our Library <br/><br/>

            Welcome to your personal digital library! 📚<br/><br/>

            Here you'll find a carefully selected collection of beloved books — from timeless Russian classics like "War and Peace" to thought-provoking dystopias like "1984," and heartwarming tales like "The Little Prince."<br/><br/>

            Whether you're looking for your next great read or just browsing for inspiration, this app helps you explore: <br/>
            - Classic literature <br/>
            - Modern masterpieces <br/>
            - Books from around the world browsing <br/><br/>

            Start exploring and discover the perfect book for your next reading adventure.
        </div>
    );
};

export default About;