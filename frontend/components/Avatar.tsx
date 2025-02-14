import { View, Image, ViewProps, ImageSourcePropType } from 'react-native';
import tw from 'twrnc';

type Props = ViewProps & {
  blur?: boolean;
  avatar?: ImageSourcePropType;
};

const Avatar = ({ blur = false, avatar }: Props) => {
  return (
    <View
      style={[
        tw`rounded-full border-2 border-[#01ffef] p-1`,
        blur && {boxShadow: '1px 2px 20px 0px rgba(1,255,239,0.9)'},
      ]}
    >
      <Image
        source={avatar}
        style={[
          tw`rounded-full`,
          { width: 33, height: 33 },
        ]}
      />
    </View>
  );
};

export default Avatar;
