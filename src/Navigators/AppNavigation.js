import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import strings from '../Constansts/Strings'
import HomePage from '../Screens/Home/TaskListViewScreen'

const Stack = createNativeStackNavigator()

export default function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomePage} options={{
                title: "Todo List"
            }} />
        </Stack.Navigator>
    )
}

