import React, {JSX} from "react";
import {Button, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";

type Props = {
  navigation: any;
};

function LandingpageScreen({navigation}: Props): JSX.Element {
  return <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heroContainer}>
          <Text style={styles.heroText}>Hoşgeldiniz!</Text>
        </View>

        <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <Button
          title="Kayit ol"
          onPress={() => navigation.navigate('Register')}
        />

        <Button
          title="Giris yap"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 8,
  },
  heroContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  heroText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    marginVertical: 10
  },
});

export default LandingpageScreen;