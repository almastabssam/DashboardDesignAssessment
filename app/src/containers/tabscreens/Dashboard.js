import React, {Component, Fragment, useEffect, useState} from 'react';
import {
    Text,
    View,
    FlatList,
    StyleSheet, ActivityIndicator, ScrollView
} from 'react-native';
import APIService from "../../api";
import MovieListItem from "../components/MovieListItem";
import Colors from "../../../config/Colors";
import NoRecordFound from "../components/NoRecordFound";
import AppBar from "../components/AppBar";
import DayTime from "../components/DayTime";
import VideoCategoryList from "../components/VideoCategoryList";
import VideoCard from "../components/VideoCard";
import AddEditCard from "../components/AddEditCard";

const Dashboard = () => {
    const [loader, setShowLoader] = useState(true);
    const [listData, setListData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
            getLatestMovies(currentPage)
        }, []
    );
    let getLatestMovies = (pageNo) => {
        setShowLoader(true);
        APIService.getLatestMovies(pageNo).then(response => {
            setShowLoader(false);
            if (response.results && response.results.length) {
                if (listData.length) {
                    setListData([...listData, ...response.results]);
                } else {
                    setListData(response.results);
                }

            }
        }).catch(error => {
            setShowLoader(false);
        });
    }

    return (
        <Fragment>
            {loader ? <ActivityIndicator size="large" color={Colors.green}/> : null}
            {listData.length?<View style={styles.rootContainer}>
                <ScrollView>
                    <AppBar />
                    <DayTime />
                    <VideoCategoryList />
                    <VideoCard videoData={listData[0]}/>
                    <AddEditCard />
                </ScrollView>
            </View>: NoRecordFound}

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
});

export default Dashboard;
