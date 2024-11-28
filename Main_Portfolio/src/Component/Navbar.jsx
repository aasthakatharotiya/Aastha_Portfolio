import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation(); // Get the current route path

  const tabs = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/skills', name: 'Skills' },
    { path: '/resume', name: 'Resume' },
    { path: '/project', name: 'Project' },
    { path: '/blog', name: 'Blog' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.navbar}>Portfolio</div>

      {/* Keep the nav_flex section unchanged */}
      <div className="nav_flex">
        <button className="nav_btn">
          <img src="Aastha_Resume.jpg" alt="" />
        </button>
        <h2>Aastha Kathrotiya</h2>
      </div>

      {/* Render the sidebar tabs with active link styling */}
      <div style={styles.tabs}>
        {tabs.map((tab, index) => (
          <Link key={index} to={tab.path} style={styles.link}>
            <div
              style={{
                ...styles.tab,
                ...(location.pathname === tab.path ? styles.activeTab : {}),
              }}
            >
              {tab.name}
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed', // Fix the navbar on the left side
    top: 0,
    left: 0,
    height: '100vh', // Full height of the viewport
    width: '20%', // You can adjust the width as needed
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column', // Stack the navbar items vertically
    padding: '10px 0',
    zIndex: 1000, // Ensure it stays on top of other content
  },
  navbar: {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  tabs: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column', // Arrange the tabs vertically
    marginTop: '50px',
    alignItems: 'center', // Center the tabs horizontally
  },
  link: {
    textDecoration: 'none',
  },
  tab: {
    color: 'white',
    fontSize: '20px',
    cursor: 'pointer',
    padding: '10px 20px',
    transition: 'background-color 0.3s, color 0.3s',
    width: '100%',
    textAlign: 'center',
    marginLeft: '-20px',
  },
  activeTab: {
    backgroundColor: '#ffba08', // Orange background for the active link
    color: 'black', // Change text color to black
  },
};
