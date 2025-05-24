import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { 
  
  PERSPECTIVE_MAP, 
  ORE3D_MAP, 
  FOLDER_RESULTS, 
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
    textAlign: 'left',
    marginBottom: 20,
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
    imageSrc: PERSPECTIVE_MAP,
    title: 'AI for 2D mineral deposits targeting',
    description: 'Our models identify hidden patterns in your geodata, highlighting high-potential zones quickly—saving time, money, and improving early-stage exploration accuracy.'
  },
  {
    imageSrc: FOLDER_RESULTS,
    title: 'Visual Tools for Data Interpretation', 
    description: 'Our interactive visual tools turn complex geoscientific data into clear, intuitive visuals—making it easier to analyze, interpret, and communicate insights. '
  },
  {
    imageSrc: ORE3D_MAP, 
    title: 'AI for 3D Mine Modeling',
    description: 'Build 3D representations of mineral deposits  to support mine planning and development —leading to smarter extraction strategies, reduced operational risks, and more efficient resource management.'
  },
];

export const FourthPageContent = () => (
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
    <Text style={styles.mainTitle}>
    Our AI-driven solutions address key challenges in the mining industry, including the creation of 2D prospectivity maps and 3D deposit modeling. These tools are designed to support mineral exploration and mining operations, respectively. By leveraging machine learning models, we provide valuable insights that help reduce costs by accurately identifying prospective areas, enabling more efficient allocation of resources.
    </Text>
    {regions.map((region, index) => (
      <RegionRow key={index} {...region} />
    ))}
  </View>
</Page>
);
