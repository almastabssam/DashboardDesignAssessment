import {Image, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import {Images} from "../../../config/Images";
import Colors from "../../../config/Colors";
let AppBar =({onPress})=>{
    return(
        <View style={{flexDirection: 'row', padding: 10, flex:1, alignItems: 'center'}}>
        <Image source={Images.profileImage} style={{width: 40, height: 40}} />
        <Image source={Images.profileImage} style={{width: 40, height: 40, marginLeft: - 10}} />
        <View style={{ width:40, height: 40, borderRadius: 20, backgroundColor: Colors.black, alignItems: 'center', justifyContent: 'center', marginLeft: -10}}><Text style={{color: Colors.white,}}>+40</Text></View>
            <TouchableOpacity onPress={onPress} style={{width: 35, height: 35}}>
            <Image source={Images.addImage} style={{width: 35, height: 35, marginLeft: 5, alignSelf: 'center'}} />
            </TouchableOpacity>
            <View style={{flex:1}} />
        <Image source={Images.notificationImage} style={{width: 20, height: 20, alignSelf: 'center' ,marginRight: 20}} />
        <Image source={Images.profileImage} style={{width: 40, height: 40}} />
        </View>
    );
}
export default AppBar;
