import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default class Screen3 extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    backgroundColor : 'cyan'
                }}>
                <ImageBackground source={require('../bg.jpg')}>
                <Text style={styles.activitiesText}>1. Watch a T-20 Match (youtube.com)</Text>
                <Text style={styles.activitiesText}>2. Go out to a restaurant with friends and family</Text>
               <Text style={styles.activitiesText}>3. Paint any real world object</Text>
               <Text style={styles.activitiesText}>4. Visit any local museum or heritage site (google.com/near-me)</Text>
               <Text style={styles.activitiesText}>5. Do meditation and sing prayer</Text>
               <Text style={styles.activitiesText}>6. Learn basics of any new language (duolingo.com)</Text>
               <Text style={styles.activitiesText}>7. Follow your hobby and spend quality time with family</Text>
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