import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
  Modal,
  PanResponder,
  Animated,
} from 'react-native';
import styles from './style';
import {IC_FACE, IC_FLASH, IC_ROTATE} from '../../constants/ImageConst';

const emojiList = [
  '😀',
  '😂',
  '😍',
  '🥳',
  '😎',
  '🤩',
  '😇',
  '🤓',
  '😜',
  '🥶',
  '😡',
  '💖',
  '🔥',
  '🌈',
  '🍕',
  '🎉',
];

const PostScreen = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [activeMode, setActiveMode] = useState('Reels');
  const [activeFilter, setActiveFilter] = useState('Original');
  const [selectedEmojis, setSelectedEmojis] = useState([]);

  // Add emoji to screen
  const handleSelectEmoji = emoji => {
    const pan = new Animated.ValueXY({x: 150, y: 300});
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
        pan.setValue({x: 0, y: 0});
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    });

    setSelectedEmojis(prev => [
      ...prev,
      {id: Date.now().toString(), emoji, pan, panResponder},
    ]);
    setShowEmojiPicker(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1608889175123-d34e2a4ed9d7',
        }}
        style={styles.cameraPreview}>
        <TouchableOpacity style={styles.closeBtn}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        {selectedEmojis.map(item => (
          <Animated.View
            key={item.id}
            style={[item.pan.getLayout(), {position: 'absolute'}]}
            {...item.panResponder.panHandlers}>
            <Text style={{fontSize: 60}}>{item.emoji}</Text>
          </Animated.View>
        ))}

        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          {/* Filters */}
          <View style={styles.filterOptions}>
            {['Original', 'B&W', 'Golden Hour'].map(filter => (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}>
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === filter && styles.activeFilter,
                  ]}>
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.controlsRow}>
            <View style={styles.sideIcons}>
              <TouchableOpacity>
                <Image
                  source={{uri: 'https://via.placeholder.com/50'}}
                  style={styles.thumbnail}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={IC_FLASH} style={styles.icon} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.captureButton} />

            <View style={styles.sideIcons}>
              <TouchableOpacity>
                <Image source={IC_ROTATE} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowEmojiPicker(true)}>
                <Image source={IC_FACE} style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Mode Switcher */}
          <View style={styles.modeOptions}>
            {['Reels', 'Videos', 'Live'].map(mode => (
              <TouchableOpacity key={mode} onPress={() => setActiveMode(mode)}>
                <Text
                  style={[
                    styles.modeText,
                    activeMode === mode && styles.activeMode,
                  ]}>
                  {mode}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ImageBackground>

      <Modal
        visible={showEmojiPicker}
        animationType="slide"
        transparent
        onRequestClose={() => setShowEmojiPicker(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.bottomSheet}>
            <View style={styles.searchBar}>
              <Text style={styles.searchIcon}>🔍</Text>
              <Text style={styles.searchPlaceholder}>Search for emojis</Text>
            </View>

            <FlatList
              data={emojiList}
              numColumns={5}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.emojiGrid}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.emojiItem}
                  onPress={() => handleSelectEmoji(item)}>
                  <Text style={styles.emojiText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PostScreen;
