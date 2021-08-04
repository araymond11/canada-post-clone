import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

const TrackScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.icons}>
                    <Icon type='feathericons' name='menu' color='white'/>
                    <Icon type='feathericons' name='credit-card' color='white' style={styles.card_icon}/>
                    <Icon type='octicon' name='bell' color='white' style={styles.bell_icon}/>
                </View>
                <View>
                    <Text style={styles.text_track}>Track</Text>
                    <TextInput style={styles.input} placeholder='Enter tracking number' placeholderTextColor='gray'/>
                </View>
            </View>
            <Image source={require('../assets/img.jpg')} style={{width:'100%', height:'100%'}}/>
            <Text style={styles.text_bold}>Let's start tracking</Text>
            <Text style={styles.text_description}>Your tracked items will be added here.</Text>
            <TouchableOpacity style={styles.button_track} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.text_innerButton}>Track an Item</Text>
            </TouchableOpacity>
            <View>Test</View>
            <Text style={styles.text_bold}>Let's start tracking</Text>
            <Text style={styles.text_description}>Your tracked items will be added here.</Text>
            <TouchableOpacity style={styles.button_track} onPress={() => Alert.alert('Simple Button pressed')}>
                <Text style={styles.text_innerButton}>Track an Item</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default TrackScreen;

const styles = StyleSheet.create({
    safe_container: {
      height: '100%'
    },
    container: {
      backgroundColor: '#BF1B1B',
      height: '40%',
      width: '100%'
    },
    text_track: {
        color: 'white',
        fontWeight: '600',
        fontSize: 30,
        marginLeft: 10
    },
    text_bold: {
        fontSize: 30,
        padding: 25
    },
    text_description: {
        marginLeft: 25,
        fontSize: 18,
        color: 'gray'
    },
    text_innerButton:{
        color: '#0466C6',
        textAlign:'center',
        fontSize: 18
    },
    button_track:{
        display: 'flex',
        borderWidth: 1,
        borderColor: '#0466C6',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 18,
        padding: 12
    },
    input: {
        height: 40,
        margin: 13,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'white'
      },
      icons:{
        display: 'flex',
        flexDirection: "row",
        padding: 10
      },
      card_icon:{
        marginLeft: 260
      },
      bell_icon:{
        marginLeft: 25
      }
  });