import { View, StyleSheet, Alert,Text,Image } from "react-native";

import { Colors } from "../../constants/Colors";
import OutlinedButton from "../UI/OutlineButton";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { getMapPreview } from "../../util/location";
import { getMapPreview2 } from "../../util/location";
import { useState,useEffect } from "react";
import { WebView } from 'react-native-webview';
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';

function LocationPicker({ onPickLocation }) {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = useState();
  const navigation= useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  
  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);
  useEffect(() => {
    // async function handleLocation() {
    //   if (pickedLocation) {
    //     const address = await getAddress(
    //       pickedLocation.lat,
    //       pickedLocation.lng
    //     );
    //     onPickLocation({ ...pickedLocation, address: address });
    //   }
    // }

    // handleLocation();
    onPickLocation(pickedLocation);
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    console.log(hasPermission);
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  }
  

  let locationPreview = <Text>No location picked yet.</Text>;
  if (pickedLocation) {
    const map=getMapPreview2(pickedLocation.lat, pickedLocation.lng);
    locationPreview = (
      <WebView
      source={{html: map}}
      style={styles.image}
   />
    );
  }
  function pickOnMapHandler() {
    navigation.navigate('Map');
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: "100%",
    // borderRadius: 4
  },
});
