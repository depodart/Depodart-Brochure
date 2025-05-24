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
    paddingHorizontal: 40,
    paddingVertical: 20,
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
  titleSection: {
    marginBottom: 30,
    zIndex: 1
  },
  topCardsSection: {
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
    gap: 12 // Reduced gap
  },
  column: {
    flex: 1,
    height: 100, 
    width: 100, 
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #D23B0C',
    borderRadius: 8
  },
  cityCard: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8 // Reduced from 12 to 8
  },
  cityImage: {
    width: '100%',
    maxWidth: 50, // Reduced from 80 to 50
    height: 40, // Reduced from 60 to 40
    objectFit: 'contain',
    borderRadius: 4 // Reduced from 6 to 4
  },
  cityName: {
    fontSize: 10, // Reduced from 13 to 10
    fontWeight: 'bold',
    color: '#D23B0C',
    textAlign: 'center',
    lineHeight: 1.3, // Reduced from 1.4 to 1.3
    letterSpacing: 0.3, // Reduced from 0.5 to 0.3
    textTransform: 'uppercase'
  },
  mapContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    maxWidth: 100, // Reduced from 80 to 50
    height: 100, // Reduced from 80 to 50
    objectFit: 'contain',
    borderRadius: 4, // Reduced from 6 to 4
  },
  transparentColumn: {
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    padding: 0
  },
  title: {
    // color: '#D23B0C',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    lineHeight: 1.5,
    paddingHorizontal: 10
  }
});

const CityCard = ({ cityName, logoSrc }) => (
  <>
    <Text style={styles.cityName}>{cityName}</Text>
  <View style={styles.cityCard}>
    {logoSrc && (
      <View style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image src={logoSrc} style={styles.images} />
      </View>
    )}
  </View>
    </>
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
    </View>
    <View style={styles.column}>
      <CityCard cityName="Quebec" logoSrc={QUEBEC_LOGO} />
    </View>
  </View>
);

const BottomRow = () => (
  <View style={styles.row}>
    <View style={styles.column}>
      <CityCard cityName="United States" logoSrc={USGS_LOGO} />
    </View>
    <View style={[styles.column, {backgroundColor: 'transparent', border: '1px solid transparent'}]} />
    <View style={styles.column}>
      <CityCard cityName="Australia" logoSrc={AUSTRALIA_GOVERNMENT_LOGO} />
    </View>
  </View>
);

export const ThirdPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>
        We are continuously expanding our data collection. As of now, it spans an impressive 26 million square kilometers across Canada, Australia, and the United States—an area nearly twice the size of Russia and representing 17% of the world’s total landmass.
        </Text>
      </View>

      <View style={styles.middleSection}>
        <MapSection />
      </View>

      <View style={styles.topCardsSection}>
        <CanadianProvinces />
      </View>
    
      <View style={styles.bottomSection}>
        <BottomRow />
      </View>
    </View>
  </Page>
)
