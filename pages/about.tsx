import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../styles/About.module.css';

const About: React.FC = () => {
    return (
        <Container>
            <div className={styles.background}>
                <Image
                    className={styles.image}
                    src="/azam.jpg"
                    alt="Azam Ahmed"
                    width="315"
                    height="300"
                />
                <div>
                    <h1 className={styles.name}>Azam Ahmed</h1>
                    <h2 className={styles.title}>Founder</h2>
                    <br />
                    <p className={styles.description}>
                        Azam Ahmed is a high school student who loves the field
                        of computer science. He is the founder and CEO of
                        Neuracode, a nonprofit that focuses on inspiring
                        students to learn more about machine learning.
                        Additionally, he is on the board of Quantum Computing
                        Club and Computer Science Club at his high school.
                        Further, he has taken on multiple internships: software
                        engineer at Comet and machine learning researcher at The
                        College of New Jersey. In his free time, he loves to
                        develop mobile apps, design websites, and work on his
                        own coding/research projects.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
