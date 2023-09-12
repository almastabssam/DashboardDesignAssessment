import {Image, Text, View} from "react-native";
import React from 'react';
import {Images} from "../../../config/Images";
import Colors from "../../../config/Colors";
let Participents =()=>{
    return(
        <View style={{flexDirection: 'row', padding: 10}}>
            <Image source={Images.profileImage} style={{width: 40, height: 40}} />
            <Image source={Images.profileImage} style={{width: 40, height: 40, marginLeft: - 10}} />
            <Image source={Images.addImage} style={{width: 35, height: 35, marginLeft: 5, alignSelf: 'center'}} />
            <View style={{flex:1}} />
            <Image source={Images.shareIcon} style={{width: 40, height: 40, alignSelf: 'center' ,marginRight: 10}} />
            <Image source={Images.settingsIcon} style={{width: 40, height: 40}} />
        </View>
    );
}
export default Participents;
