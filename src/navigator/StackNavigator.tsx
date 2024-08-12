import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { Registro } from '../screens/Registro';
import { Listas } from '../screens/Listas';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:"rgb( 212, 8, 8 )"
        }
        }}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Registro" component={Registro} />
      <Stack.Screen name="Lista" component={Listas} />
    </Stack.Navigator>
  );
}