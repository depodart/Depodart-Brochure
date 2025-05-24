import { logo, Brochure1, Brochure2 } from '../../assets';
import { Page, View, Text, Image } from '@react-pdf/renderer';

export const FirstPageContent = () => (
    <Page size="A4" style={{
      flexDirection: 'column',
      backgroundColor: '#fff',
      padding: 0,
      height: '100%',
    }}>
      {/* Header with company name and slogan */}
      <View style={{
        // backgroundColor: '#782F0D', // secondary-dark
        backgroundColor: '#200D02', // secondary-dark
        color: 'white',
        padding: 40,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: '25%',
      }}>
        <View style={{
          textAlign: 'right',
          paddingRight: 32,
        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 16,
          }}>
            <Image src={logo} style={{
              width: 80,
              height: 80,
            }} />
            <Text style={{
              fontSize: 48,
              fontWeight: 'bold',
              color: 'white',
            }}>DepoDart</Text>
          </View>
          <Text style={{
            fontSize: 20,
            marginTop: 12,
            color: 'white',
          }}>Where big data meets big discoveries</Text>
        </View>
      </View>
  
      {/* Main content with big image */}
      <Image src={Brochure1} style={{
        width: '100%',
        height: '55%',
        objectFit: 'cover',
      }} />
  
      {/* Footer */}
      <View style={{
        backgroundColor: '#782F0D',
        color: 'white',
        padding: 50,
        borderBottom: 2,
        borderBottomColor: 'white',
        height: '20%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Image src={logo} style={{
          width: 80,
          height: 80
        }} />
        <Text style={{
          fontSize: 24,
          fontWeight: 'medium'
        }}>www.depodart.com</Text>
      </View>
    </Page>
  );