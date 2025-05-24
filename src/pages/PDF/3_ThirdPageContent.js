import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { 
  GLOBAL_MAP, 
  BC_LOGO, 
  USGS_LOGO, 
  ONTARIO_LOGO, 
  QUEBEC_LOGO,
  AUSTRALIA_GOVERNMENT_LOGO
} from '../../assets';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#200D02',
    padding: 0,
    margin: 0,
    width: '100vw',
    height: '100vh',
    minHeight: '100%'
  },
  container: {
    padding: 20,
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topSection: {
    marginBottom: 20
  },
  middleSection: {
    flex: 1,
    marginBottom: 20,
    minHeight: 300
  },
  bottomSection: {
    marginTop: 'auto'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    width: '100%',
    gap: 16
  },
  column: {
    flex: 1,
    minWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    // Enhanced card styling
    border: '1px solid #E5E7EB',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    minHeight: 120,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cityCard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  cityImage: {
    width: '100%',
    maxWidth: 80,
    height: 60,
    objectFit: 'contain',
    borderRadius: 6,
    // Enhanced image styling
    border: '1px solid #F3F4F6',
    padding: 4
  },
  cityName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#D23B0C',
    textAlign: 'center',
    lineHeight: 1.4,
    // Enhanced text styling
    letterSpacing: 0.5,
    textTransform: 'uppercase'
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // No background for map as requested
    backgroundColor: 'transparent'
  },
  mapImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 8
  },
  images: {
    width: '100%',
    maxWidth: 80,
    height: 60,
    objectFit: 'contain',
    borderRadius: 6,
    // Enhanced styling for logo images
    border: '1px solid #F3F4F6',
    padding: 4,
    backgroundColor: '#FAFAFA'
  },
  // Special styling for transparent columns
  transparentColumn: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    padding: 0
  }
});

// Enhanced CityCard component with better visual hierarchy
const CityCard = ({ cityName, logoSrc }) => (
  <View style={styles.cityCard}>
    {logoSrc && (
      <View style={{
        backgroundColor: '#FAFAFA',
        borderRadius: 8,
        padding: 8,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image src={logoSrc} style={styles.images} />
      </View>
    )}
    <Text style={styles.cityName}>{cityName}</Text>
  </View>
);

const MapSection = () => (
  <View style={styles.mapContainer}>
    <Image src={GLOBAL_MAP} style={styles.mapImage} />
  </View>
);

const CanadianProvinces = () => (
  <View style={styles.row}>
    <View style={styles.column}>
      <CityCard cityName="British Columbia" logoSrc={BC_LOGO} />
    </View>
    <View style={[styles.column, {backgroundColor: 'transparent'}]}>
      <CityCard cityName="Ontario" logoSrc={ONTARIO_LOGO} />
    <View style={styles.column}>
      <CityCard cityName="Quebec" logoSrc={QUEBEC_LOGO} />
    </View>
    </View>
  </View>
);

const BottomRow = () => (
  <View style={styles.row}>
    <View style={styles.column}>
      <CityCard cityName="USGS" logoSrc={USGS_LOGO} />
    </View>
    {/* Empty column for balance */}
    <View style={[styles.column, {backgroundColor: 'transparent'}]} />
    {/* ------------------------ */}

    <View style={styles.column}>
      <CityCard cityName="Australia" logoSrc={AUSTRALIA_GOVERNMENT_LOGO} />
    </View>
  </View>
);

export const ThirdPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <CanadianProvinces />
      </View>
      
      <View style={styles.middleSection}>
        <MapSection />
      </View>
      
      <View style={styles.bottomSection}>
        <BottomRow />
      </View>
    </View>
  </Page>
);
