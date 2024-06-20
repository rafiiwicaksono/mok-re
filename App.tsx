// // TEST ON BOARD REAL
import { Text, View, Image } from 'react-native';
import { OnboardFlow } from 'react-native-onboard';
import Onboarding from 'react-native-onboarding-swiper';


const App = () => {
  return (
    <View>
      <OnboardFlow
        pages={[
          {
            title: 'Welcome to TESTTT',
            subtitle: 'TEST',
            imageUri: Image.resolveAssetSource(require('./src/assets/app.png')).uri
          },
          {
            title: 'Content',
            subtitle: 'Desc konten',
            imageUri: Image.resolveAssetSource(require('./src/assets/fsg.png')).uri
          }
        ]}
        type={'fullscreen'}
      />

      {/* <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('./src/assets/app.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: 'red',
            image: <Image source={require('./src/assets/fsg.png')} />,
            title: 'ddd',
            subtitle: 'asdasdasdasd',
          },
  ]}
      /> */}

      <Text style={{ margin: 100, fontSize: 20, fontWeight: `bold` }}>HOMMEEEEEEE DUMYY</Text>
    </View>
  );
};

export default App;




// TEST WIDGET ANDRO
// import React, { useState } from 'react'; import { View, TextInput, StyleSheet, NativeModules } from 'react-native';
// import SharedGroupPreferences from 'react-native-shared-group-preferences';
// const group = 'group.asap';
// const SharedStorage = NativeModules.SharedStorage;
// const App = () => {
//   const [text, setText] = useState('');
//   const widgetData = { text, };
//   const handleSubmit = async () => {
//     try {
//       // iOS      
//       await SharedGroupPreferences.setItem('widgetKey', widgetData, group);
//     } catch (error) {
//       console.log({ error });
//     }
//     // Android
//     SharedStorage.set(JSON.stringify({ text }));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.input}
//         onChangeText={newText => setText(newText)}
//         value={text}
//         returnKeyType="send"
//         onEndEditing={handleSubmit}
//         placeholder="Enter the text to display on the Widget" />
//     </View>
//   );
// };
// export default App;
// const styles = StyleSheet.create({
//   container: {
//     marginTop: '50%',
//     paddingHorizontal: 24,
//   },
//   input: {
//     width: '100%',
//     borderBottomWidth: 1,
//     fontSize: 20,
//     minHeight: 40,
//   },
// });

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, NativeModules } from 'react-native';

// const SharedStorage = NativeModules.SharedStorage;

// const App = () => {
//   const [text, setText] = useState('');

//   const handleSubmit = () => {
//     SharedStorage.set(JSON.stringify({ text }));
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         onChangeText={newText => setText(newText)}
//         value={text}
//         returnKeyType="send"
//         onEndEditing={handleSubmit}
//         placeholder="Masukkan teks untuk ditampilkan di Widget"
//       />
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     marginTop: '50%',
//     paddingHorizontal: 24,
//   },
//   input: {
//     width: '100%',
//     borderBottomWidth: 1,
//     fontSize: 20,
//     minHeight: 40,
//   },
// });
