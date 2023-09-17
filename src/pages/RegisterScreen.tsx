import React from 'react';
import {View, Text, Button} from 'react-native';

type Props = {
  navigation: any;
};

function RegisterScreen({navigation}: Props): JSX.Element {
  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Registrierungsseite</Text>
    <Button
      title="Zur aktuellen Registrierung"
      onPress={() => navigation.navigate('CurrentRegistration')}
    />
  </View>;
}

export default RegisterScreen;
