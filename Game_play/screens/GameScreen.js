import { View, StyleSheet, Text, Alert,FlatList } from "react-native";
import ButtonPrimary from "../components/ButtonPrimary";
import { useEffect, useState } from "react";
import { Colors } from "../util/color";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import TitleSecond from "../components/TitleSecond";
import Card from "../components/Card";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import GuessLogItem from '../components/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onOverGame }) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userNumber)
  );
  const [guessRounds, setGuessRounds] = useState([currentGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onOverGame(guessRounds.length);
    }
  }, [userNumber, currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };
  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.container}>
      <Title>Play game</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <TitleSecond style={styles.styleTitle}>Higher or lower?</TitleSecond>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <ButtonPrimary onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="remove-outline" size={24} color="white" />
            </ButtonPrimary>
          </View>
          <View style={{ flex: 1 }}>
            <ButtonPrimary onPress={nextGuessHandler.bind(this, "greater")}>
            <FontAwesome6 name="plus" size={24} color="white" />
            </ButtonPrimary>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};
export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.colorPrimary_4,
    textAlign: "center",
    paddingVertical: 16,
    borderWidth: 2,
    borderColor: Colors.colorPrimary_4,
  },
  styleTitle: {
    marginBottom: 20,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
