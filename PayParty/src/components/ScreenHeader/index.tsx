import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';


interface IProps {
  title: string;
}

const ScreenHeader: React.FC<IProps> = ({ title }) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: '#222222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenHeader;
