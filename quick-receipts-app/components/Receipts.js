import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, FlatList, ScrollView, SafeAreaView } from 'react-native';

export default Receipts = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);


    useEffect(() => {
        fetch('https://tarn-app-server-api.herokuapp.com/receipts')
            .then((response) => response.json())
            .then((json) => {
                json.reverse(); json.forEach(d => {
                    d["total"] = d.items.map(item => item.value).reduce((prev, next) => Number(prev) + Number(next));

                    d.total = d.total.toFixed(2);
                }); 
                
                setData(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);



    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.container}>
                    {isLoading ? <Text>Loading...</Text> :
                        (<View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

                            {
                                data.map((data, index) => {
                                    return (
                                        <View key={data.id} style={{ backgroundColor: 'white', paddingBottom: 20, margin: 20 }}>
                                            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>{data.storeName}</Text>
                                            <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>{"Address:" + data.address}</Text>

                                            <Text> ###########################################</Text>

                                            <FlatList
                                                data={data.items}
                                                keyExtractor={({ id }, index) => id}
                                                renderItem={({ item }) => (
                                                    <View>
                                                        <Text>{'QTY: ' + item.quantity + ' -- ' + item.name}</Text>
                                                        <Text style={{ textAlign: 'right' }}>{'$ ' + item.value} </Text>
                                                    </View>

                                                )}
                                            />
                                            <Text> ###########################################</Text>

                                            <Text style={{ textAlign: 'right' }}>SubTotal: {data.total}</Text>
                                            <Text style={{ textAlign: 'right' }}>Total: {data.total}</Text>

                                        </View>
                                    )
                                })}

                        </View>

                        )}
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#1A1A1A',
    }
});