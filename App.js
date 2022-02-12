// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from './src/screens/MainScreen';
import DetailScreen from './src/screens/DetailScreen';
import AroundScreen from './src/screens/AroundScreen';
import NewScreen from './src/screens/NewScreen';
import CafeScreen from './src/screens/CafeScreen';
import Cafe2Screen from './src/screens/Cafe2Screen';
import ru from './src/screens/ru';
/*
const headerRight = () => (
   <View>
      <Text>Right</Text>
   </View>
  );
*/
const Stack = createStackNavigator();
function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName="NODE">
        <Stack.Screen name="MAIN" component={MainScreen}
          options = {{ title:'' }} />
        <Stack.Screen name="DETAIL" component={DetailScreen}
          options={{ headerTitle:props=> <DetailScreen {...props}/>
          }} />
        <Stack.Screen name="AROUND" component={AroundScreen}
          options={{ title:'둘러보기' }} />
        <Stack.Screen name="NEW" component={NewScreen}
          options= {{ title:'새로운 화면'}} />
        <Stack.Screen name="CAFE" component={CafeScreen}
          options= {{ title:'카페'}} />
        <Stack.Screen name="CAFE2" component={Cafe2Screen}
          options= {{ title:'카페'}} />
        <Stack.Screen name="RU" component={ru}
          options= {{ title:'ru'}} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

