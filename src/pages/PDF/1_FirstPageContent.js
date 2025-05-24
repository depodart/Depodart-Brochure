import { logo, Brochure1 } from '../../assets';
import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 0,
    height: '100%',
  },
  header: {
    backgroundColor: '#200D02',
    color: 'white', 
    padding: 40,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '25%',
  },
  headerContent: {
    textAlign: 'right',
    paddingRight: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'flex-end',
    gap: 16,
  },
  logo: {
    width: 80,
    height: 80,
  },
  companyName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  slogan: {
    fontSize: 20,
    marginTop: 12,
    color: 'white',
  },
  mainImage: {
    width: '100%',
    height: '55%',
    objectFit: 'cover',
  },
  footer: {
    backgroundColor: '#D23B0C',
    color: 'white',
    padding: 50,
    borderBottom: 2,
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '2px solid #FF4D1A',
  },
  website: {
    fontSize: 24,
    fontWeight: 'medium'
  }
});

export const FirstPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.logoContainer}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.companyName}>DepoDart</Text>
        </View>
        <Text style={styles.slogan}>Where big data meets big discoveries</Text>
      </View>
    </View>

    <Image src={Brochure1} style={styles.mainImage} />

    <View style={styles.footer}>
      <Image src={logo} style={styles.logo} />
      <Text style={styles.website}>www.depodart.com</Text>
    </View>
  </Page>
);