import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';

import SplashScreen from './components/SplashScreen';
import DetailScreen from './screen/DetailScreen';
import TransactionScreen from './screen/TransactionScreen';
import WishlistScreen from './screen/WishlistScreen';
import HistoryScreen from './screen/HistoryScreen';
import RegisterScreen from './screen/RegisterScreen';
import LoginScreen from './screen/LoginScreen';
import EditProfile from './screen/EditProfile';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transaksi" component={TransactionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Edit Profil" component={EditProfile} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
