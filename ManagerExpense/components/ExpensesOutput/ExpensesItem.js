import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { GlobalStyles } from "../../inits/global";
import { formatDate } from "../../inits/date";
import { useNavigation } from "@react-navigation/native";
const ExpensesItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();
  const handleOnpress = () => {
    navigation.navigate("ManagerExpenses", { id });
  };

  return (
    <View>
      <Pressable
        onPress={handleOnpress}
        style={({ pressed }) => {
          pressed ? styles.presse : null;
        }}
      >
        <View style={styles.item}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{formatDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}> {amount}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};
export default ExpensesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 7,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  presse: {
    opacity: 0.6,
  },
});
