import { View, TextInput, TouchableOpacity, StatusBar, Text, StyleSheet } from "react-native"

export default function Login({ setURL, loadChocolate }) {
    return (
        <View style={styles.container}>
            <TextInput placeholder="The Chocolate Server url"
                style={styles.inputText}
                onChangeText={(text) => setURL(text)} />
            <TouchableOpacity style={styles.button} title="Connect" onPress={() => loadChocolate()}><Text style={styles.text}>TEST</Text></TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    backgroundColor: '#9d9d9d40',
    width: 250,
    height: 42,
    borderRadius: 10,
    paddingLeft: 10,
    outlineStyle: "none",
    color: "white",
    elevation: 5,      
  },
  text: {
    color: "white",
    fontSize: 13,
  },
  button: {
    marginTop: 44,
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 40,
    paddingRight: 40,
    color: "white",
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#fff',
    elevation: 5,
  }
});