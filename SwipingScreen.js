import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import Swiper from 'react-native-deck-swiper';

export default function SwipingScreen() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCards([
        { id: '1', name: 'Alice', university: 'Harvard', bio: 'Loves coding.' },
        { id: '2', name: 'Bob', university: 'MIT', bio: 'Enjoys sports.' },
        { id: '3', name: 'Charlie', university: 'Stanford', bio: 'Musician.' }
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Text style={styles.cardName}>{card.name}</Text>
            <Text>{card.university}</Text>
            <Text>{card.bio}</Text>
          </View>
        )}
        onSwipedLeft={(cardIndex) => Alert.alert(`Swiped left on ${cards[cardIndex].name}`)}
        onSwipedRight={(cardIndex) => Alert.alert(`Swiped right on ${cards[cardIndex].name}`)}
        cardIndex={0}
        backgroundColor={'#f0f0f0'}
        stackSize={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20
  },
  cardName: {
    fontSize: 24,
    marginBottom: 10
  }
});
