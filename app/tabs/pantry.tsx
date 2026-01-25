import ActiveFilters from '../components/ActiveFilters';
import HeaderSummary from '../components/HeaderSummary';
import PantryItemCard from '../components/PantryItemCard';
import { View, StyleSheet } from 'react-native';

export default function PantryScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.headerSummaryStyles}>
                <HeaderSummary />
            </View>
            <View style={styles.activeFiltersStyles}>
                <ActiveFilters />
            </View>
            <View style={styles.pantryItemCardStyles}>
                <PantryItemCard name='Avocado' quantity={5} status='use_soon' location='pantry' urgencyLabel='Use within 3 days' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
    },
    headerSummaryStyles: {
        // flex: 3,
        position: 'absolute',
        top: 50,
        width: 375,
    },
    activeFiltersStyles: {
        // flex: 1,
        position: 'absolute',
        top: 130,
        width: 375,
    },
    pantryItemCardStyles: {
        // flex: 8,
        position: 'absolute',
        top: 190,
        width: 375,
        height: 500,
    },
});

// TO DO: Add more content to Pantry screen - Active filter tabs, pantry item cards, search bar, etc. needed
// TO DO: Integrate Pantry screen with backend data
// TO DO: Style Pantry screen further
// TO DO: Fix absolute positioning for HeaderSummary component