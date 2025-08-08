import React, {useRef} from 'react';
import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  BG_SPLASH,
  IC_CLOUD,
  IC_COIN,
  IC_PAPER,
} from '../../constants/ImageConst';
import {styles} from './Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {OnboardingStackParamList} from '../../navigation/AppNavigator';
import PrimaryButton from '../../components/PrimaryButton';

const slides = [
  {
    id: 1,
    image: IC_COIN,
    title: 'Post to Earn',
    subtitle: 'Get rewards for sharing\nphotos and videos.',
  },
  {
    id: 2,
    image: IC_PAPER,
    title: 'Post to Earn',
    subtitle: 'Get rewards for sharing\nphotos and videos.',
  },
  {
    id: 3,
    image: IC_CLOUD,
    title: 'Post to Earn',
    subtitle: 'Get rewards for sharing\nphotos and videos.',
  },
];

const OnboardingScreen = () => {
  const swiperRef = useRef<Swiper>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<OnboardingStackParamList>>();

  const handleGetStarted = async (index: number) => {
    if (index < slides.length - 1) {
      swiperRef.current?.scrollBy(1);
    } else {
      await AsyncStorage.setItem('onboarded', 'true');
      navigation.replace('AuthStack');
    }
  };

  return (
    <ImageBackground
      source={BG_SPLASH}
      style={styles.background}
      resizeMode="cover">
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Swiper ref={swiperRef} loop={false} showsPagination={false}>
        {slides.map((slide, index) => (
          <View style={styles.container} key={slide.id}>
            <Image source={slide.image} style={styles.illustration} />

            <View style={styles.textContainer}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.subtitle}>{slide.subtitle}</Text>
            </View>

            {/* Button at bottom */}
            <View style={styles.buttonContainer}>
              <PrimaryButton
                title="Get started"
                onPress={() => handleGetStarted(index)}
              />
            </View>
          </View>
        ))}
      </Swiper>
    </ImageBackground>
  );
};

export default OnboardingScreen;
