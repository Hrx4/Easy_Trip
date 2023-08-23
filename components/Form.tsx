import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TourForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [destination, setDestination] = useState('');
  const [tourBudget, setTourBudget] = useState('');
  const [tourDays, setTourDays] = useState('');
  const [monthOfTour, setMonthOfTour] = useState('');
  const [otherMessage, setOtherMessage] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    const formData = {
      name,
      phoneNumber,
      email,
      address,
      destination,
      tourBudget,
      tourDays,
      monthOfTour,
      otherMessage,
    };
    console.log(formData);
  };

  return (
    <View style={styles.container}>
      <Text>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>Phone Number:</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text>Address:</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
      />
      <Text>Destination:</Text>
      <TextInput
        style={styles.input}
        value={destination}
        onChangeText={setDestination}
      />
      <Text>Tour Budget:</Text>
      <TextInput
        style={styles.input}
        value={tourBudget}
        onChangeText={setTourBudget}
        keyboardType="numeric"
      />
      <Text>Tour Days:</Text>
      <TextInput
        style={styles.input}
        value={tourDays}
        onChangeText={setTourDays}
        keyboardType="numeric"
      />
      <Text>Month of Tour:</Text>
      <TextInput
        style={styles.input}
        value={monthOfTour}
        onChangeText={setMonthOfTour}
      />
      <Text>Other Message:</Text>
      <TextInput
        style={styles.input}
        value={otherMessage}
        onChangeText={setOtherMessage}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 12,
  },
});

export default TourForm;