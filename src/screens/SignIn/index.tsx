import React from "react";
import { View, Text, StatusBar, Image } from "react-native";

import IlustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon";
import { styles } from "./styles";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Image
        source={IlustrationImg}
        style={styles.image}
        resizeMode={"stretch"}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`} sus juegos {`\n`} facilmente
        </Text>
        <Text style={styles.subtitle}>
          Cree grupos para jugar sus juegos {`\n`} favoritos con sus amigos
        </Text>
        <ButtonIcon title="Entrar por Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
