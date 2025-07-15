import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EventCard from '../../components/EventCard';
import TopBar from '../../components/TopBar';
import {toggleFavorite} from '../../state/event';
import {RootState} from '../../state/store';
import {styles} from './Style';

const FavoritesScreen = () => {
  const dispatch = useDispatch();

  const favoriteEvents = useSelector((state: RootState) =>
    state.eventSlice.events.filter(event => event.isFavorite === 1),
  );
  const username = useSelector(
    (state: RootState) => state.userReducer.username,
  );

  const handleFavorite = (eventId: number) => {
    dispatch(toggleFavorite(eventId));
  };

  return (
    <View style={styles.container}>
      <TopBar userName={`${username ? username : 'User'}`} />
      {favoriteEvents.length > 0 ? (
        <FlatList
          data={favoriteEvents}
          keyExtractor={item => item.event_id.toString()}
          contentContainerStyle={{padding: 15}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <EventCard
              image={{uri: item.event_profile_img}}
              title={item.event_name}
              readable_from_date={item.readable_from_date}
              readable_to_date={item.readable_to_date}
              event_price_from={item.event_price_from}
              event_price_to={item.event_price_to}
              location={`${item.city}, ${item.country}`}
              tags={item.keywords}
              isFavorite={item.isFavorite === 1}
              onFavorite={() => handleFavorite(item.event_id)}
            />
          )}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No favorite events yet!</Text>
        </View>
      )}
    </View>
  );
};

export default FavoritesScreen;
