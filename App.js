import "./shim.js"
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import eosjs2 from "eosjs2"

const rpc = new eosjs2.Rpc.JsonRpc('http://dev.cryptolions.io:18888');
const signatureProvider = new eosjs2.SignatureProvider(['5JnTH5SHRuSNMRtdWEmGL4Mtn5xZVeCJM87psQKH5aiGYTh5ded']);
const api = new eosjs2.Api({ rpc, signatureProvider });

export default class App extends React.Component {
  sendTx = async () => {
    try {
      const result = await api.pushTransaction({
          blocksBehind: 3,
          expireSeconds: 30,
          actions: [
            {
              account: 'eosio.token',
              name: 'transfer',
              authorization: [
                {
                  actor: 'tester111111',
                  permission: 'active',
                }
              ],
              data: {
                from: 'tester111111',
                to: 'tester222222',
                quantity: '2.0000 EOS',
                memo: 'This is awesome',
              },
            }
          ],
      });
      console.log(result)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button
          onPress={this.sendTx}
          title="Send"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
