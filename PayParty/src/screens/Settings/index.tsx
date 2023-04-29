import { useContext, useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/FontAwesome5';
import EIcon from 'react-native-vector-icons/Entypo';
import { Switch } from 'react-native-switch';

import CloseButton from '@components/CloseButton';
import ScreenHeader from '@components/ScreenHeader';
import RouteButton from '@components/RouteButton';
import Separator from '@components/Separator';
import { AuthContext } from '@store/AuthContext';

interface IProps {
  navigation: any;
}

const Settings: React.FC<IProps> = ({ navigation }) => {
  const { logout } = useContext(AuthContext)
  const [isDark, setIsDark] = useState(false);

  return (
    <SafeAreaView style={styles.flex}>
      <View style={styles.container}>
        <CloseButton
          onPress={() => navigation.goBack()}
          icon={<EIcon name="chevron-thin-left" color="#DADADA" size={26} />}
        />
        <View style={{ paddingTop: 25, marginBottom: 32 }}>
          <ScreenHeader title="Settings" />
        </View>
        <View style={styles.content}>
          <View style={styles.wrapper}>
            <RouteButton
              icon={<SIcon name="globe" color="#37C8C3" size={20} />}
              title="Language"
            />
            <Separator style={{ marginTop: 20, marginBottom: 20 }} dark />
            <RouteButton
              icon={<MIcon name="lock-outline" color="#37C8C3" size={20} />}
              title="Change Pin"
            />
          </View>

          <View style={styles.wrapper}>
            <View style={styles.themeSwitcher}>
              <View style={styles.textwrapper}>
                <MIcon name="invert-colors" color="#37C8C3" size={20} />
                <Text style={styles.text}>Dark Mode</Text>
              </View>
              <Switch
                circleSize={20}
                barHeight={6}
                circleBorderWidth={0}
                backgroundActive="#1B9F9A"
                backgroundInactive="#CCDCDC"
                circleActiveColor="#37C8C3"
                circleInActiveColor="#37C8C3"
                containerStyle={{ width: 0 }}
                renderActiveText={false}
                renderInActiveText={false}
                switchWidthMultiplier={1.2}
                onValueChange={() => setIsDark(!isDark)}
                value={isDark}
              />
            </View>
            {/* <RouteButton icon={} title="Dark Mode"/> */}
          </View>

          <View style={styles.wrapper}>
            <RouteButton
              icon={<SIcon name="globe" color="#37C8C3" size={20} />}
              title="About Us"
            />
            <Separator style={{ marginTop: 20, marginBottom: 20 }} dark />
            <RouteButton
              icon={<FIcon name="power-off" color="#DD5757" size={20} />}
              title="Logout"
              hideChevron
              onPress={logout}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 15,
  },
  shadowOpacity: 0.14902,
  shadowRadius: 25,
  elevation: 15,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBF5F5',
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    gap: 20,
    justifyContent: 'space-evenly',
  },
  flex: {
    backgroundColor: '#EBF5F5',
    flex: 1,
  },
  text: {
    color: '#222',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  textwrapper: {
    flexDirection: 'row',
  },
  themeSwitcher: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    ...shadow,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default Settings;
