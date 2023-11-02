import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const CV = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>Saliha Aziz</Text>
        <Text style={styles.title}>Software Engineering Student</Text>
        <Text style={styles.university}>COMSATS University Islamabad</Text>
        <Text style={styles.email}>salihaAziz@gmail.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionContent}>Bachelors in Software Engineering</Text>
        <Text style={styles.sectionContent}>COMSATS University, Islamabad</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skillsContent}>- Microsoft Word</Text>
        <Text style={styles.skillsContent}>- Microsoft Excel</Text>
        <Text style={styles.skillsContent}>- Microsoft PowerPoint</Text>
        <Text style={styles.skillsContent}>- Basic Programming (Java, C++)</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionContent}>No previous job experience</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    color: '#555',
  },
  university: {
    fontSize: 16,
    color: '#777',
  },
  email: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
  },
  skillsContent: {
    fontSize: 16,
    color: '#666',
    marginLeft: 10,
  },
});

export default CV;
