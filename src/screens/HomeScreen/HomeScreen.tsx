import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  IC_LIST_FIVE,
  IC_LIST_FOUR,
  IC_LIST_ONE,
  IC_LIST_THREE,
  IC_LIST_TWO,
} from '../../constants/ImageConst';
import {HOME_STACK, HomeStackParamList} from '../../navigation/HomeStack';
import {getUserList} from '../../services/home';
import {styles} from './Style';

interface User {
  _id: number;
  username: string;
  name: string;
  mobile: number;
}
type NavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'HomeScreen'
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [userList, setUserList] = useState<User[]>([
    {
      _id: 11,
      username: 'user11',
      name: 'user11',
      mobile: 9738385897,
    },
    {
      _id: 12,
      username: 'user12',
      name: 'user12',
      mobile: 9738386897,
    },
    {
      _id: 13,
      username: 'user13',
      name: 'user13',
      mobile: 9738387897,
    },
    {
      _id: 14,
      username: 'user14',
      name: 'user14',
      mobile: 9738388897,
    },
  ]);
  // const [localImages] = useState<any[]>([
  //   require(IC_SPLASH),
  //   require(IC_SPLASH),
  //   require(IC_SPLASH),
  //   require(IC_SPLASH),
  //   require(IC_SPLASH),
  //   require(IC_SPLASH),
  //   require(IC_SPLASH),
  // ]);
  useEffect(() => {
    // getUserListData();
  }, []);
  const getUserListData = async () => {
    try {
      const data = await getUserList('10');
      if (data) {
        console.log('GetUSer Successfull', JSON.stringify(data));
      }
    } catch (error) {
      console.log('Error logging in:', JSON.stringify(error));
    }
  };
  const handleUserPress = (user: User) => {
    navigation.navigate(HOME_STACK.USERDETAILSCREEN);
  };

  const renderItem = ({item, index}: {item: User; index: number}) => (
    <TouchableOpacity onPress={() => handleUserPress(item)} style={styles.card}>
      <Image
        // source={localImages[index % localImages.length]}
        source={
          index === 1
            ? IC_LIST_ONE
            : index === 2
            ? IC_LIST_TWO
            : index === 3
            ? IC_LIST_THREE
            : index === 4
            ? IC_LIST_FOUR
            : IC_LIST_FIVE
        }
        style={styles.image}
      />
      <View>
        <Text style={styles.nameText}> {item.name}</Text>
        {/* <Text style={styles.usernameText}>Mobile: {item.mobile}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>List</Text>
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item._id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
