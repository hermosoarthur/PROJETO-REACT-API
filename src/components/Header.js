// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';

// const Header = () => {
//   return (
//     <header className="header">
//       <nav className="nav">
//         <div className="logo">
//           <Link to="/">Testes de APIs</Link>
//         </div>
//         <ul className="nav-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/developers">Desenvolvedores</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Testes de APIs</Text>
      <View style={styles.nav}>
        <Text style={styles.navLink}>Home</Text>
        <Text style={styles.navLink}>Desenvolvedores</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
    padding: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    gap: 20,
  },
  navLink: {
    color: 'white',
    fontSize: 16,
  },
});

export default Header;