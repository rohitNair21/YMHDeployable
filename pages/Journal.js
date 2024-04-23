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

  return <ScrollView style={styles.container}></ScrollView>;
};

export default JournalPage;
