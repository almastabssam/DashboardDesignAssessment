import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGE_URL} from "../../../config/AppConfig";

import Colors from "../../../config/Colors";
import { useNavigation } from '@react-navigation/native';
function MovieListItem ({item}) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Details',{id: item.id});
            }}
            style={styles.rootContainer}>
            <View style={styles.circleRootContainer}>
                <View style={styles.imageContainer}>
                    <FastImage
                        style={{width: '100%', height: '100%'}}
                        source={{
                            uri: IMAGE_URL + item.poster_path,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                </View>
            </View>

            <Text
                style={styles.textTitle}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.title}
            </Text>
            <Text
                style={styles.textDate}
                numberOfLines={1}>
                {item.release_date}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ddd',
    },
    circleRootContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 10, height:250, width:300, overflow: 'hidden'
    },
    circleContainer: {
        marginTop: -30, marginLeft: 10
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 16,
        color:Colors.black,
        fontWeight: 'bold'
    },
    textDate: {
        textAlign: 'center',
        fontSize: 15,
    },
});

export default MovieListItem;
