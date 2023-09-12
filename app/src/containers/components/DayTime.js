import {Image, Text, View} from "react-native";
import React from 'react';
import {Images} from "../../../config/Images";
import Colors from "../../../config/Colors";
let DayTime =()=>{
    return(
        <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10, flex:1}}>
            <Text style={{color: '#8386FF', fontSize: 10}}>Your recent videos</Text>
            <Text style={{color: Colors.white, fontSize: 48, fontWeight: 'bold'}}>03:24</Text>
            <Text style={{color: '#BB62A0', fontSize: 42, marginTop: -20}}>Monday</Text>
        </View>
            <Image source={Images.searchIcon} style={{width: 40, height: 40, alignSelf: 'center', marginRight: 20}} />
        </View>
    );
}
export default DayTime;
