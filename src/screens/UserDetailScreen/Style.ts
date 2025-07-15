import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../constants/Colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fb',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'center',
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  map: {
    width: '100%',
    height: 200,
    marginBottom: 12,
  },
  latLong: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
});
