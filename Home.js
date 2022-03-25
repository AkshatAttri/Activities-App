import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
             <ImageBackground source={require('../bg.jpg')} style={styles.backgroundImage}>                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Activities App</Text>
                    </View>
                    <Text style={styles.routeText}>How much free time do you have?</Text>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Screen1")
                    }>
                       <Text style={styles.routeText}>30 Minutes</Text>
                        
                    </TouchableOpacity>
            
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Screen2")
                    }>
                        <Text style={styles.routeText}>1 Hour</Text>
                       
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Screen3")
                    }>
                        <Text style={styles.routeText}>2 Hours</Text>
                       
                    </TouchableOpacity>
                     
             </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
            },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: 'cyan'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'black'
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 25,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        paddingLeft: 30
    },
    
});