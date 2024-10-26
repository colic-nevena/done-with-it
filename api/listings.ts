import { ListingViewModel } from "@/model/ListingViewModel";
import apiClient from "./client";
import * as FileSystem from 'expo-file-system';

const LISTING_URL = "/listing"
const LISTINGS_URL = "/listings"
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

export interface CustomResponse {
    status: "success" | "error",
    data: any
}

export async function getListings(): Promise<CustomResponse> {
    const response = await apiClient.get<ListingViewModel[]>(LISTINGS_URL);
    let result: CustomResponse;

    if (response.ok && response.data) {
        const updatedListings = response.data.map((listing) => ({
            ...listing,
            images: listing.images.map((image) => ({
                ...image,
                url: image.url.startsWith("http") ? image.url : `${BASE_URL}/assets/${image.url}`,
            })),
        }));

        result = { status: "success", data: updatedListings }
    } else {
        result = { status: "error", data: response.problem }
    }

    return result;
}

export async function getListingById(id: number): Promise<CustomResponse> {
    const response = await apiClient.get<ListingViewModel>(`${LISTING_URL}/${id}`);
    let result: CustomResponse;

    if (response.ok && response.data) {
        const updatedListing = {
            ...response.data,
            images: response.data.images.map((image) => ({
                ...image,
                url: image.url.startsWith("http") ? image.url : `${BASE_URL}/assets/${image.url}`,
            })),
        };

        result = { status: "success", data: updatedListing }
    } else {
        result = { status: "error", data: response.problem }
    }

    return result;
}

export const addListing = async (listing: ListingViewModel, onUploadProgress: Function) => {
    let result: CustomResponse;

    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price.toString());
    data.append("categoryId", listing.categoryId.toString());
    data.append("description", listing.description || "");

    listing.images.forEach((image, index) =>
        data.append("images", JSON.stringify({
            name: "image" + index,
            type: "image/jpeg",
            uri: image,
        }))
    );

    if (listing.location)
        data.append("location", JSON.stringify(listing.location));

    const response = await apiClient.post(LISTINGS_URL, data, {
        onUploadProgress: (progress) => {
            if (progress.total) {
                return onUploadProgress(progress.loaded / progress.total)
            }
        }
    });

    if (response.ok && response.data) {
        result = { status: "success", data: "" }
    } else {
        result = { status: "error", data: response.problem }
    }

    return result
};
