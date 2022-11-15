import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Animated,
  FlatList,
  Image,
} from "react-native";
import { faker } from "@faker-js/faker";

const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.random.alpha(),
    image: faker.image.avatar(AVATAR_SIZE, AVATAR_SIZE, true),
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const { width, height } = Dimensions.get("screen");
const AVATAR_SIZE = 70;
const SPACING = 20;

export default function App() {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.avatar} />
        <View>
          <Text styles={styles.name}>{item.name}</Text>
          <Text styles={styles.jobTitle}>{item.jobTitle}</Text>
          <Text styles={styles.email}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        keyExtractor={item.key}
        contentContainerStyle={{ padding: SPACING }}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    height,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
  },
  card: {
    flexDirection: "row",
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
  },
  jobTitle: {
    fontSize: 18,
  },
  email: {
    fontSize: 14,
    color: "#00ddcc",
  },
});
