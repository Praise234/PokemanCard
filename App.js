import { Platform, SafeAreaView, StyleSheet } from 'react-native';
import PokemanCard from './components/PokemanCard';

export default function App() {


  const charmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };

  
  return (
    <SafeAreaView style={styles.container}>
      <PokemanCard {...charmanderData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" && 35,
  },
});
