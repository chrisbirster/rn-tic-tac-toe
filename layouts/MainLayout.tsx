import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../constants/colors';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <LinearGradient
            colors={[Colors.primary500, Colors.secondary500]}
            style={styles.gradient}
        >
            <ImageBackground
                source={require('../assets/images/background.jpg')}
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaView style={styles.rootScreen}>
                    {children}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    rootScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        opacity: 0.20,
    },
});