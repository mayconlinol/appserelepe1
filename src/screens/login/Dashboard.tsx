import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import Colors from "../../constants/Colors";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, signOut, } from "firebase/auth";


export default function Dashboard({ navigation }: { navigation: any }) {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  /* const [userInfo, setUserInfo] = useState<any | undefined>(null); */
  const handleSignout = async () => {


    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  };
  const getData = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      // Recupere o documento do usuário no Firestore
      const userDocRef = doc(db, 'users', user.uid); // Substitua 'Users' pelo nome da sua coleção
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        setUserName(userData?.Name); // Ajuste o nome do campo conforme sua estrutura de dados
        console.log('Nome do usuário:', userName);
        // Agora você pode usar o nome do usuário onde precisar
      } else {
        console.log('Documento do usuário não encontrado.');
      }
    } else {
      console.log('Usuário não autenticado.');
    }
    // Get the current user
    if (user) {
      // Fetch the user's email
      setEmail(user.email);
      console.log(email)
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>{userName}</Text>
      <Text style={{ fontSize: 25 }}>{email}</Text>
      <Text style={{ fontSize: 25 }}>Welcome Fam!</Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignout}>
          <Text style={{ color: Colors.white, fontSize: 20 }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 50,
  },
});
