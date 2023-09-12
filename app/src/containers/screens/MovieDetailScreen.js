import React, {Component, Fragment, useEffect, useState} from 'react';
import {
    Text, View, ScrollView, ActivityIndicator, StyleSheet, Image, ImageBackground, TouchableOpacity
} from 'react-native';
import FastImage from "react-native-fast-image";
import {IMAGE_URL} from "../../../config/AppConfig";
import APIService from "../../api";
import Colors from "../../../config/Colors";
import NoRecordFound from "../components/NoRecordFound";
import {Images} from "../../../config/Images";
import AppBar from "../components/AppBar";
import Graph from "../components/common/Graph";

const MovieDetailScreen = ({route, navigation}) => {
    const {id} = route.params;
    const [loader, showLoader] = useState(false);
    const [listData, setListData] = useState({});
    useEffect(() => {
            getMovieDetail(id);
        }, []
    );
    let getMovieDetail = (id) => {
        showLoader(true);
        APIService.getMovieDetail(id).then(response => {
            showLoader(false);
            if (response) {
                setListData(response);
            }
        }).catch(error => {
            showLoader(false);
        });
    }
    return (
        <ScrollView style={styles.rootContainer}>
            {loader ? <ActivityIndicator size="large" color={Colors.green}/> : null}
            {Object.keys(listData).length > 0 ?
                <View style={styles.rootContainer}>


                    <View style={{height: 220}}>
                        <ImageBackground
                            style={styles.image}
                            imageStyle={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}
                            source={{
                                uri: IMAGE_URL + listData.backdrop_path,
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        >
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <TouchableOpacity onPress={()=>{
                                    navigation.goBack();
                                }}>
                                <Image source={Images.backBtn} style={{height: 40, width: 40, marginLeft: 10}}/>
                                </TouchableOpacity>
                                <AppBar />
                            </View>
                        </ImageBackground>
                    </View>
                    <Text
                        style={{
                            padding: 10,
                            fontSize: 12,
                            marginLeft: 5,
                            color: Colors.white}}>
                        {'Ads video editor'}
                    </Text>

                        <View style={{flexDirection: 'row',
                            padding :5,
                            marginBottom: 10,
                            alignItems: 'center',}}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginLeft: 5,
                                    flex:1,
                                    color: Colors.white,
                                    width: 100}}
                                ellipsizeMode="tail"
                                numberOfLines={1}>
                                {listData.title}
                            </Text>
                            <Image source={Images.settingsIcon} style={{width: 35, height: 35}} />
                        </View>
                    <View style={styles.rowContainer}>
                        <Text
                            style={{
                                fontSize: 12,
                                marginLeft: 5,
                                flex:1,
                                color: Colors.white,
                                width: 100}}>
                            {'Project Date:'}
                        </Text>
                        <View style={{marginLeft: 5, flexDirection: 'row', borderRadius: 5,backgroundColor: '#6546B5', paddingVertical: 5, paddingHorizontal: 10}}>
                            <Image source={Images.calendarIcon} style={{width: 15, height: 15}}/>
                            <Text style={{color: Colors.white, fontSize: 10, marginLeft: 3}}>30 Mar : 2023</Text>
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text
                            style={{
                                fontSize: 12,
                                marginLeft: 5,
                                flex:1,
                                color: Colors.white}}>
                            {'Collaboraters: '}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image source={Images.profileImage} style={{width: 30, height: 30}} />
                            <Image source={Images.profileImage} style={{width: 30, height: 30, marginLeft: - 10}} />
                            <Image source={Images.profileImage} style={{width: 30, height: 30, marginLeft: - 10}} />
                        </View>
                    </View>
                    <View style={styles.rowContainer}>
                        <Text
                            style={{
                                fontSize: 12,
                                marginLeft: 5,
                                flex:1,
                                color: Colors.white}}>
                            {'Status: '}
                        </Text>
                        <View style={{flexDirection: 'row', borderRadius: 12,backgroundColor: '#FFC961', opacity: 0.5,paddingVertical: 5, paddingHorizontal: 15}}>

                            <Text style={{color: Colors.white, fontSize: 10, marginLeft: 3}}>Pending</Text>
                        </View>
                    </View>
                    <View style={{ height: 0.5, width:'100%', opacity: 0.3,backgroundColor: Colors.white, marginHorizontal: 20, marginVertical: 20}}  />
                    <View style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                        <Text style={{fontSize: 16,
                            flex:1,
                            color: Colors.white}}> Statistics</Text>
                        <View style={{flexDirection: 'row', padding: 10,borderRadius: 20, borderWidth: 1, borderColor: Colors.white}}>
                            <Text style={{fontSize: 12, color: Colors.white}}> Weekly</Text>
                            <Image source={Images.arrowDown} style={{height:15, width: 15, marginLeft: 10}}/>

                        </View>
                    </View>
                    <Graph />
                </View> : <NoRecordFound/>}

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#7552D0',
        paddingBottom: 80,
    },
    circleRootContainer: {
        alignItems: 'center'
    },
    image: {
        width: '100%', height: '100%'
    },
    imageContainer: {
        borderRadius: 10, height: 250, width: 300, overflow: 'hidden'
    },
    textContainer: {
        flexDirection: 'row', padding: 10, marginTop: 10
    },
    textTitle: {
        textAlign: 'center',
        fontSize: 15,
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        flex:1,
        marginLeft: 5,
        color: Colors.white,
        fontWeight: 'bold',
        width: 100,
    },
    textTagLine: {
        fontSize: 15, textAlign: 'left'
    },
    textTagColor: {
        fontSize: 15, color: Colors.black
    },
    rowContainer: {
        flexDirection: 'row',
        padding :5,
        alignItems: 'center',
    }
});
export default MovieDetailScreen;
