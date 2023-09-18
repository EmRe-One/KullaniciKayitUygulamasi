import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImageLibraryOptions, launchImageLibrary} from 'react-native-image-picker';

const Avatar = () => {
    const [avatarSource, setAvatarSource] = useState(null);

    const selectPhotoTapped = async () => {
        const options: ImageLibraryOptions = {
            presentationStyle: 'fullScreen',
            mediaType: 'photo',
            quality: 1,
            selectionLimit: 1,
        };

        let result = await launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.errorMessage) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets?.length === 0) {
                console.log('No image selected')
            } else {
                const source = {uri: response.assets!![0].uri!!};
                // @ts-ignore
                setAvatarSource(source);
            }
        });

        console.log(result);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={selectPhotoTapped}>
                {avatarSource === null ? (
                    <View style={styles.avatarWrapper}>
                        <Text>Avatar</Text>
                    </View>
                ) : (
                    <Image style={styles.image} source={avatarSource}/>
                )}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarWrapper: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#E0E0E0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
});

export default Avatar;
