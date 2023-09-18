import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Country, CountryDto} from "../models/Country";

const CountryPicker = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then((response) => response.json())
            .then((data) => {
                const countryNames = data.map((country: CountryDto) => ({
                    name: country.name.common,
                    native: country.name.nativeName,
                    code: country.cca3,
                    turName: country.translations.tur.common
                }));
                setCountries(countryNames);
            })
            .catch((error) => console.error('Error fetching countries:', error));
    }, []);

    return (
        <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
            <Text>Select a Country:</Text>
            <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
            >
                {countries.map((country: Country) => (
                    <Picker.Item key={country.code} label={country.name} value={country.code}/>
                ))}
            </Picker>
        </View>
    );
};

export default CountryPicker;
