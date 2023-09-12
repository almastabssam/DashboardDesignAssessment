import React, {Component, Fragment, useEffect, useState} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet, Pressable, Modal, Image, TextInput, Alert, TouchableHighlight
} from 'react-native';
import Swipeout from 'react-native-swipeout';
import Colors from "../../../config/Colors";
import AppBar from "../components/AppBar";
import {Images} from "../../../config/Images";
import {collaboratorData} from "../../../config/AppConfig";


const Collaboraters = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dataArray, setDataArray] = useState(collaboratorData);
    const [filterData, setFilterData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    // Buttons
    var swipeOutBtns = [
        {
           component:<View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
               <Image source={Images.trashImage}  style={{width: 30, height: 30}} /></View>,
            backgroundColor: 'red',
            onPress: ()=>{
                dataArray.splice(selectedIndex,1);
                setDataArray([...dataArray]);
            }},
    ]
    const Item = ({title, email, index}) => (
        <Swipeout right={swipeOutBtns} style={{backgroundColor: Colors.black1}}>
            <TouchableHighlight onPress={()=>{
                setSelectedIndex(index);
            }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Images.colImage} style={{height: 40, width:40, marginLeft: 10}}/>
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
            <Image source={Images.settingsIconWhite}  style={{width: 30, height: 30, marginRight: 20}}/>
        </View>
            </TouchableHighlight>
        </Swipeout>
    );
    let addCollaborator=()=>{
        setModalVisible(true);
    }
    return (
        <Fragment>
        <View style={styles.rootContainer}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Invite Collaboraters</Text>
                        <Text style={{marginTop: 5}}>Lorem ipsum dolor sit amet consectetur.</Text>
                        <TextInput onChangeText={(value)=>{setName(value)}} placeholder={'Name'} placeholderTextColor={Colors.black1} style={{ borderBottomWidth: 1, color: Colors.black, opacity: 0.3, padding: 10}}/>
                        <TextInput onChangeText={(value)=>{setEmail(value)}} placeholder={'Email'} placeholderTextColor={Colors.black1} style={{ borderBottomWidth: 1, color: Colors.black, opacity: 0.3, padding: 10}}/>
                        <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly'}}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {

                                setDataArray([{title:name, email: email, id: new Date().getTime()}, ...dataArray])
                                setModalVisible(!modalVisible);

                            }}>
                            <Text style={styles.textStyle}>Add Collaborater</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={{alignItems: 'center', marginTop: 30}}>
            <AppBar onPress={addCollaborator}/>
            </View>
            <View style={{ marginTop: 30,margin: 10, padding: 0, flexDirection: 'row', borderColor: Colors.white, borderWidth: 1, borderRadius: 25, opacity: 0.3}}>
                <Image source={Images.searchIcon} style={{width: 50, height: 50}}/>
                <TextInput onChangeText={(value)=>{
                    setSearchValue(value);
                    // Check if searched text is not blank
                    if (value) {
                        const postListFiltered = dataArray.filter(item =>
                            item.title.toLowerCase().includes(value.toLowerCase()),
                        );
                        setFilterData(postListFiltered);
                    } else {
                        // Inserted text is blank
                        // Update FilteredDataSource with masterDataSource
                        setFilterData([]);
                    }
                }} placeholder={'Search for Collaboraters'} placeholderTextColor={Colors.white} style={{padding:10, color: Colors.white}} />
            </View>
            <FlatList
                data={filterData.length?filterData:dataArray}
                renderItem={({item, index}) => <Item title={item.title} email={item.email} index={index}/>}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=>{
                    return( <View style={{height: 0.5, backgroundColor: Colors.white, opacity: 0.1, marginHorizontal: 20}} />)
                }}
            />
        </View>

        </Fragment>
    );
}
const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: Colors.black1,
        paddingBottom: 80,
    },
    listContainer: {
        marginTop: 10,
        flex: 1,
        height: '100%',
        width: '100%',
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flex:1
    },
    title: {
        fontSize: 16,
        color: Colors.white,
    },
    email: {
        fontSize: 12,
        color: Colors.white,
        opacity: 0.7
    },
    modalView: {
        margin: 10,
        width: 320,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        elevation: 2,
        margin: 5,
    },
    buttonOpen: {
        backgroundColor: '#5136FF',
    },
    buttonClose: {
        backgroundColor: '#5136FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        fontSize: 14,
        color: Colors.black1

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
});

export default Collaboraters;
