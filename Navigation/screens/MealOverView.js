import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

const MealOverView = ({ route, navigation }) => {
  const { id } = route.params;
  const displayMeals = MEALS.filter((item) => {
    return item.categoryIds.includes(id);
  });
  useLayoutEffect(() => {
    const nameHeader = CATEGORIES.find((item) => item.id === id).title;
    navigation.setOptions({
      title: nameHeader,
    });
  }, [navigation, id]);

  return (
    <>
      <MealsList items={displayMeals} />
    </>
  );
};
export default MealOverView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
