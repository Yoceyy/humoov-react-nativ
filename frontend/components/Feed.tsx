import { COLORS } from "@/constants/Theme"
import { Text, View } from "react-native"
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Post from "@/components/Post";
import { useUser } from "@/context/UserContext";

const Feed = ({}) => {
    const { user } = useUser();

    return (
        <>
            {/* Temps restant */}
            <View style={tw`w-full bg-[${COLORS.primary}] rounded-3xl px-4 py-6`}>
                <Text style={tw`text-white font-medium mb-6`}>Temps restant</Text>

                <View style={tw`border-2 border-[${COLORS.turquoise}] rounded-full h-5 mb-6`}>
                    <View style={tw`w-1/2 h-full rounded-full bg-[${COLORS.turquoise}] px-2`}>
                    <Text style={tw`text-right`}> <Text style={tw`font-bold`}>15</Text> min et <Text style={tw`font-bold`}>6</Text> sec</Text>
                    </View>
                </View>

                <View style={tw`flex-row gap-2`}>
                    <View style={tw`bg-white`}>
                    <Icon style={tw``} name="add" size={16} color={COLORS.primary} />
                </View>

                    <Text style={tw`text-white font-medium`}>Entrez un nouvel horaire</Text>
                </View>
            </View>

            {/* Feed */}
            {/* user_id, post_id */}
            <Post
                username="mamos"
                timeAgo="il y a un 1 jour"
                timeElapsed="27j, 6h, 38min, 22s"
                imageSource={require('../assets/images/post_1_mamos.jpg')}
                text="Océan de béton"
            />

            {/* user_id, post_id */}
            <Post
                username="mamos"
                timeAgo="il y a 2 semaines"
                timeElapsed="27j, 6h, 38min, 22s"
                imageSource={require('../assets/images/post_2_mamos.jpg')}
                text="Step by Step"
            />
        </>
    )
}

export default Feed;