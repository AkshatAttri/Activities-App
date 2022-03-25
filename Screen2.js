import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Screen2 extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor : 'cyan'
                }}>
                <ImageBackground source={require('../bg.jpg')}>
                <Text style= {styles.activitiesText}>1. Learn Microsoft Excel (support.microsoft.com/en-us/excel-video-training)</Text>
                <Text style= {styles.activitiesText}>2. Watch one full episode of your favourite Web Series (netflix.com)</Text>
                <Text style= {styles.activitiesText}>3. Write Diary Entry</Text>
                <Text style= {styles.activitiesText}>4. Take a short power nap</Text>
                <Text style= {styles.activitiesText}>5. Learn to solve 3X3 and 4X4 Rubik's Cube (rubiks.com/3-x-3)</Text>
                <Text style= {styles.activitiesText}>6. Go to market and do shopping</Text>
                <Text style= {styles.activitiesText}>7. Do your Cardio Exercises (medicalnewstoday.com/cardio)</Text>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
  activitiesText: {
        fontSize: 15,
        color: "black",
        paddingLeft: 30
    },
});