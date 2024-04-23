import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";

const JournalPage = () => {
  const journalEntries = [
    {
      date: "April 21, 2024",
      image: require("/Users/rohitnair/Desktop/YMHDeployable/YMHDeployable/assets/icon.png"),
      entry:
        "Today was a great day! I went for a long walk in the park and enjoyed the beautiful weather.",
    },
    {
      date: "April 20, 2024",
      image: require("/Users/rohitnair/Desktop/YMHDeployable/YMHDeployable/assets/icon.png"),
      entry: "Spent the day at the beach with friends. It was so much fun!",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {journalEntries.map((entry, index) => (
        <View key={index} style={styles.entryContainer}>
          <Text style={styles.date}>{entry.date}</Text>
          <Image source={entry.image} style={styles.image} />
          <Text style={styles.entry}>{entry.entry}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
    marginTop: 75,
  },
  entryContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  entry: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default JournalPage;
