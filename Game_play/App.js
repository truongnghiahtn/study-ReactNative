import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { Colors } from "./util/color";
import OverGameScreen from "./screens/OverGameScreen"
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [numberValue, setNumberValue] = useState();
  const [isOverGame,setIsOverGame] =useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  const pickNumber = (data) => {
    setNumberValue(data);
    setIsOverGame(false)
  };

  const handleOvergame = (numberOfRounds) => { 
    setIsOverGame(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setNumberValue(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen confirmNumber={pickNumber} />;

  if (numberValue) {
    screen = <GameScreen userNumber={numberValue} onOverGame = {handleOvergame}/>;
  }
  if (isOverGame && numberValue) {
    screen = <OverGameScreen  userNumber={numberValue}
    roundsNumber={guessRounds}
    onStartNewGame={startNewGameHandler}/>;
  }

  return (
    <LinearGradient colors={[Colors.colorPrimary_1, Colors.colorPrimary_4]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/backgound.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imgStyle}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imgStyle: {
    opacity: 0.3,
  },
});
