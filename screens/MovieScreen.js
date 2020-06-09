import React, { useState, useEffect } from 'react';
import { View, FlatList, Text,Image } from 'react-native';
import Colors from '../constants/Colors';
import { search } from '../services/movies';

function MovieScreen({ route }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        search(route.params.searchTerm).then(response => {
            setMovies(response.data.Search);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={item => item.imdbID}
                renderItem={
                    ({ item }) => (
                        <View>
                            <Text>{item.Title}-{item.Year}</Text>
                            <Image
                             style={styles.tinyLogo}
                             source={{
                             uri: item.Poster,
                             }}
                />
                        </View>
                        
                    )
                }
            />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: Colors.mainLight,
        padding: 15,
    },
    tinyLogo: {
        width: 100,
        height: 100,
      },
};

export default MovieScreen;
