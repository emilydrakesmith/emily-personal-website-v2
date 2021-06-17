import React from 'react';
import { Helmet } from "react-helmet";
import '../styles/global.css';

// TODO: replace copyright info in footer with site metadata link

export default function Layout({children}) {
    return (
        <div className='layout'>
            <Helmet>
                <title>Marty Smith | Software Engineer</title>
                <link rel="canonical" href="https://martysmith.tech" />
            </Helmet>
            <main className='content'>
                {children}
            </main>
            <footer>
                <p>© 2021 Marty Smith</p>
            </footer>
        </div>
    );
}