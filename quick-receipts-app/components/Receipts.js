import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, ScrollView, SafeAreaView } from 'react-native';

export default Receipts = ({ navigation }) => {
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
            <View style={styles.container}>
                {isLoading ? <Text>Loading...</Text> :
                    (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

                        {
                        data.map((data, index) => {
                            return (
                                <View key = {data.id} style={{ backgroundColor: 'white', paddingBottom: 20, margin: 20 }}>
                                <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>{data.storeName}</Text>
                                <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10 }}>Articles:</Text>
                                <FlatList
                                    data={data.items}
                                    keyExtractor={({ id }, index) => id}
                                    renderItem={({ item }) => (
                                        <Text>{item.name + '. ' + item.value}</Text>
                                    )}
                                />
                            </View>
                                )
                        })}

                    </View>

                    )}
            </View>
        </SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1A1A1A',
    }
});