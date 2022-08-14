import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from '../styles/MainNavbar.module.css';

const MainNavbar: React.FC = () => {
    return (
        <Container>
            <Navbar bg="light" variant="light" className={styles.mainNavbar}>
                <Container>
                    <Link href="/">
                        <Navbar.Brand className={styles.brand}>
                            Intestisight
                        </Navbar.Brand>
                    </Link>
                    <Nav className="ms-auto">
                        <Link href="/dashboard">
                            <div className={styles.navbarButton}>Dashboard</div>
                        </Link>
                        <Link href="/screening">
                            <div className={styles.navbarButton}>Screening</div>
                        </Link>
                        <Link href="/about">
                            <div className={styles.navbarButton}>About</div>
                        </Link>
                        <Link href="/auth/login">
                            <div
                                className={`${styles.navbarButton} ${styles.loginButton}`}>
                                Log in
                            </div>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
        </Container>
    );
};

export default MainNavbar;
