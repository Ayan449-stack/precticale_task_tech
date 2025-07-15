import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EventCard from '../../components/EventCard';
import {LoadingBar} from '../../components/LoadingBar';
import TopBar from '../../components/TopBar';
import {getEventsAPI} from '../../services/event';
import {setEvents, toggleFavorite} from '../../state/event';
import {RootState} from '../../state/store';
import {styles} from './Style';

const EventScreen = () => {
  const [favorites, setFavorites] = useState<{[key: string]: boolean}>({});
  // const events = [
  //   {
  //     id: '1',
  //     image: IC_APPLE,
  //     title: 'ADICTO: Berlin Festival',
  //     date: '24.02.2022 - 26.02.2022',
  //     price: '€30 – €100',
  //     location: 'Berlin, Germany',
  //     tags: ['Workshop', 'Bachata'],
  //   },
  //   {
  //     id: '2',
  //     image: IC_GOOGLE,
  //     title: 'Bachata: Open level',
  //     date: '27.02.2022 @8pm',
  //     price: '€12',
  //     location: 'Berlin, Germany',
  //     tags: ['Course', 'Bachata'],
  //   },
  // ];

  const dispatch = useDispatch();
  const username = useSelector(
    (state: RootState) => state.userReducer.username,
  );

  const events = useSelector((state: RootState) => state.eventSlice.events);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const data = await getEventsAPI();
      console.log('Events:', JSON.stringify(data));

      dispatch(setEvents(data));
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = (eventId: any) => {
    dispatch(toggleFavorite(eventId));
    // Optionally call API here
  };

  return (
    <View style={styles.container}>
      <TopBar userName={`${username ? username : 'User'}`} />

      <FlatList
        data={events}
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
            // onShare={() => console.log('Share', item.title)}
            // onPress={() => console.log('Go to', item.title)}
          />
        )}
      />
      {loading && <LoadingBar isLoading={loading} />}
    </View>
  );
};

export default EventScreen;
