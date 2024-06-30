import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();

  const goToMovieDetail = () => {
    navigation.navigate('MovieDetail');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Movie Detail" onPress={goToMovieDetail} />
    </View>
  );
};

export default Home;
