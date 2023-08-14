import {
	ParamListBase,
	RouteConfig,
	StackNavigationState,
} from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { NativeStackNavigationEventMap } from '@react-navigation/native-stack/lib/typescript/src/types';
import {HomeScreen} from '../src/screens'
import { TRootStackParamList } from '../src/types/exportedTypes';



type TNavigationScreensConfig = RouteConfig<
	TRootStackParamList,
	keyof TRootStackParamList,
	StackNavigationState<ParamListBase>,
	NativeStackNavigationOptions,
	NativeStackNavigationEventMap
>
/**
 * can be extended for login routes using the below code
 */
// & {
// 	protectedRoute?: boolean;
// };

export const ScreenConfig: TNavigationScreensConfig[] = [
	
	{
		name: 'Home',
		component: HomeScreen,
		options: { headerShown: false },
	},
	
];
