// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View>
          {data ? (
            <Text>Dados recebidos: {JSON.stringify(data)}</Text>
          ) : (
            <Text>Nenhum dado recebido.</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// import { View, Text, Button, Alert } from 'react-native';

// const API_URL = 'https://api.thecatapi.com/v1/images/search';

// const App = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (error) {
//       console.error('Erro ao buscar dados:', error);
//     }
//   };

//   const updateData = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ /* dados para atualização */ }),
//       });
//       const jsonData = await response.json();
//       console.log('Dados atualizados:', jsonData);
//     } catch (error) {
//       console.error('Erro ao atualizar dados:', error);
//     }
//   };

//   const createData = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ /* dados para criação */ }),
//       });
//       const jsonData = await response.json();
//       console.log('Dados criados:', jsonData);
//     } catch (error) {
//       console.error('Erro ao criar dados:', error);
//     }
//   };

//   const deleteData = async () => {
//     try {
//       const response = await fetch(API_URL, {
//         method: 'DELETE',
//       });
//       console.log('Dados deletados com sucesso!');
//     } catch (error) {
//       console.error('Erro ao deletar dados:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Dados da API: {JSON.stringify(data)}</Text>
//       <Button title="Atualizar Dados" onPress={updateData} />
//       <Button title="Criar Dados" onPress={createData} />
//       <Button title="Deletar Dados" onPress={deleteData} />
//     </View>
//   );
// };

// export default App;
