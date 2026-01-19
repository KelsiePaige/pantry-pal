import { Text, View, StyleSheet } from 'react-native';

export default function HeaderSummary() {
    return (
        <View style={styles.container}>
            <View style={styles.summaryCard}> {/* TO DO: Make button that links to use soon items */}
                <View style={styles.summaryCardText}>
                    <Text style={styles.text}>USE SOON</Text>
                    <Text style={styles.summaryCardCount}>5</Text> {/* Placeholder for use soon items count */}
                </View>
            </View>
            <View style={styles.summaryCard}> {/* TO DO: Make button that links to expired items */}
                <View style={styles.summaryCardText}>
                    <Text style={styles.text}>EXPIRED</Text>
                    <Text style={styles.summaryCardCount}>3</Text> {/* Placeholder for expired items count */}
                </View>
            </View>
        </View >
    );
}

const backgroundGuide = '#154360'; // Dark blue background for the summary container
const lightBackgroundGuide = '#7fb3d5'; // Lighter blue for individual summary cards

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundGuide, // Placeholder color
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 'auto', // Needs to be revisited
    },
    summaryCard: {
        backgroundColor: lightBackgroundGuide, // Placeholder color
        padding: 8,
        borderRadius: 5,
        width: 150, // Needs to be revisited
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    summaryCardText: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        flexWrap: 'wrap-reverse',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff', // Placeholder color
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'baseline',
        paddingVertical: 0,
        lineHeight: 50,
        height: 36,
    },
    summaryCardCount: {
        color: '#ffd33d', // Placeholder color
        fontSize: 44,
        fontWeight: 'bold',
        paddingVertical: 0,
        lineHeight: 44,
        height: 38,
    },
});