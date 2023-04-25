import { StyleSheet, View, SafeAreaView, Image} from 'react-native';
import { Text } from 'react-native-elements';
import SIcon from 'react-native-vector-icons/SimpleLineIcons';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FIcon from 'react-native-vector-icons/Feather';
import EIcon from 'react-native-vector-icons/Entypo';
import AIcon from 'react-native-vector-icons/AntDesign';

import CloseButton from '../../components/CloseButton';
import ScreenHeader from '../../components/ScreenHeader';
import Button from '../../components/Button';
import RouteButton
 from '../../components/RouteButton';
import Separator from '../../components/Separator';
import BottomBar from '../../components/BottomBar';

interface IProps {
  navigation: any;
}

const Settings: React.FC<IProps> = ({navigation}) => {
  return (
    <View style={styles.flex}>
      <SafeAreaView style={styles.flex}>
        <View style={styles.container}>
          <CloseButton onPress={() => navigation.goBack()} icon={<EIcon name="chevron-thin-left" color="#DADADA" size={26}/>}/>
          <View style={{paddingTop: 25, marginBottom: 32}}>
            <ScreenHeader title="Profile"/>
          </View>
          <View style={styles.content}>
            <View  style={styles.info}>
                <Image
                  source={{ uri: 'https://via.placeholder.com/48' }}
                  style={styles.userImage}
                />
                <Text style={styles.username}>Ismail Mesbah</Text>
                <View style={styles.placement}>
                  <MIcon name="map-marker" size={15} color="#37C8C3"/>
                  <Text style={styles.country}>Stockholm, Swden</Text>
                </View>
                <Button>
                  <View style={{marginRight: 8}}>
                    <AIcon name="edit" size={15} color="#fff"/>
                  </View>
                  Edit
                </Button>
            </View>

            <View style={styles.wrapper}>
              <RouteButton icon={<MIcon name="message-processing-outline" color="#37C8C3" size={20}/>} title="Help Center"/>
              <Separator  style={{ marginTop: 20, marginBottom: 20}} dark/>
              <RouteButton icon={<FIcon name="settings" color="#37C8C3" size={20} />} title="Settings"/>
            </View>
          </View>
        </View>
      </SafeAreaView>
      <BottomBar  onMenuPress={() => navigation.navigate('Menu')}/>
    </View>

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
  flex: {
    flex: 1,
    backgroundColor: '#EBF5F5',
  },
  container: {
    flex: 1,
    backgroundColor: '#EBF5F5',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    // gap: 20,
    justifyContent: 'space-between',
  },
   userImage: {
    width: 112,
    height: 112,
    borderRadius: 112/2,
    marginBottom: 20,

  },
  username: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  country: {
    fontSize: 15,
    color: '#37C8C3',
  },
  placement: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  info: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    paddingBottom: 130,
  }
});

export default Settings;
