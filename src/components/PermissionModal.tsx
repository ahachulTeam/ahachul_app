import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Animated,
  Dimensions,
  BackHandler,
  TouchableWithoutFeedback,
} from 'react-native';

type Props = {
  visible: boolean;
  onConfirm: () => Promise<void>;
};

const PermissionDialog = ({visible, onConfirm}: Props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(
    new Animated.Value(Dimensions.get('window').height),
  ).current;

  const permissions = [
    {
      title: '알림',
      subtitle: '서비스 이용 시 알림 수신',
      icon: require('../assets/alarm.png'),
      optional: true,
    },
    {
      title: '사진·동영상',
      subtitle: '프로필 설정, 커뮤니티 사진 및 영상 첨부',
      icon: require('../assets/picture.png'),
      optional: true,
    },
    {
      title: '카메라',
      subtitle: '프로필 설정, 커뮤니티 사진 및 영상 촬영',
      icon: require('../assets/camera.png'),
      optional: true,
    },
    {
      title: '오디오',
      subtitle: '커뮤니티 영상 촬영 시 오디오',
      icon: require('../assets/mic.png'),
      optional: true,
    },
    {
      title: '전화',
      subtitle: '지하철 관련 연결을 위한 전화',
      icon: require('../assets/phone.png'),
      optional: true,
    },
  ];

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          if (visible) {
            hideModal();
            return true;
          }
          return false;
        },
      );

      return () => backHandler.remove();
    } else {
      hideModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, fadeAnim, slideAnim]);

  const hideModal = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: Dimensions.get('window').height,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (!visible) {
        // ...
      }
    });
  };

  //@ts-expect-error: todo
  if (!visible && fadeAnim._value === 0) {
    return null;
  }

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[styles.modalView, {transform: [{translateY: slideAnim}]}]}>
        <View style={styles.header}>
          <Text style={styles.title}>
            아하철 서비스 이용을 위해{'\n'}아래 권한을 허용해주세요.
          </Text>
          <Pressable style={styles.closeButton} onPress={onConfirm}>
            <Image
              source={require('../assets/close.png')}
              style={styles.image}
            />
          </Pressable>
        </View>

        <View style={styles.permissionList}>
          {permissions.map((permission, index) => (
            <View key={index} style={styles.permissionItem}>
              <View style={styles.iconContainer}>
                <Image source={permission.icon} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.permissionTitle}>
                  {permission.title} <Text style={styles.optional}>(선택)</Text>
                </Text>
                <Text style={styles.permissionDescription}>
                  {permission.subtitle}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <Text style={styles.notice}>
          선택 권한을 허용하지 않아도 서비스 이용은 가능하지만,{'\n'}일부 기능이
          제한될 수 있습니다.
        </Text>

        <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
          <Text style={styles.confirmButtonText}>확인</Text>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    zIndex: 1000,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
    flex: 1,
    color: '#202020',
  },
  closeButton: {
    padding: 4,
  },
  permissionList: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#EEF4FF',
  },
  permissionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 7,
    paddingBottom: 7,
    borderRadius: 8,
    marginBottom: 5,
  },
  iconContainer: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: -2.5,
  },
  image: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
  },
  permissionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#363E52',
  },
  optional: {
    fontSize: 14,
    fontWeight: '500',
    color: '#949DB2',
  },
  permissionDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: '#949DB2',
  },
  notice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#949DB2',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 16,
  },
  confirmButton: {
    backgroundColor: '#004FEC',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default PermissionDialog;
