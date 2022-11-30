import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton({ buttonText, handlePress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handlePress}
        >
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 200,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 20,
    },
});