import { logo, Brochure2 } from '../../assets';
import { Page, View, Text, Image } from '@react-pdf/renderer';

const ContentSection = ({ title, content }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionContent}>{content}</Text>
  </View>
);

const styles = {
  page: {
    flexDirection: 'column',
    backgroundColor: '#200D02',
    paddingHorizontal: 40,
    paddingVertical: 20,
    height: '100%',
  },
  container: {
    padding: 16,
    flex: 1,
    position: 'relative',
    // backgroundColor: '#3B1702',
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    // color: 'white',
    color: '#D23B0C',

  },
  section: {
    marginBottom: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    
    fontSize: 16,
    fontWeight: 'bold',
    // color: 'white', 
    color: '#D23B0C', 
    marginBottom: 8,
    paddingBottom: 8,
  },
  sectionContent: {
    color: 'white',
    fontSize: 10,
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  footer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: 20,
      borderRadius: 24,
      alignSelf: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
    brochureImage: {
      width: '100%',
      height: 200,
      objectFit: 'cover',
      marginVertical: 24,
      borderWidth: 2,
      borderColor: 'white',
      borderStyle: 'solid',
    },
  footerLogo: {
    width: 56,
    height: 56,
  },
  footerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
};

export const SecondPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        AI-POWERED MINING DATA SOLUTIONS
      </Text>

      <ContentSection 
        title="About Us"
        content="DepoDart leverages AI and geoscience to provide intelligent guidance for mineral exploration and mine development. We transform complex geological datasets into actionable insights, helping the mining industry make smarter, data-driven decisions.

Our models integrate extensive databases covering geophysical, geological, and geochemical information, harnessing their strong predictive potential. Through advanced modeling techniques, we are able to identify zones with high concentrations of multiple minerals."
        
      />

      <ContentSection
        title="Our Mission" 
        content="Our mission is to revolutionize mapping in the gold industry through artificial intelligence. 
        We are leveraging this unique moment in history to create the next generation of gold exploration GPS technology, 
        enabling unprecedented precision and accuracy in gold exploration and mining operations."
      />
      
      <ContentSection
        title="Why Work With Us"
        content="DepoDart transforms exploration through intelligent automation. Our tools reduce guesswork, enhance speed, and bring clarity to complex geological datasets—driving smarter discovery.

We simplify the use of diverse geoscientific datasets. Our system can handle raw, incomplete, or mismatched data formats, allowing rapid onboarding and instant integration into our models.

We work as an extension of your team, offering not just software, but strategic partnership. You get technical insight, custom output, and a responsive, exploration-savvy team.
"
      />

      <View style={styles.footer}>
        <Image 
          src={Brochure2} 
          style={styles.brochureImage} 
        />
        <Image src={logo} style={styles.footerLogo} />
        <Text style={styles.footerText}>DepoDart</Text>
      </View>
    </View>
  </Page>
);