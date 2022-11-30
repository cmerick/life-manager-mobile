import { View, StyleSheet } from "react-native";
import React from "react";

import LottieView from "lottie-react-native";

export default function LifeStatus() {
    return (
        <View style={styles.container}>
            <LottieView
                autoPlay={true}
                Loop={true}
                source={require('../../../assets/education/education-100.json')}
                //source={require("../../../assets/education/education-100.json")}
                style={styles.educacaoAnimacao}
            />
            <LottieView
                autoPlay={true}
                Loop={true}
                source={require('../../../assets/money/money-100.json')}
                //source={require("../../../assets/money/money-100.json")}
                style={styles.financasAnimacao}
            />
            <LottieView
                autoPlay={true}
                Loop={true}
                source={require("../../../assets/robot/robot-100-100.json")}
                style={styles.roboAnimacao}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
    },
    roboAnimacao: {
        width: 190,
        marginTop: 30,
        marginLeft: 25,
    },
    educacaoAnimacao: {
        width: 100,
        marginTop: 50,
        marginLeft: 5,
        position: "absolute",
    },
    financasAnimacao: {
        width: 100,
        position: "absolute",
        marginTop: 50,
        marginLeft: 95,
    },
});



// import React from "react";
// import { View, StyleSheet } from "react-native";

// import Lottie from "lottie-react-native";


// export default function LifeStatus() {

//     /*Status:
//         100 - Máximo
//         50 - Médio
//         25 - Baixo
//         00 - Em curto (Acabou o game)
//         No robô, nós temos primeiro Felicidade e depois Saúde xx - xx
//     */

//     return (
//         <View style={styles.container}>
//             <Lottie
//                 source={require('../../../assets/education/education-100.json')}
//                 autoPlay
//                 loop
//                 style={styles.educationAnimation}
//             />

//             <Lottie
//                 source={require('../../../assets/money/money-100.json')}
//                 autoPlay
//                 loop
//                 style={styles.financeAnimation}
//             />

//             <Lottie
//                 source={require('../../../assets/robot/robot-100-100.json')}
//                 autoPlay
//                 loop
//                 style={styles.robotAnimation}
//             />

//         </View>
//     )

// }

// const styles = StyleSheet.create({
//     container: {
//         width: 300,
//         height: 300,
//     },
//     robotAnimation: {
//         width: 190,
//         marginTop: 30,
//         marginLeft: 25,
//     },
//     educationAnimation: {
//         width: 100,
//         marginTop: 50,
//         marginLeft: 5,
//         position: "absolute",
//     },
//     financeAnimation: {
//         width: 100,
//         marginTop: 50,
//         marginLeft: 95,
//         position: "absolute",
//     },
// });