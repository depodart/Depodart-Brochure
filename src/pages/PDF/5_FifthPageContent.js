import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { 
  BC_LOGO, 
  USGS_LOGO, 
  ONTARIO_LOGO, 
 logo } from '../../assets';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column', 
    backgroundColor: '#D23B0C',
    margin: 0,
    width: '100%',
    height: '100%'
  },
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    backgroundColor: '#200D02',
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: '100%'
  },
  topbarTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 30
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 8,
  },
  imageContainer: {
    border: '1px solid #FFFFFF',
    width: '40%',
    marginRight: 20
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'cover',
    borderRadius: 6
  },
  textContainer: {
    width: '60%',
    flex: 1
  },
  rowTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8
  },
  rowDescription: {
    color: '#FFFFFF',
    fontSize: 11,
    lineHeight: 1.4,
    textAlign: 'justify'
  },
  mainTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(32, 13, 2, 0.8)',
    borderRadius: 8
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  logo: {
    width: 48,
    height: 48
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1
  }
});

const RegionRow = ({ imageSrc, title, description }) => (
  <View style={styles.row}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} src={imageSrc} />
    </View>
    <View style={styles.textContainer}>
      <View style={{
        borderBottomWidth: 2,
        borderBottomColor: '#FFFFFF',
        borderBottomStyle: 'solid',
        marginBottom: 8,
        paddingBottom: 4,
        width: '80%'
      }}>
        <Text style={styles.rowTitle}>{title}</Text>
      </View>
      <Text style={styles.rowDescription}>{description}</Text>
    </View>
  </View>
);

const regions = [
  {
    imageSrc: BC_LOGO,
    title: 'Canada Coverage',
    description: 'Our comprehensive data collection across Canada covers vast territories including urban centers, rural areas, and remote regions. This extensive coverage provides valuable insights into diverse geographical and demographic patterns across the country.'
  },
  {
    imageSrc: ONTARIO_LOGO, 
    title: 'Australia Expansion',
    description: 'Australia represents a significant portion of our data collection efforts, spanning from major metropolitan areas to the vast outback regions. This coverage enables comprehensive analysis of unique Australian landscapes and population distributions.'
  },
  {
    imageSrc: USGS_LOGO,
    title: 'United States Integration', 
    description: 'The United States data collection encompasses diverse regions from coast to coast, providing rich datasets that capture the complexity and diversity of American geography, demographics, and infrastructure patterns.'
  }
];

export const FifthPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.topbar}>
      <Text style={styles.topbarTitle}>
        MINERALS MAPS SOLUTIONS
      </Text>
      <View style={styles.logoContainer}>
        <Image src={logo} style={styles.logo} />
        <Text style={styles.companyName}>DepoDart</Text>
      </View>
    </View>

    <View style={styles.container}>
      {regions.map((region, index) => (
        <RegionRow key={index} {...region} />
      ))}
    </View>
  </Page>
);
