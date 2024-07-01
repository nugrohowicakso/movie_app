import React, { useState, useEffect } from 'react';
import { ScrollView, View, StatusBar, StyleSheet, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL, API_ACCESS_TOKEN } from '@env';

interface Movie {
  id: number;
  title: string;
  overview: string;
  // Tambahkan properti lain yang diperlukan
}

const MovieDetailScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = (): void => {
    if (API_URL == null || API_ACCESS_TOKEN == null) {
      throw new Error('ENV not found');
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`,
      },
    };

    fetch(API_URL, options)
      .then(async (response) => await response.json())
      .then((response) => {
        setMovies(response.results);
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const goBackToHome = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Movie Detail Screen</Text>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Go back to Home" onPress={goBackToHome} />
      {movies.map((movie) => (
        <View key={movie.id} style={styles.movieContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.overview}>{movie.overview}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  movieContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 14,
    color: '#555',
  },
});

export default MovieDetailScreen;
