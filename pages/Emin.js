import { View, Text, SafeAreaView, StyleSheet } from "react-native";

export default function Emin() {
    return(
        <SafeAreaView style={styles.container}>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      margin: 25,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner_container: {
        display: "flex",
        flexDirection: "column",
        gap: 20
    }
});