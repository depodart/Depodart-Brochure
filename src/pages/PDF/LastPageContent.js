import { logo, depodartQRCode } from '../../assets';
import { Page, View, Text, Image, Link } from '@react-pdf/renderer';

const WEBSITE_URL = 'https://www.depodart.com';

// Professional icon components matching your image
const CertificateIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.compassBase}>
      <View style={styles.compassTop} />
      <View style={styles.compassCircle}>
        <View style={styles.compassInner} />
      </View>
      <View style={styles.compassLeftLeg} />
      <View style={styles.compassRightLeg} />
      <View style={styles.compassCross} />
    </View>
  </View>
);

const PartnershipIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.handshakeContainer}>
      <View style={styles.leftHand} />
      <View style={styles.rightHand} />
      <View style={styles.handshakeConnection} />
    </View>
  </View>
);

const SolutionsIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.puzzleContainer}>
      <View style={styles.puzzlePiece1} />
      <View style={styles.puzzlePiece2} />
      <View style={styles.puzzlePiece3} />
      <View style={styles.puzzlePiece4} />
    </View>
  </View>
);

const TrackRecordIcon = () => (
  <View style={styles.iconContainer}>
    <View style={styles.gearsContainer}>
      <View style={styles.largeGear} />
      <View style={styles.smallGear} />
    </View>
  </View>
);

const features = [
  {
    icon: <CertificateIcon />,
    title: "DATA CERTIFICATION",
    content: "DepoDart maintains the highest standards of data quality and security. Our platform is certified to handle sensitive information with utmost confidentiality."
  },
  {
    icon: <PartnershipIcon />,
    title: "GLOBAL PARTNERSHIPS", 
    content: "DepoDart collaborates with leading technology partners worldwide. Our extensive network includes partnerships with major cloud providers and data analytics firms."
  },
  {
    icon: <SolutionsIcon />,
    title: "FLEXIBLE SOLUTIONS",
    content: "Our team can integrate into your workflow at any stage. Whether you need data collection, analysis, or visualization, we provide tailored solutions that adapt to your needs."
  },
  {
    icon: <TrackRecordIcon />,
    title: "PROVEN TRACK RECORD",
    content: "DepoDart has successfully processed over 3,000 datasets, from small research projects to enterprise-level implementations, delivering consistent results across all scales."
  }
];

const styles = {
  page: {
    flexDirection: 'column',
    backgroundColor: '#200D02',
    padding: 0,
    height: '100%',
  },
  container: {
    padding: 16,
    flex: 1,
  },
  featureGrid: {
    flexDirection: 'column',
    gap: 12
  },
  featureCard: {
    width: '100%',
    marginBottom: 12
  },
  featureContent: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
    gap: 16
  },
  iconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureTextContainer: {
    flex: 1
  },
  
  // Compass/Certificate Icon
  compassBase: {
    position: 'relative',
    width: 32,
    height: 32,
  },
  compassTop: {
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -2,
    width: 4,
    height: 8,
    backgroundColor: 'white',
    borderRadius: 2,
  },
  compassCircle: {
    position: 'absolute',
    top: 8,
    left: '50%',
    marginLeft: -8,
    width: 16,
    height: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compassInner: {
    width: 8,
    height: 8,
    backgroundColor: '#200D02',
    borderRadius: 4,
  },
  compassLeftLeg: {
    position: 'absolute',
    top: 16,
    left: 8,
    width: 3,
    height: 20,
    backgroundColor: 'white',
    transform: 'rotate(-20deg)',
    transformOrigin: 'top center',
  },
  compassRightLeg: {
    position: 'absolute',
    top: 16,
    right: 8,
    width: 3,
    height: 20,
    backgroundColor: 'white',
    transform: 'rotate(20deg)',
    transformOrigin: 'top center',
  },
  compassCross: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    marginLeft: -1,
    width: 2,
    height: 6,
    backgroundColor: 'white',
  },

  // Handshake Icon
  handshakeContainer: {
    position: 'relative',
    width: 32,
    height: 24,
  },
  leftHand: {
    position: 'absolute',
    left: 0,
    top: 8,
    width: 12,
    height: 10,
    backgroundColor: '#4A9FFF',
    borderRadius: 6,
    transform: 'skew(-10deg)',
  },
  rightHand: {
    position: 'absolute',
    right: 0,
    top: 8,
    width: 12,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 6,
    transform: 'skew(10deg)',
  },
  handshakeConnection: {
    position: 'absolute',
    left: 10,
    top: 12,
    width: 12,
    height: 2,
    backgroundColor: '#D23B0C',
  },

  // Puzzle Icon
  puzzleContainer: {
    position: 'relative',
    width: 24,
    height: 24,
  },
  puzzlePiece1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: 10,
    backgroundColor: '#4A9FFF',
    borderTopRightRadius: 4,
  },
  puzzlePiece2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
  },
  puzzlePiece3: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
  },
  puzzlePiece4: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    backgroundColor: '#4A9FFF',
    borderBottomLeftRadius: 4,
  },

  // Gears Icon
  gearsContainer: {
    position: 'relative',
    width: 32,
    height: 24,
  },
  largeGear: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    border: '2px solid #200D02',
  },
  smallGear: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 12,
    height: 12,
    backgroundColor: '#4A9FFF',
    borderRadius: 6,
    border: '2px solid #200D02',
  },

  featureTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D23B0C',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  featureText: {
    fontSize: 8,
    color: '#e5e5e5',
    lineHeight: 1.4,
    textAlign: 'justify',
  },
  footerContainer: {
    padding: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 48,
    height: 48,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  qrCodeContainer: {
    alignItems: 'center',
  },
  qrCode: {
    width: 60,
    height: 60,
  },
  websiteLink: {
    fontSize: 8,
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
    fontWeight: 'medium',
    textDecoration: 'none',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D23B0C',
    padding: 16,
    borderTop: '2px solid #FF4D1A',
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 4,
  },
  contactText: {
    fontSize: 8,
    color: 'white',
    opacity: 0.9,
    lineHeight: 1.4,
  }
};

const FeatureCard = ({ icon, title, content }) => (
  <View style={styles.featureCard}>
    <View style={styles.featureContent}>
      {icon}
      <View style={styles.featureTextContainer}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureText}>{content}</Text>
      </View>
    </View>
  </View>
);

export const LastPageContent = () => (
  <Page size="A4" style={styles.page}>
    <View style={styles.container}>
      <View style={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </View>
    </View>
    
    <View style={styles.footerContainer}>
      <View style={styles.footer}>
        <View style={styles.logoContainer}>
          <Image src={logo} style={styles.logo} />
          <Text style={styles.companyName}>DepoDart</Text>
        </View>
            
        <View style={styles.qrCodeContainer}>
          <Image src={depodartQRCode} style={styles.qrCode} />
          <Link src={WEBSITE_URL} style={styles.websiteLink}>
            www.depodart.com
          </Link>
        </View>
      </View>
    </View>

    <View style={styles.bottomBar}>
      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>CONTACT US</Text>
        <Text style={styles.contactText}>Have questions or want to learn more?</Text>
        <Text style={styles.contactText}>Our team is ready to help you explore how DepoDart</Text>
        <Text style={styles.contactText}>can transform your mining operations.</Text>
        <Text style={styles.contactText}>Email: info@depodart.com</Text>
        <Text style={styles.contactText}>Tel: +1 416 562 6578</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>CANADA</Text>
        <Text style={styles.contactText}>DepoDart Inc.</Text>
        <Text style={styles.contactText}>24 Tyndale Ave</Text>
        <Text style={styles.contactText}>Toronto, Ontario M6K 2E3</Text>
        <Text style={styles.contactText}>Tel: +1 416 562 6578</Text>
        <Text style={styles.contactText}>info@depodart.com</Text>
      </View>
    </View>
  </Page>
);
