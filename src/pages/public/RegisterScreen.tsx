import React, {JSX} from 'react';
import {Button, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AvatarPicker from "../../components/AvatarPicker";
import CountryPicker from "../../components/CountryPicker";
import GenderSelection from "../../components/GenderSelection";

type Props = {
    navigation: any;
};

const validationSchema = Yup.object().shape({
    avatar: Yup.string(),
    firstName: Yup.string().required('Isim gereklidir'),
    surName: Yup.string().required('Soyad gereklidir'),
    country: Yup.string(),
    city: Yup.string(),
    uniquePassNo: Yup.string(),
    telephone: Yup.string(),
    dateOfBirth: Yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Doğum tarihi geçerli değil (gg/aa/yyyy)'),
    gender: Yup.string().oneOf(['Erkek', 'Kadın'], 'Cinsiyet seçiniz'),
    kvkk: Yup.boolean().oneOf([true], 'KVKK onayı gereklidir')
});

function RegisterScreen({navigation}: Props): JSX.Element {
    return <KeyboardAvoidingView behavior={"padding"} style={{flex: 1}}>
        <ScrollView>
            <Formik
                initialValues={{
                    avatar: '',
                    firstName: '',
                    surName: '',
                    country: '',
                    city: '',
                    uniquePassNo: '',
                    telephone: '',
                    dateOfBirth: '',
                    gender: '',
                    kvkk: false
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log(values)}
            >
                {({
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      values,
                      errors,
                      touched,
                      isValid
                  }) => (
                    <View style={styles.container}>
                        <AvatarPicker/>

                        <Text>Isim</Text>
                        <TextInput
                            placeholder={'Isim'}
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                            style={styles.input}
                        />
                        {errors.firstName && touched.firstName &&
                            <Text style={styles.errorNote}>{errors.firstName}</Text>}

                        <Text>Soyad</Text>
                        <TextInput
                            placeholder={'Soyad'}
                            onChangeText={handleChange('surName')}
                            onBlur={handleBlur('surName')}
                            value={values.surName}
                            style={styles.input}
                        />
                        {errors.surName && touched.surName && <Text style={styles.errorNote}>{errors.surName}</Text>}

                        <Text>Ülke</Text>
                        <CountryPicker/>

                        <Text>Doğum Tarihi (gg/aa/yyyy)</Text>
                        <TextInput
                            placeholder={'gg/aa/yyyy'}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={values.dateOfBirth}
                            style={styles.input}
                        />
                        {errors.dateOfBirth && touched.dateOfBirth &&
                            <Text style={styles.errorNote}>{errors.dateOfBirth}</Text>}

                        <Text>Cinsiyet</Text>
                        <GenderSelection value={values.gender} onChange={handleChange('gender')}/>
                        {errors.gender && touched.gender && <Text>{errors.gender}</Text>}

                        {/* KVKK Checkbox */}

                        {errors.kvkk && touched.kvkk && <Text style={styles.errorNote}>{errors.kvkk}</Text>}

                        <Button
                            onPress={() => handleSubmit()}
                            disabled={!values.kvkk}
                            title="Abschicken"/>
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>;
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 16,
        gap: 8,
    },
    input: {
        height: 50,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    genderSelection: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 100,
        gap: 8
    },
    errorNote: {
        borderWidth: 1,
        borderRadius: 8,
        borderStyle: 'solid',
        borderColor: 'red',
        color: 'red',
        fontStyle: 'italic',
        paddingHorizontal: 8,
    },
    spacer: {
        flex: 1
    }
});

export default RegisterScreen;
