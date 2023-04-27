import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CloseButton from '../../components/CloseButton';
import IconButton from '../../components/IconButton';
import Separator from '../../components/Separator';

const bankingIcons = [
  { name: 'payment', label: 'Payments' },
  { name: 'account-balance', label: 'Balance' },
  { name: 'transfer-within-a-station', label: 'Transfer' },
];

const bankingIcons2 = [
  { name: 'credit-card', label: 'Cards' },
  { name: 'bar-chart', label: 'Statistics' },
  { name: 'settings', label: 'Settings' },
];

const Menu: React.FC = ({ navigation }) => (
  <SafeAreaView style={styles.flex}>
    <View style={styles.container}>
      <CloseButton onPress={() => navigation.goBack()} />
      <View>
        <Text
          style={{
            alignItems: 'center',
            fontSize: 14,
            textAlign: 'center',
            color: '#AAAAAA',
            marginVertical: 20,
          }}
        >
          {' '}
          Banking
          {' '}
        </Text>
        <View style={styles.iconContainer}>
          {bankingIcons.map((icon, index) => (
            <IconButton
              key={index}
              iconName={<Icon name={icon.name} size={32} color="#37C8C3" />}
              buttonName={icon.label}
            />
          ))}
        </View>
        <View style={styles.iconContainer}>
          {bankingIcons2.map((icon, index) => (
            <IconButton
              key={index}
              iconName={<Icon name={icon.name} size={32} color="#37C8C3" />}
              buttonName={icon.label}
            />
          ))}
        </View>
        <Separator dark style={{ marginVertical: 20 }} />
      </View>
      <View>
        <Text
          style={{
            alignItems: 'center',
            fontSize: 14,
            textAlign: 'center',
            color: '#AAAAAA',
            marginVertical: 20,
          }}
        >
          {' '}
          Banking
          {' '}
        </Text>
        <View style={styles.iconContainer}>
          {bankingIcons.map((icon, index) => (
            <IconButton
              key={index}
              iconName={<Icon name={icon.name} size={32} color="#37C8C3" />}
              buttonName={icon.label}
            />
          ))}
        </View>
        <Separator dark style={{ marginVertical: 20 }} />
      </View>
      <View>
        <Text
          style={{
            alignItems: 'center',
            fontSize: 14,
            textAlign: 'center',
            color: '#AAAAAA',
            marginVertical: 20,
          }}
        >
          {' '}
          Banking
          {' '}
        </Text>
        <View style={styles.iconContainer}>
          {bankingIcons.map((icon, index) => (
            <IconButton
              key={index}
              iconName={<Icon name={icon.name} size={32} color="#37C8C3" />}
              buttonName={icon.label}
            />
          ))}
        </View>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#EBF5F5',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  flex: {
    backgroundColor: '#EBF5F5',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 25,
    width: '100%',
  },
});

export default Menu;
