import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../constants/Colors';
import {
  IC_FAVORITE,
  IC_FAVORITE_FILL,
  IC_NAVIGATE,
  IC_SHARE,
} from '../constants/ImageConst';

interface EventCardProps {
  image: any;
  title: string;
  readable_from_date: string;
  readable_to_date: string;
  event_price_from: number;
  event_price_to: number;
  location: string;
  tags: string[];
  onPress?: () => void;
  onShare?: () => void;
  onFavorite?: () => void;
  isFavorite?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
  image,
  title,
  readable_from_date,
  readable_to_date,
  event_price_from,
  event_price_to,
  location,
  tags,
  onPress,
  onShare,
  onFavorite,
  isFavorite = false,
}) => {
  {
    console.log('isFavoriteisFavoriteisFavorite', isFavorite);
  }
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <Image source={image} style={styles.eventImage} />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Image source={IC_NAVIGATE} style={styles.arrowIcon} />
        </View>

        <View style={styles.secondRow}>
          <Text style={styles.date}>
            {`${readable_from_date}${
              readable_to_date ? ` - ${readable_to_date}` : ''
            }`}
          </Text>
          <Text style={styles.location}>{location}</Text>
        </View>

        <Text style={styles.price}>
          {`${event_price_from}${event_price_to ? ` - ${event_price_to}` : ''}`}
        </Text>

        <View style={styles.thirdRow}>
          <View style={styles.tagsContainer}>
            {tags.map((tag, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>

          <View style={styles.bottomRow}>
            <TouchableOpacity onPress={onShare} style={styles.iconButton}>
              <Image source={IC_SHARE} style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={onFavorite} style={styles.iconButton}>
              <Image
                source={isFavorite ? IC_FAVORITE_FILL : IC_FAVORITE}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 15,
    padding: 10,
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.05,
    // shadowRadius: 4,
    // elevation: 2,
    position: 'relative',
  },
  eventImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primaryBlack,
    flex: 1,
    paddingRight: 10,
  },
  location: {
    fontSize: 11,
    color: '#999',
  },
  date: {
    fontSize: 12,
    color: COLORS.prmaryButtonColor,
    marginTop: 2,
  },
  price: {
    fontSize: 11,
    color: '#444',
    marginTop: 2,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  thirdRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    marginRight: 5,
  },
  tagText: {
    fontSize: 12,
    color: '#555',
  },
  bottomRow: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 10,
  },
  icon: {
    width: 18,
    height: 18,
  },
  arrowIcon: {
    width: 16,
    height: 16,
  },
});

export default EventCard;
