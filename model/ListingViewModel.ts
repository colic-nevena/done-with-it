import { ImageSourcePropType } from "react-native";

interface Image {
    url: string;
    thumbnailUrl: string;
}

export interface ListingViewModel {
    id: number;
    title: string;
    images: Image[];
    price: number;
    categoryId: number;
    userId: number;
    location: {
        latitude: number;
        longitude: number;
    }
}
