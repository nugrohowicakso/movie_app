import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { API_URL, API_ACCESS_TOKEN } from '@env'

const MovieDetailScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const fetchData = (): void => {
    // Gantilah dengan akses token Anda

    if (API_URL == null || API_ACCESS_TOKEN == null) {
        throw new Error('ENV not found')
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
