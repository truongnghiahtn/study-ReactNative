import {
  View,
  Text,
  StyleSheet,
  Platform,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
const MealItem = ({ id,title, imageUrl, duration, complexity, affordability }) => {

  const navigation=useNavigation();
  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      id: id,
    });
  }
  return (
    <View style={styles.container}>
      <Pressable
       android_ripple={{ color: '#ccc' }}
       style={({ pressed }) => [
         styles.button,
         pressed ? styles.buttonPressed : null,
       ]}
       onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text>{duration}</Text>
            <Text>{complexity}</Text>
            <Text>{affordability}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
