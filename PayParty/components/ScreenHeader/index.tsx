import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';

import CloseButton from '../CloseButton';

interface IProps {
  title: string;
}

const ScreenHeader: React.FC<IProps> = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: { flex: 1},
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingHorizontal: 16,
  },
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
});

export default ScreenHeader;