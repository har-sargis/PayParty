import { ReactNode } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

import MIcon from 'react-native-vector-icons/MaterialIcons';


interface IProps {
  icon?: JSX.Element;
  title?: string;
  hideChevron?: boolean;
}

const RouteButton: React.FC<IProps> = ({icon, title, hideChevron}) => {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.textwrapper}>
        {icon}
        <Text style={[styles.text, icon && styles.icon]}>{title}</Text>
      </View>
      {!hideChevron && <MIcon name="chevron-right" color="#aaaaaa" size={30}/>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textwrapper: {
    flexDirection: 'row',
  },
  text: {
    fontStyle: 'normal',
    fontWeight: "bold",
    fontSize: 16,
    color: '#222',
  },
  icon: {
    marginLeft: 10,
  }
});

export default RouteButton;