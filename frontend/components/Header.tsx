import tw from 'twrnc';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Modal, View, Text, TouchableOpacity, ImageSourcePropType, StyleSheet } from 'react-native';
import { COLORS } from "@/constants/Theme";
import Avatar from './Avatar';
import Krysans from './Krysans';
import { useUser } from '@/context/UserContext';
import { useState } from 'react';

export default function Header() {
  const insets = useSafeAreaInsets();
  const { user } = useUser();
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);
  
  return (
      <View style={[tw`bg-[${COLORS.primary}] px-4`, {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: insets.top > 12 ? insets.top : 12,
        paddingBottom: 12,
      }]}>
        <View style={{ flex: 1 }}>
          <Krysans />
        </View>

        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
          <Avatar avatar={user.avatar as ImageSourcePropType} />
        </View>

        <View style={[ tw`gap-8`, { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }]}>
          <View style={[tw`flex-row items-center gap-2`]}>
            <Icon style={tw``} name="star-outline" size={24} color="#fff" />
            <Text style={tw`text-white font-bold text-l`}>1</Text>
          </View>
          <TouchableOpacity onPress={openModal}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Modale */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* <Text style={styles.modalTitle}>@{user.username}</Text> */}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Icon style={styles.closeButtonText} name="close" size={32} color={COLORS.primary} />
            </TouchableOpacity>

            {/* Ajoutez d'autres éléments du menu ici */}
            <View style={styles.menuItemContainer}>
              <TouchableOpacity style={styles.menuItem}>
                <Icon name="person" size={32} color="white" />
                <Text style={styles.menuItemText}>Profil</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Icon name="key" size={32} color="white" />
                <Text style={styles.menuItemText}>Mot de passe</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuItem}>
                <Icon name="house" size={32} color="white" />
                <Text style={styles.menuItemText}>Feed</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
  );
}


const styles = StyleSheet.create({
  
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 120,
    paddingBottom: 100,
    paddingLeft: 16,
    paddingRight: 16,
    /* backgroundColor: 'rgba(0, 0, 0, 0.5)', */
  },
  modalContent: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C9E414',
    borderRadius: 32,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: 'gray',
  },
  menuItemContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  menuItem: {
    paddingVertical: 20,
    width: '50%',
    alignItems: 'center', // Centre le contenu horizontalement
    justifyContent: 'center', // Centre le contenu verticalement
  },
  menuItemText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 500,
  },
});