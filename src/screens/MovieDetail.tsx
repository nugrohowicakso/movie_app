import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MovieDetailScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const fetchData = (): void => {
    // Gantilah dengan akses token Anda
    const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOGI3NzlhNzFlMjg5YjQ2NWVlNzRiY2Q1Njc4OTVkMCIsIm5iZiI6MTcxOTc2OTQ2Ni41MzQ2NDksInN1YiI6IjY2N2MzMjdhNWVjYmI5YWRlMzU1N2NhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S9o1_B_CfsiWHsKyQfLgJpm8yPOh7IL9fRkDRGoUQUo';

    const url =
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    };

    fetch(url, options)
      .then(async (response) => await response.json())
      .then((response) => {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Movie Detail Screen</Text>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Go back to Home" onPress={goBackToHome} />
    </View>
  );
};

export default MovieDetailScreen;

// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const MovieDetailScreen = (): JSX.Element => {
//   const navigation = useNavigation();

//   const goBackToHome = () => {
//     navigation.goBack();
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Movie Detail Screen</Text>
//       <Button title="Go back to Home" onPress={goBackToHome} />
//     </View>
//   );
// };

// export default MovieDetailScreen;
