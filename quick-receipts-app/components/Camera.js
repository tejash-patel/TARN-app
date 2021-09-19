import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, ScrollView, SafeAreaView } from 'react-native';

export default Camera = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        fetch('https://tarn-app-server-api.herokuapp.com/receipts')
            .then((response) => response.json())
            .then((json) => {json.reverse(); setData(json)})
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <SafeAreaView>
            <Text>This screen will show camera</Text>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1A1A1A',
    }
});