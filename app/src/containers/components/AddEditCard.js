import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React from 'react';
import {Images} from "../../../config/Images";
import Colors from "../../../config/Colors";
let AddEditCard =()=>{
    return(
        <View style={{marginVertical: 10, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground source={Images.union} resizeMode="center" style={styles.image}>
            <View style={{flexDirection: 'row'}}>
            <Image source={Images.edit} style={{height: 50, width:100}}/>
            <Image source={Images.addIconPurpl} style={{height: 50, width:50}}/>
                <Image source={Images.joinMeeting} style={{height: 50, width:160}}/>
            </View>
        </ImageBackground>
        </View>
    );
}
export default AddEditCard;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: '100%',
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
