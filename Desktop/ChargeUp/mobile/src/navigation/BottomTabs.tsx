import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from '../features/map/MapScreen';
import BookingScreen from '../features/booking/BookingScreen';
import RouteScreen from '../features/route/RouteScreen';
import ProfileScreen from '../features/profile/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Bookings" component={BookingScreen} />
      <Tab.Screen name="Route" component={RouteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
