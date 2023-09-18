import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, {JSX} from "react";

type Props = {
    value: string;
    onChange: (value: string) => void;
}

function GenderSelection({value, onChange}: Props): JSX.Element {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.radioOption}
                onPress={() => onChange('Erkek')}
            >
                <View style={[styles.circle, value === 'Erkek' && styles.selected]}/>
                <Text style={styles.label}>Erkek</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.radioOption}
                onPress={() => {
                    console.log('Kadın selected');
                    onChange('Kadın')
                }}
            >
                <View style={[styles.circle, value === 'Kadın' && styles.selected]}/>
                <Text style={styles.label}>Kadın</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    circle: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    selected: {
        backgroundColor: '#000',
    },
    label: {
        fontSize: 16,
    }
});

export default GenderSelection;
