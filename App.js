import { app } from './firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './AuthContext';
import LoginScreen from './LoginScreen';
import SwipingScreen from './SwipingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Swiping" component={SwipingScreen} options={{ headerTitle: 'Discover' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
