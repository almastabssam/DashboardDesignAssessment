import {Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Platform} from "react-native";
import React from 'react';
import {Images} from "../../../config/Images";
import Participents from "./Participents";
import Colors from "../../../config/Colors";
import {BarChart} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {useNavigation} from "@react-navigation/core";
import FastImage from "react-native-fast-image";
import {IMAGE_URL} from "../../../config/AppConfig";
const screenWidth = Dimensions.get("window").width;
let VideoCard =({videoData})=>{
    let navigation = useNavigation();
    const data = {
        labels: ["Sun", "Mon", "Tue", "Wen"],
        datasets: [
            {
                data: [20, 45, 28, 80]
            }
        ]
    };
    return(
        <ImageBackground source={Images.cardImage} resizeMode="contain" style={styles.image}>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('Details',{id: videoData.id});
            }} style={{marginHorizontal: 20, flex:1}}>
            <Participents />
            <View style={{flexDirection: 'row', padding: 20}}>
                {/*<Image source={Images.profileImage} style={{width:40, height: 40}}/>*/}
                <View style={styles.imageContainer}>
                    <FastImage
                        style={{width: 60, height: 60, borderRadius: 10}}
                        source={{
                            uri: IMAGE_URL + videoData.poster_path,
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
                <View style={{marginLeft: 10}}>
                    <Text style={{color: Colors.white, fontSize: 10}}>Ads video editor</Text>
                    <Text style={{color: Colors.white, fontSize: 18}}>{videoData.title}</Text>
                </View>
            </View>
                <BarChart
                    style={{marginVertical: 8,
                        borderRadius: 16, marginLeft: 10, paddingRight: 5}}
                    data={data}
                    width={250}
                    height={180}
                    withHorizontalLabels={false}
                    yAxisLabel="$"
                    chartConfig={{backgroundColor: "#6546B5",
                        backgroundGradientFrom: "#6546B5",
                        backgroundGradientTo: "#6546B5",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            marginLeft: 10,
                        },
                        propsForDots: {

                        }}}
                />
                <View style={{flexDirection: 'row', marginBottom: 15}}>
                    <View style={{marginLeft: 10, flexDirection: 'row', borderRadius: 5,backgroundColor: '#6546B5', padding: 5, marginHorizontal: 5, }}>
                    <Image source={Images.iconMessage} style={{width: 15, height: 15}}/>
                    <Text style={{color: Colors.white, fontSize: 10, marginLeft: 3}}>1</Text>
                    </View>
                    <View style={{marginLeft: 5, flexDirection: 'row', borderRadius: 5,backgroundColor: '#6546B5', paddingVertical: 5, paddingHorizontal: 15}}>
                        <Image source={Images.calendarIcon} style={{width: 15, height: 15}}/>
                        <Text style={{color: Colors.white, fontSize: 10, marginLeft: 3}}>30 Mar : 2023</Text>
                    </View>
                    <View style={{flex:1}}/>
                    <View style={{marginRight: 10, flexDirection: 'row', borderRadius: 12,backgroundColor: '#FFC961', opacity: 0.5,paddingVertical: 5, paddingHorizontal: 15}}>

                        <Text style={{color: Colors.white, fontSize: 10, marginLeft: 3}}>Pending</Text>
                    </View>

                </View>
                <View style={{bottom: 0, right:0, borderRadius: 20, backgroundColor: Colors.white, width: 40, height: 40, marginBottom:  120, marginRight:  10, position: 'absolute', alignItems: 'center', justifyContent: 'center'}}>
                    <Image source={Images.arrowRight} style={{width: 20, height:20}}/>
                </View>
            </TouchableOpacity>
        </ImageBackground>

    );
}
export default VideoCard;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    image: {
        width: 360,
        height: 380,
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    circleRootContainer: {
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 10, height:40, width:40, overflow: 'hidden'
    },
});
