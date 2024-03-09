import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import {MEALS} from "../data/dummy-data";
import { useSelector } from 'react-redux';
const Favorite = () => {
  const {ids}= useSelector((state)=>state.favorite)

  const favoriteMeals = MEALS.filter((meal) =>
  ids.includes(meal.id)
  );

  if (favoriteMeals.length==0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}

export default Favorite;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});