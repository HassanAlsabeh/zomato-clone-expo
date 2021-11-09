import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,Image} from 'react-native'

export default function updateUserInfo ({navigation}){
  
 
      return (
         <View style = {styles.container}>
            <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
              }}
            />
            </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "#DF0038"
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address 1"
               placeholderTextColor = "#DF0038"
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               />
             <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address 2"
               placeholderTextColor = "#DF0038"
               autoCapitalize = "none"
            //    onChangeText = {this.handleEmail}
               />
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#DF0038"
               autoCapitalize = "none"
               keyboardType="numeric"
            //    onChangeText = {this.handlePassword}
               />
            
            <TouchableOpacity
               style = {styles.submitButton}
             >
               <Text style = {styles.submitButtonText}> Edit </Text>
            </TouchableOpacity>
         </View>
      )
   }



const styles = StyleSheet.create({
   container: {
       paddingBottom:100,
      paddingTop: 29,
     backgroundColor:"#c9c9c9"
   },
   headerContent: {
    padding: 30,
    alignItems: "center",
  },
   avatar: {
       marginLeft:150,
    width: 160,
    height: 160,
    borderRadius: 90,
    borderWidth: 5,
    borderColor: "white",
    marginBottom: 10,
    marginLeft: 15,
  },
   input: {
      margin: 25,
      height: 40,
      borderColor: '#DF0038',
      borderWidth: 1,
      borderRadius:20,
      textAlign:"center",
      fontSize:20
      
   },
   submitButton: {
      backgroundColor: '#DF0038',
      padding: 10,
      margin: 15,
      height: 50,
      borderRadius:20,
      
   },
   submitButtonText:{
      color: 'white',
      fontSize:25,
      textAlign:"center",
     
   }
})