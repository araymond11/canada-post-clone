import React from 'react';
import { DrawerActions } from 'react-navigation-drawer';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { Icon } from 'react-native-elements';
import MapView from "react-native-maps";

const FindPostOfficeScreen = (props: any) => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <View style={styles.icons}>
                    <TouchableOpacity onPress={()=> {props.navigation.dispatch(DrawerActions.toggleDrawer())}}>
                        <Icon type='feathericons' name='menu' color='white'/>
                    </TouchableOpacity>
                        <Text style={styles.header_text}>Find a post office</Text>
                </View>
                <View>
                    <TextInput style={styles.input} placeholder='Enter adress, city or place' placeholderTextColor='gray'/>
                </View>
            </View>
            <MapView style={styles.map}
                  initialRegion={{
                    latitude: 46.829853,
                    longitude: -71.254028,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05
                  }}/>
        </SafeAreaView>
    )
}

export default FindPostOfficeScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#BF1B1B',
      height: '70%',
      width: '100%'
    },
    header_text: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15 ,
        marginLeft: 90
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'white'
      },
      icons:{
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
      },
      map:{
        height: '100%',
        width: '100%'
      }
  });