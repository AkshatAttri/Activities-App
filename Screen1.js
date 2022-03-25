import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Screen1 extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor : 'cyan'
                }}>
                <ImageBackground source={require('../bg.jpg')}>
                <Text style= {styles.activitiesText}>1. Read a chapter of book (read.amazon.in)</Text>
                <Text style= {styles.activitiesText}>2. Do stretching (youtu.be/lJUIDBBqJOE)</Text>
                <Text style= {styles.activitiesText}>3. You can do 20 Surya Namaskaras (artofliving.org/in-en/yoga/yoga-poses/sun-salutation)</Text>
                <Text style= {styles.activitiesText}>4. You can take a walk of 2.5 kms</Text>
                <Text style= {styles.activitiesText}>5. Learn basics of HTML (w3schools.com/html/html_intro.asp)</Text>
                <Text style= {styles.activitiesText}>6. You can listen to your favourite playlist (spotify.com)</Text>
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