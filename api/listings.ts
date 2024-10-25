import { ListingViewModel } from "@/model/ListingViewModel";
import apiClient from "./client";

const LISTING_URL = "/listing"
const LISTINGS_URL = "/listings"
const BASE_URL = process.env.EXPO_PUBLIC_BASE_URL

interface CustomResponse {
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