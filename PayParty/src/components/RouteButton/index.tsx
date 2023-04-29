import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import MIcon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  icon?: JSX.Element;
  title?: string;
  hideChevron?: boolean;
  onPress?: () => void;
}

const RouteButton: React.FC<IProps> = ({ icon, title, hideChevron, onPress }) => (
  <TouchableOpacity style={styles.wrapper} onPress={onPress}>
    <View style={styles.textwrapper}>
      {icon}
      <Text style={[styles.text, icon && styles.icon]}>{title}</Text>
    </View>
    {!hideChevron && <MIcon name="chevron-right" color="#aaaaaa" size={30} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    marginLeft: 10,
  },
  text: {
    color: '#222',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
  },
  textwrapper: {
    flexDirection: 'row',
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RouteButton;
