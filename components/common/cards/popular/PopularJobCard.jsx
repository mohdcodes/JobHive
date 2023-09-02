import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { checkImageURL } from '../../../../utils';
import styles from './popularjobcard.style';

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  const dummyJobUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTscGUT0AY7v2JXYVLzS_9i76A_zrRDGrX0g';
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: item.employer_logo,
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
