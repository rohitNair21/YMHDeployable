import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function Main() {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.inner_container}>
                <Text style={ {color: "green"} }>Hello world!</Text>
                <Image source={require('../assets/pepe-wave.gif')} />
            </View>
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