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
    description?: string;
    location: {
        latitude: number;
        longitude: number;
    }
}
