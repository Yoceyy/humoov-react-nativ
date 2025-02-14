import axios from 'axios';
import tw from 'twrnc';
import { View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { COLORS } from "@/constants/Theme";
import Feed from '@/components/Feed';

export default function HomeScreen() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello/")
      .then(response => setMessage(response.data.message))
      .catch(error => {
        console.error("Error fetching data:", error);
        setMessage("Failed to load message.");
      });
  }, []);

  return (
      <ScrollView style={tw`bg-[${COLORS.dark}]`}>
        <View style={[tw`bg-[${COLORS.dark}] p-4 flex-col gap-8 pb-28`]}>
          <Feed />
        </View>
      </ScrollView>
  );
}
