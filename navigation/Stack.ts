import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList } from '../src/types/exportedTypes';

export const Stack = createNativeStackNavigator<TRootStackParamList>();
