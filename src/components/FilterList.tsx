// components/FilterList.tsx
import React from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';

const filters = ['All', 'Trending', 'For You', 'Live', 'Following', 'Gaming', 'Technology', 'Crypto'];

const FilterList = () => {
  return (
    <FlatList
      horizontal
      data={filters}
      keyExtractor={(item, index) => `${item}-${index}`}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, marginTop: 10 }}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            backgroundColor: index === 0 ? '#1E4EFF' : '#fff',
            paddingVertical: 6,
            paddingHorizontal: 14,
            borderRadius: 18,
            marginRight: 10,
          }}
        >
          <Text style={{ color: index === 0 ? '#fff' : '#000', fontWeight: '500' }}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default FilterList;
