import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking, ScrollView } from 'react-native';

const App = () => {
  // Fungsi untuk membuka tautan Instagram
  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/bimorhfdz/');
  };
  const openPortoFoto = () => {
    Linking.openURL('https://www.instagram.com/jvrnalrism/');
  };
  const openPorto = () => {
    Linking.openURL('https://www.instagram.com/jvrnalrism/');
  };
  

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={{uri:'https://media.licdn.com/dms/image/D5603AQGdmAl58hi2bg/profile-displayphoto-shrink_800_800/0/1678094522910?e=2147483647&v=beta&t=UbR6Gxr8lqSElJMLPc1dqUzjkWII3i_vbA60yRFfCeg'}}style={styles.profileImage}/>
      <Text style={styles.nameText}>Bimo Rahman Hafidz</Text>
      <Text style={styles.descText}>Saya adalah Murid SMK Telkom PWT</Text>
      <TouchableOpacity style={styles.instagramButton} onPress={openInstagram}>
        <Text style={styles.buttonText}>Instagram</Text>
      </TouchableOpacity>
      <View style={{alignItems:'center',padding:15,}}>
      <Text style={styles.nameText}>Portofolio</Text>
      <View>
      <Image source={require('../assets/porto.png')}style={styles.portoImage}/>
      </View>
      <View style={{position:'relative', right:54}}>
      <Text style={styles.portoText}>Portofolio Foto</Text>
      </View>
      <View style={{position:'relative', left:98,top:-23}}>
      <TouchableOpacity style={styles.portoButton} onPress={openPorto}>
        <Text style={styles.portobuttonText}>Portofolio</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View>
      <Image source={require('../assets/Portofolio.png')}style={styles.portoImage}/>
      </View>
      <View style={{position:'relative', right:38,}}>
      <Text style={styles.portoText}>Portofolio Lainnya</Text>
      </View>
      <View style={{position:'relative', left:98,top:-23}}>
      <TouchableOpacity style={styles.portoButton} onPress={openPorto}>
        <Text style={styles.portobuttonText}>Portofolio</Text>
      </TouchableOpacity>
      </View>
    </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#588061',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    marginTop:25,
    width: 150,
    height: 150,
    borderRadius: 30, // Untuk membuat gambar menjadi lingkaran
  },
  portoImage: {
    width: 250,
    height: 125,
    borderRadius: 10, // Untuk membuat gambar menjadi lingkaran
    alignItems:'baseline',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FDE9EA',
    marginTop: 20,
    marginBottom:5,
  },
  descText: {
    color:'#FDE9EA',
    fontSize: 12,
    fontWeight: 'normal',
    marginTop: 5,
  },
  instagramButton: {
    backgroundColor: '#FDE9EA',
    color:'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  portoButton: {
    backgroundColor: '#FDE9EA',
    padding: 2,
    borderRadius: 2,
    marginTop: 2,
    marginBottom:5,
  },
  buttonText: {
    color:'#588061',
    fontWeight: 'bold',
  },
  portobuttonText: {
    color:'#869F77',
    fontWeight: 'bold',
    fontSize:10,
  },
  portoText:{
    color:'#FDE9EA',
    fontWeight: 'bold',
    fontSize:20,
  },
});

export default App;
