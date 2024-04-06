import { NavigationContainer } from '@react-navigation/native';
import TabsRoutes from './tb.routes';

export default function Routes(){
    return (
        <NavigationContainer>
            <TabsRoutes/>
        </NavigationContainer>
    )
}

//dentro de navegation container é para colocar a estrategia de navegation, como por exemplo o stack ou tab. 