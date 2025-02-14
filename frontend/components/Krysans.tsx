import { View, Image, Text } from 'react-native';
import { COLORS } from "../constants/Theme";
import tw from 'twrnc';

const Krysans = ({size = 34 }) => {
  return (
    <View style={[tw`items-center flex-row`]}>
      <Image
        source={require('../assets/images/krysans.png')}
        style={[tw`rounded-full`, { width: size, height: size }]}
      />
      <Text style={tw`mb-0.5 font-medium text-[${COLORS.turquoise}]`}>16.205273</Text>
    </View>
  );
};

export default Krysans;