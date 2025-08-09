// components/FilterList.tsx
import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants/Colors';

const filters = [
  { id: 1, label: 'All' },
  { id: 2, label: 'Trending' },
  { id: 3, label: 'For You' },
  { id: 4, label: 'Live' },
  { id: 5, label: 'Following' },
  { id: 6, label: 'Gaming' },
  { id: 7, label: 'Technology' },
  { id: 8, label: 'Crypto' },
];

const FilterList = () => {
  const [selectedId, setSelectedId] = useState(1); 

  const handlePress = (id: number) => {
    setSelectedId(id);
  };

  return (
    <FlatList
      horizontal
      data={filters}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 0, marginTop: 0 }}
      renderItem={({ item, index }) => {
        const isSelected = selectedId === item.id;
        return (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={{
              backgroundColor: isSelected
                ? COLORS.primaryBlueColor
                : COLORS.primaryWhite,
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 8,
              marginRight: 6,
              marginLeft: index === 0 ? 10 : 0, 
            }}
          >
            <Text
              style={{
                color: isSelected
                  ? COLORS.primaryWhite
                  : COLORS.primaryBlack,
                fontWeight: '500',
                fontSize:12,
                lineHeight: 22,
              }}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default FilterList;
