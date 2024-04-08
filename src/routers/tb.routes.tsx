import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Home from '../screens/home/Home';
import Perfil from '../screens/profile/Perfil';
import Metas from '../screens/meta/Metas';
import Historico from '../screens/history/Historico';
import ButtonAdd from '../components/buttonadd/ButtonAdd';
import AddKcal from '../screens/add/options/AddKcal';
import AddWater from '../screens/add/options/AddAgua';
/* import MeuModal from '../screens/add/popup/PopUp'; */

const Tab = createBottomTabNavigator();

export default function TabsRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} >
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name='metas'
                component={Metas}
                options={{
                    tabBarIcon: ({ color}) => <MaterialIcons name="auto-graph" size={24} color={color} />,
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name='Add'
                component={ButtonAdd} 
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({}) => (<ButtonAdd/>),
                }}

            />
            <Tab.Screen
                name='historico'
                component={Historico}
                options={{
                    tabBarIcon: ({ color}) => <FontAwesome6 name="clock-rotate-left" size={24} color={color} />,
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name='perfil'
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />,
                    tabBarLabel: ''
                }}
            />
            <Tab.Screen
                name="AddWater"
                component={AddWater}
                options={{ tabBarButton: () => null }}
                
            />
            <Tab.Screen
                name="AddKcal"
                component={AddKcal}
                options={{ tabBarButton: () => null }}
            />

        </Tab.Navigator>
    )

}
/*
ScreenOptions libera varias opçoes para customizar a tela.
Para mais informações, veja a documentação do react-navigation/stack:https://reactnavigation.org/docs/screen-options/
*/