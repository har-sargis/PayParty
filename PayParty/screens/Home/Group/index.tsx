import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Item from './Item';;

const GroupCard: React.FC = () => {
  // Replace this with the actual Group Card component implementation
  return <View style={styles.groupCard} />;
};

const GroupsSection: React.FC = () => {
  const groups = [1, 2, 3, 4, 5]; // Replace with the actual group data

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Groups</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {groups.map((group, index) => (
          <View key={index} style={index !== 0 ? styles.groupCardMargin : null}>
            <Item groupName="Savings" amount={5000} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    margiTop: 20,
    paddingVertical: 20,
  },
  header: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingLeft: 10,
    paddingVertical: 20,
  },
  groupCard: {
    width: 120,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  groupCardMargin: {
    marginLeft: 10,
  },
});

export default GroupsSection;
