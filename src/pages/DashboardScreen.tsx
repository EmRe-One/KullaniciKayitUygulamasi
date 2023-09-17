import React from 'react';
import {View, Text, Button} from 'react-native';

type Props = {
  navigation: any;
};

function DashboardScreen({navigation}: Props): JSX.Element {
  return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>Dashboard</Text>
    <Button
      title="Zur Registrierungsseite"
      onPress={() => navigation.navigate('Register')}
    />
    <Button
      title="Zur Demoseite"
      onPress={() => navigation.navigate('Demo')}
    />
  </View>;
}

export default DashboardScreen;
