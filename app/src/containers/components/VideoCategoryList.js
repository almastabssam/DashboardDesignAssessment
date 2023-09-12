import {FlatList, Text, View, StyleSheet} from "react-native";
import React from 'react';
import {Images} from "../../../config/Images";
import Colors from "../../../config/Colors";
import {videoCategoryData} from "../../../config/AppConfig";
let VideoCategoryList =()=>{

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={{backgroundColor: '#3D3D3D',marginLeft: 5,color: '#CBCBCB', borderRadius: 10, height: 15,width: 15,textAlign: 'center', fontSize: 10}}>3</Text>
        </View>
    );
    return(
        <View style={{flexDirection: 'row', padding: 10, }}>
            <View style={{backgroundColor: '#6B32FF', alignItems: 'center', flexDirection: 'row', padding: 7, borderRadius: 30, width: 70, height:50}}>
                <Text style={{color: Colors.white, marginLeft: 10}}>All</Text>
                <Text style={{backgroundColor: '#8386FF',marginLeft: 5,color: Colors.white, borderRadius: 10, height: 15,width: 15,textAlign: 'center', fontSize: 10}}>5</Text>
            </View>
            <FlatList
                data={videoCategoryData}
                horizontal={true}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}
export default VideoCategoryList;
const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 5,
        borderWidth:1,
        borderRadius: 20,
        borderColor: '#4D4D4D',
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        color: '#4D4D4D',
    },
});
