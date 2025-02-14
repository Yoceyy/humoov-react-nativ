import { View, Image, ViewProps, Text, ImageSourcePropType } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Avatar from './Avatar';
import { COLORS } from '@/constants/Theme';

type Props = ViewProps & {
  username: string;
  timeAgo: string;
  timeElapsed: string;
  imageSource: ImageSourcePropType;
  text?: string;
};

const Post = ({ username, timeAgo, timeElapsed, imageSource, text = "", ...rest }: Props) => {
  return (
    <View style={tw`flex-col gap-4`} {...rest}>

      {/* Info */}
      <View style={tw`flex-row gap-2`}>
        {/* Avatar with blur */}
        <Avatar blur={true} avatar={require('../assets/images/avatar_mamos.jpg')} />

        {/* Author */}
        <View style={tw`flex-col gap-1`}>
          {/* username + timeAgo */}
          <View style={tw`flex-row gap-2`}>
            <Text style={tw`text-[${COLORS.turquoise}] font-medium`}>@{username}</Text>
            <Text style={tw`text-white text-xs`}>{timeAgo}</Text>
          </View>

          {/* timeElapsed */}
          <View style={tw`flex-row gap-1`}>
            <Icon name="language" size={16} color={COLORS.green} />
            <Text style={tw`text-[${COLORS.green}] italic text-xs`}>{timeElapsed}</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <View>
        <Image
          source={imageSource}
          style={tw`rounded-[2rem] w-full h-[362px]`}
        />
      </View>

      {/* Text */}
      <Text style={tw`text-white`}>{text}</Text>

      {/* Actions */}
      <View></View>

    </View>
  );
};

export default Post;
