import React, {JSX} from 'react';
import {Text, Button, SafeAreaView, ScrollView, TextInput, StyleSheet, View} from 'react-native';

type Props = {
  navigation: any;
};
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name ist erforderlich'),
  email: Yup.string().email('Ungültige E-Mail').required('E-Mail ist erforderlich'),
  // ... Weitere Validierungen hier ...
});

function RegisterScreen({navigation}: Props): JSX.Element {
  return <SafeAreaView>
    <ScrollView>
      <Formik
        initialValues={{ name: '', email: '', /* ... */ }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <TextInput
              placeholder={'Name'}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              style={styles.input}
            />
            {errors.name && <Text>{errors.name}</Text>}

            <TextInput
              placeholder={'E-Mail'}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
            />
            {errors.email && <Text>{errors.email}</Text>}

            <Button
              onPress={() => handleSubmit()}
              title="Abschicken" />
          </View>
        )}
      </Formik>
    </ScrollView>
  </SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 8,
  },
  input: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});

export default RegisterScreen;
