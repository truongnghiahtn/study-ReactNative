import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
export default function App() {

  useEffect(()=>{
    const sub= Notifications.addNotificationResponseReceivedListener((reponse)=>{
      console.log(reponse);
    })
    const sub1= Notifications.addNotificationReceivedListener((notifi)=>{
      console.log(notifi);
    })
    return ()=>{
      sub.remove();
      sub1.remove();
    }
  },[])



  const handleNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: "this is my notifications",
        data: { useName: "nghia" },
      },
      trigger: {
        seconds: 2,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button title="button" onPress={handleNotification} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
