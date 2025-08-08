import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import {styles} from './Style';
import TopBar from '../../components/TopBar';
import FilterList from '../../components/FilterList';
import {
  FEED_IMAGES,
  IC_BLUE_TICK,
  IC_CENTER,
  IC_COMMENT,
  IC_FAVORITE,
  IC_MORE,
  IC_SHARE,
  IC_TAG,
  IC_USER,
} from '../../constants/ImageConst';

const stories = ['You', 'Emiley', 'Emma', 'Olivia', 'Michael'];
const feeds = [
  {
    id: '1',
    username: 'Amelia John',
    time: '30 sec ago',
    text: 'Lorem ipsum dolor sit amet. In bibbo jndjdbn bdjhbh bnh met tek consec djs tetur #Justposting #Feed',
  },
  {
    id: '2',
    username: 'Amelia John',
    time: '50 sec ago',
    text: 'Lorem ipsum dolor sit amet. Another random post goes here.',
  },
];

const HomeScreen = () => {
  const [likedFeedIds, setLikedFeedIds] = useState<string[]>([]);

  const toggleLike = (id: string) => {
    setLikedFeedIds(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id],
    );
  };

  const renderStoryItem = ({item, index}: {item: string; index: number}) => (
    <View style={styles.storyViewContainer}>
      <View style={styles.storySubContainer}>
        <Image source={IC_USER} style={styles.userImageStyle} />
        {index === 0 && (
          <View style={styles.storyPluseImageContainer}>
            <Image source={IC_CENTER} style={styles.storyPlusIcon} />
          </View>
        )}
      </View>
      <Text style={styles.storyTitle}>{item}</Text>
    </View>
  );

  const renderFeedItem = (item: (typeof feeds)[0]) => (
    <View key={item.id} style={styles.feedContainer}>
      {/* Header */}
      <View style={styles.feedSubContainer}>
        <Image source={IC_USER} style={styles.feedUserImage} />
        <View style={styles.feedrowContainer}>
          <View style={styles.feedrowSubContainer}>
            <Text style={styles.feedTextStyle}>{item.username}</Text>
            <Image source={IC_BLUE_TICK} style={styles.iconStyle} />
          </View>
          <Text style={styles.postTimeStyle}>{item.time}</Text>
        </View>
        <TouchableOpacity>
          <Image source={IC_MORE} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>

      {/* Image */}
      <Image source={FEED_IMAGES} style={styles.feedImagesStyle} />

      {/* Action Row */}
      <View style={styles.feedActionRowStyle}>
        <View style={styles.feedActionrowContainer}>
          <Image source={IC_FAVORITE} style={styles.feedActionIcon} />
          <Text style={styles.feedActionTitle}>12.5K</Text>
        </View>
        <View style={styles.feedActionrowContainer}>
          <Image source={IC_COMMENT} style={styles.feedActionIcon} />
          <Text style={styles.feedActionTitle}>8.5K</Text>
        </View>
        <View style={styles.feedActionrowContainer}>
          <Image source={IC_SHARE} style={styles.feedActionIcon} />
          <Text style={styles.feedActionTitle}>5.6K</Text>
        </View>
        <View style={styles.feedActionrowContainer}>
          <Image source={IC_TAG} style={styles.feedActionIcon} />
          <Text style={styles.feedActionTitle}>1.2K HVT</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Lorem ipsum dolor nbdnf</Text>
        <Text style={styles.detailText}>
          {item.text} <Text style={styles.moreText}>...more</Text>
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TopBar />
      <FilterList />
      <View style={styles.spaceStyle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories section */}
        <Text style={styles.titleStyle}>Top Stories</Text>
        <FlatList
          data={stories}
          renderItem={({item, index}) => renderStoryItem({item, index})}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyFlatListStyle}
        />
        <Text style={[styles.titleStyle, {marginVertical: 12, marginTop: 6}]}>
          My Feeds
        </Text>
        {feeds.map(renderFeedItem)}
        <View style={{height: 50}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
