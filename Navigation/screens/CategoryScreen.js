import { View, Text, Pressable, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryCard from "../components/CategoryCard";
const CategoryScreen = ({ navigation }) => {
  const renderCard = (itemData) => {
    const onHandle = () => {
      navigation.navigate("MealsOverview", { id: itemData.item.id });
    };
    return (
      <CategoryCard
        title={itemData.item.title}
        color={itemData.item.color}
        press={onHandle}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      style={styles.conatainer}
      renderItem={renderCard}
      numColumns={2}
      contentContainerStyle={{ margin: 2 }}
      horizontal={false}
    ></FlatList>
  );
};

export default CategoryScreen;
const styles = StyleSheet.create({});
