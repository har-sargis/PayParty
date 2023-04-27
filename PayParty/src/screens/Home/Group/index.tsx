import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Item from './Item';

const GroupsSection: React.FC = () => {
  const groups = [1, 2, 3, 4, 5]; // Replace with the actual group data

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Groups</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
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
    margiTop: 20,
    marginBottom: 20,
    paddingVertical: 20,
  },
  groupCardMargin: {
    marginLeft: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  scrollView: {
    paddingLeft: 10,
    paddingVertical: 20,
  },
});

export default GroupsSection;
