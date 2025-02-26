import { Image, View, Text, FlatList, Pressable } from "react-native";
import images from "@/constants/affirmation-images";
import { GalleryPreviewData } from "@/constants/GalleryPreview";
import { Link } from "expo-router";

interface GuidedAffirmationGalleryProps {
  title: string;
  products: GalleryPreviewData[];
}

const GuidedAffirmationGallery = ({
  title,
  products,
}: GuidedAffirmationGalleryProps) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>

      <View className="space-y-2">
        <FlatList
          data={products}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 0 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View className="h-36 w-36 rounded-md mr-4">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full rounded-md"
                  />
                  <Text>ProductGallery</Text>
                </View>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </View>
  );
};

export default GuidedAffirmationGallery;
