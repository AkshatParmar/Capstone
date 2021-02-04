// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import  RootStackScreen  from './screens/RootStackScreen';
// import '@fortawesome/fontawesome-free/js/all.js';

// import 'react-native-gesture-handler';

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
//   Button,
// } from 'react-native';


// const HomeScreen = () => {
//   return(
//     < View style={{ flex:1, alignItems: 'center' , justifyContext: 'center'}} >
//         <Text>Fix My Mix Home Screen</Text>
//         <Button 
//           title = "Go to details screen"
//         />
//     </View>
//   );
// };


// const Stack = createStackNavigator();

// const App = () => React$Node = () => {
//   return (
//     <NavigationContainer>{

//       <Stack.Navigator>
//         <Stack.Screen name= "Home" component={HomeScreen} />
//       </Stack.Navigator>
//       }</NavigationContainer>
//   );
// };


// export default App;
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text>Fix My Mix {props.name}!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Mix ' />
      <Greeting name='Jaina' />
      <Greeting name='Valeera' />
    </View>
  );
}

export default LotsOfGreetings;