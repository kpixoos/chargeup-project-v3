import React from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/config';

export default function BookingScreen() {
  const handleBooking = async () => {
    const res = await axios.post(`${API_BASE_URL}/bookings`, { total_php: 250 });
    alert(`Checkout URL: ${res.data.checkout_url}`);
  };

  return (
    <View>
      <Text>Book your charging slot</Text>
      <Button title="Pay ₱250" onPress={handleBooking} />
    </View>
  );
}
