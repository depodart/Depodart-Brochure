import { Page, View, Text, Image } from '@react-pdf/renderer';
import { 
  GLOBAL_MAP, 
  BC_LOGO, 
  USGS_LOGO, 
  ONTARIO_LOGO, 
  QUEBEC_ICON,
 } from '../../assets';

// Styles object moved to top for better organization
const styles = {
  page: {
    flexDirection: 'column',
    backgroundColor: '#200D02',
    padding: 0,
  },
  container: {
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 16,
  },
  column: {
    width: '48%',
  },
  cityCard: {
    padding: 4,
    borderRadius: 2,
    marginBottom: 4,
  },
  cityImage: {
    width: '100%',
    height: 96,
    objectFit: 'cover',
    borderRadius: 2,
    marginBottom: 2,
  },
  cityName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#D23B0C',
  },
  map: {
    height: 300,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },
  logo: {
    width: '100%',
    height: 96,
    objectFit: 'contain'
  }
};

// Separate components for better organization
const CityCard = ({ cityName, logoSrc }) => (
  <View style={styles.cityCard}>
    {logoSrc && <Image src={logoSrc} style={styles.logo} />}
    <Text style={styles.cityName}>{cityName}</Text>
  </View>
);

const MapSection = () => (
  <View style={styles.map}>
    <Image src={GLOBAL_MAP} style={styles.mapImage} />
  </View>
);

const CanadianProvinces = () => (
  <View style={styles.row}>
    <View style={styles.column}>
      <CityCard cityName="Quebec" logoSrc={QUEBEC_ICON} />
    </View>
    <View style={styles.column}>
      <CityCard cityName="Ontario" logoSrc={ONTARIO_LOGO} />
    </View>
    <View style={styles.column}>
      <CityCard cityName="British Columbia" logoSrc={BC_LOGO} />
    </View>
  </View>
);

const UsaStates = () => (
  <View style={styles.row}>
    <View style={styles.column}>
      <CityCard cityName="USGS" logoSrc={USGS_LOGO} />
    </View>
  </View>
);

const AustralianCities = () => (
  <View style={styles.row}>
    <CityCard cityName="Australia" />
  </View>
);

export const ThirdPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.container}>
      <CanadianProvinces />
      <MapSection />
      <View style={styles.row}>
        <UsaStates />
        <AustralianCities />
      </View>
    </View>
  </Page>
);