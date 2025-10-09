import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';

const Developers = ({ onNavigate }) => {
  const developers = [
    {
      name: "Arthur Hermoso",
      avatar: require('../../assets/images/arthur.png'),
      github: "https://github.com/hermosoarthur",
      linkedin: "https://www.linkedin.com/in/arthur-hermoso-b17a1a2a7/",
      
    },
    {
      name: "Rafaela Santos",
      avatar: require('../../assets/images/rafaela.png'),
      github: "https://github.com/Rafa-S68/",
      linkedin: "https://www.linkedin.com/in/rafaela-santos-rodrigues-57b6a1254",
      
    },
    {
      name: "Geovanna Toso",
      avatar: require('../../assets/images/geovanna.png'),
      github: "https://github.com/geovannatoso",
      linkedin: "https://www.linkedin.com/in/geovanna-toso-059320287/",
      
    },
    {
      name: "Victoria Rubio",
      avatar: require('../../assets/images/victoria.png'),
      github: "https://github.com/vicrubiovic",
      linkedin: "https://br.linkedin.com/in/victoria-alejandra-rubio-69857b2b8",
      
    },
    {
      name: "Joicy Dos Santos",
      avatar: require('../../assets/images/joicy.png'),
      github: "https://github.com/Joicy-SantosP",
      linkedin: "https://www.linkedin.com/in/joicy-dos-santos-pereira-8a6049267",
      
    },
    {
      name: "Vitória Moço",
      avatar: require('../../assets/images/vitoria.png'),
      github: "https://github.com/vitoriasmo",
      linkedin: "https://www.linkedin.com/in/vit%C3%B3ria-mo%C3%A7o-049b791b1/",
      
    }
  ];

  const handleLinkPress = (url) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  const defaultAvatar = "https://via.placeholder.com/100x100/ecf0f1/7f8c8d?text=?";

  return (
    <ScrollView style={styles.developersPage}>
      <View style={styles.container}>
        <View style={styles.pageHeader}>
          <Text style={styles.h1}>Desenvolvedores</Text>
          <TouchableOpacity onPress={() => onNavigate('home')}>
            <Text style={styles.backButton}>← Voltar para Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.developersGrid}>
          {developers.map((dev, index) => (
            <View key={index} style={styles.developerCard}>
              <View style={styles.developerAvatar}>
                <Image 
                  source={dev.avatar ? dev.avatar : { uri: defaultAvatar }}
                  style={styles.avatarImage}
                />
              </View>
              <View style={styles.developerInfo}>
                <Text style={styles.h3}>{dev.name}</Text>
                <Text style={styles.developerRole}>{dev.role}</Text>
                <View style={styles.developerLinks}>
                  <TouchableOpacity 
                    style={[styles.linkButton, !dev.github && styles.linkButtonDisabled]}
                    onPress={() => handleLinkPress(dev.github)}
                    disabled={!dev.github}
                  >
                    <Text style={styles.linkText}>GitHub</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={[styles.linkButton, !dev.linkedin && styles.linkButtonDisabled]}
                    onPress={() => handleLinkPress(dev.linkedin)}
                    disabled={!dev.linkedin}
                  >
                    <Text style={styles.linkText}>LinkedIn</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  developersPage: {
    paddingVertical: 32,
    backgroundColor: '#f8f9fa',
    flex: 1,
  },
  container: {
    maxWidth: 1200,
    marginHorizontal: 'auto',
    paddingHorizontal: 32,
  },
  pageHeader: {
    alignItems: 'center',
    marginBottom: 48,
  },
  h1: {
    fontSize: 48,
    marginBottom: 16,
    color: '#2c3e50',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backButton: {
    fontSize: 18,
    color: '#3498db',
    fontWeight: '500',
  },
  developersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 29,
  },
  developerCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 32,
    width: 300,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    alignItems: 'center',
  },
  developerAvatar: {
    width: 100,
    height: 100,
    marginBottom: 16,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#3498db',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  developerInfo: {
    alignItems: 'center',
  },
  h3: {
    color: '#2c3e50',
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  developerRole: {
    color: '#7f8c8d',
    marginBottom: 16,
    fontSize: 16,
    textAlign: 'center',
  },
  developerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  linkButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 5,
    minWidth: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkButtonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  linkText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Developers;