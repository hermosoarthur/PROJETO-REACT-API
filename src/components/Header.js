import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';

const Header = ({ onNavigate, currentScreen }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>App</Text>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={[styles.navLink, currentScreen === 'home' && styles.navLinkActive]}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('developers')}>
          <Text style={[styles.navLink, currentScreen === 'developers' && styles.navLinkActive]}>
            Desenvolvedores
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight + 10,
    width: '100%',
    zIndex: 1000,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    gap: 25,
  },
  navLink: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  navLinkActive: {
    color: '#3498db',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#3498db',
  },
});

export default Header;