import {StyleSheet} from "react-native";
import React from 'react';
import {BarChart} from "react-native-chart-kit";
let Graph =()=>{
    const data = {
        labels: ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri"],
        datasets: [
            {
                data: [20, 45, 28, 80, 50, 70]
            }
        ]
    };
    return(
                <BarChart
                    style={styles.barChat}
                    data={data}
                    width={320}
                    height={180}
                    withHorizontalLabels={false}
                    yAxisLabel="$"
                    chartConfig={styles.barChatConfig}
                />
    );
}
export default Graph;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    barChat: {
        marginVertical: 8,
        alignSelf: 'center',
        borderRadius: 16, marginLeft: 10, paddingRight: 5
    },
    barChatConfig: {
        backgroundColor: "#6546B5",
        backgroundGradientFrom: "#6546B5",
        backgroundGradientTo: "#6546B5",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            marginLeft: 10,
        },
        propsForDots: {

        }
    },
});
