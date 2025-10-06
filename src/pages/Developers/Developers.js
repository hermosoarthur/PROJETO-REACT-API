// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Developers.css';

// const Developers = () => {
//   const developers = [
//     {
//       name: "Arthur Hermoso",
//       avatar: "",
//       github: "https://github.com/hermosoarthur",
//       linkedin: "https://linkedin.com/in/arthurhermoso"
//     },
//     {
//       name: "",
//       avatar: "",
//       github: "",
//       linkedin: ""
//     },
//     {
//       name: "",
//       avatar: "",
//       github: "",
//       linkedin: ""
//     },
//     {
//       name: "",
//       avatar: "",
//       github: "",
//       linkedin: ""
//     },
//     {
//       name: "",
//       avatar: "",
//       github: "",
//       linkedin: ""
//     },
//     {
//       name: "",
//       avatar: "",
//       github: "",
//       linkedin: ""
//     }
//   ];

//   return (
//     <div className="developers-page">
//       <div className="container">
//         <div className="page-header">
//           <h1>Desenvolvedores</h1>
//           <Link to="/" className="back-button">← Voltar para Home</Link>
//         </div>

//         <div className="developers-grid">
//           {developers.map((dev, index) => (
//             <div key={index} className="developer-card">
//               <div className="developer-avatar">
//                 <img src={dev.avatar} alt={dev.name} />
//               </div>
//               <div className="developer-info">
//                 <h3>{dev.name}</h3>
//                 <p className="developer-role">{dev.role}</p>
//                 <div className="developer-links">
//                   <a href={dev.github} target="_blank" rel="noopener noreferrer">
//                     GitHub
//                   </a>
//                   <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
//                     LinkedIn
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Developers;

// src/pages/Developers.js


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';

const Developers = ({ onNavigate }) => {
  const developers = [
    {
      name: "Arthur Hermoso",
      avatar: "",
      github: "https://github.com/hermosoarthur",
      linkedin: "https://linkedin.com/in/arthurhermoso",
      role: "Full Stack Developer"
    },
    {
      name: "Desenvolvedor 2",
      avatar: "",
      github: "",
      linkedin: "",
      role: "Full Stack Developer"
    },
    {
      name: "Desenvolvedor 3",
      avatar: "",
      github: "",
      linkedin: "",
      role: "Full Stack Developer"
    },
    {
      name: "Desenvolvedor 4",
      avatar: "",
      github: "",
      linkedin: "",
      role: "Full Stack Developer"
    },
    {
      name: "Desenvolvedor 5",
      avatar: "",
      github: "",
      linkedin: "",
      role: "Full Stack Developer"
    },
    {
      name: "Desenvolvedor 6",
      avatar: "",
      github: "",
      linkedin: "",
      role: "Full Stack Developer"
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
                  source={{ uri: dev.avatar || defaultAvatar }}
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
    gap: 32,
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