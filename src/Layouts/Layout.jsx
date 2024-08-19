import React from 'react';
import styles from "./Layout.module.css";

function Layout({ children }) {
    return (
        <div>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p><a href='https://botostart.ir'>Botostart</a> | React.js Full Course</p>
            </header>
            { children }
            <footer className={styles.footer}>
                <p>Developed By Aynaz momtazi</p>
            </footer>
        </div>
    )
}

export default Layout
