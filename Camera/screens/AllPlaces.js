import { View, Text, StyleSheet } from "react-native";
import PlaceList from "../components/Place/PlaceList";
import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { fetchPlaces } from "../util/database";
const AllPlaces = ({route}) => {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }
    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);
  return <PlaceList places={loadedPlaces}/>;
};
export default AllPlaces;

const styles = StyleSheet.create({
  conatiner: {},
});
