import React, {JSX} from 'react';
import {View, Text, Button} from 'react-native';

type Props = {
  navigation: any;
};

function CurrentRegistrationScreen({navigation}: Props): JSX.Element {
  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Aktuelle Registrierung</Text>
    <Button
      title="Zurück zum Dashboard"
      onPress={() => navigation.navigate('Dashboard')}
    />
  </View>
}

export default CurrentRegistrationScreen;
