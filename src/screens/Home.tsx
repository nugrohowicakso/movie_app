import React from 'react';
import { ScrollView, View, StatusBar, StyleSheet, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { MovieListProps } from '../types/app';
import MovieList from '../components/movies/MovieList';

const movieLists: MovieListProps[] = [
  {
    title: 'Now Playing in Theater',
    path: 'movie/now_playing?language=en-US&page=1',
    coverType: 'backdrop',
  },
  {
    title: 'Upcoming Movies',
    path: 'movie/upcoming?language=en-US&page=1',
    coverType: 'poster',
  },
  {
    title: 'Top Rated Movies',
    path: 'movie/top_rated?language=en-US&page=1',
    coverType: 'poster',
  },
  {
    title: 'Popular Movies',
    path: 'movie/popular?language=en-US&page=1',
    coverType: 'poster',
  },
];

const Home = (): JSX.Element => {
  const navigation: any = useNavigation();

  const goToMovieDetail = () => {
    navigation.navigate('MovieDetail');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Home Screen</Text>
        {movieLists.map((movieList) => (
          <MovieList
            title={movieList.title}
            path={movieList.path}
            coverType={movieList.coverType}
            key={movieList.title}
          />
        ))}
        <Button title="Go to Movie Detail" onPress={goToMovieDetail} />
        <StatusBar translucent={false} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight ?? 32,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Home;


// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//   const navigation: any = useNavigation();

//   const goToMovieDetail = () => {
//     navigation.navigate('MovieDetail');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button title="Go to Movie Detail" onPress={goToMovieDetail} />
//     </View>
//   );
// };

// export default Home;
