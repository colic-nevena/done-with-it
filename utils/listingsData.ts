import { ListingViewModel } from "@/model/ListingViewModel";

export const listings: ListingViewModel[] = [
    {
        id: 1,
        title: "Red jacket for sale",
        price: 100,
        image: require("../assets/images/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch in great condition",
        price: 1200,
        image: require("../assets/images/couch.jpg")
    }
]

export function getListingById(listingId: number): ListingViewModel {
    const result = listings.filter(listing => listing.id === listingId)
    return result[0]
}