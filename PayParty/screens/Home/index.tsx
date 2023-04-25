import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';

import Balance from './Balance';
import Groups from './Group';
import TopBar from './TopBar';
import BottomBar from './BottomBar';

interface IHomeProps {
  navigation: any
}

const HomePage: React.FC<IHomeProps> = ({ navigation }): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <TopBar onMenuPress={() => navigation.navigate('Settings')} onUserPress={() => navigation.navigate('Profile')} />
          <View style={styles.content}>
            <View style={{marginBottom: 20}}>
              <Balance />
            </View>
            <Groups />
          </View>
        </View>
        </SafeAreaView>
      <BottomBar onMenuPress={() => navigation.navigate('ActionMenu')} />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: '#D4E2E2',
  },
  container: {
    flex: 1,
    backgroundColor: '#D4E2E2',
  },
  content: {
    flex: 1,
    backgroundColor: '#EBF5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 15,
    paddingTop: 13,
    paddingHorizontal: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
});

export default HomePage;
