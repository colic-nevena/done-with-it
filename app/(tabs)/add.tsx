import React, { useState } from "react";
import * as Yup from "yup";
import { SafeAreaView, StyleSheet } from "react-native";
import CategoryPickerItem from "@/components/CategoryPickerItem";
import AppForm from "@/components/forms/AppForm";
import AppFormField from "@/components/forms/AppFormField";
import AppFormPicker from "@/components/forms/AppFormPicker";
import FormImagePicker from "@/components/forms/FormImagePicker";
import SubmitButton from "@/components/forms/SubmitButton";
import useLocation from "@/hooks/useLocation";
import { addListing, CustomResponse } from "@/api/listings";
import { ListingViewModel } from "@/model/ListingViewModel";
import UploadScreen from "@/pagesTOBERemoved/UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  categoryId: Yup.number().required().label("Category"),
  images: Yup.array().min(1, "Please select at least 1 image.")
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];


export default function ListingEditScreen() {
  const location = useLocation();
  const [uploadVisible, setUploadVisible] = useState<boolean>(false)
  const [progress, setProgress] = useState<number>(0)

  const handleSubmit = async (listing: ListingViewModel) => {
    setProgress(0);
    setUploadVisible(true);
    let result: CustomResponse;

    result = await addListing(
      { ...listing, location: location || { latitude: -1, longitude: -1 } },
      (progress: number) => setProgress(progress)
    );

    console.log(result)

    if (result.status !== "success") {
      setUploadVisible(false);
      return alert("Couldn't save the listing.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <UploadScreen progress={progress} visible={uploadVisible} onDone={() => setUploadVisible(false)} />

      <AppForm
        initialValues={{
          title: "",
          price: -1,
          description: "",
          categoryId: -1,
          images: [],
          userId: -1,
          id: -1,
          location: { latitude: -1, longitude: -1 }
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />

        <AppFormField maxLength={255} name="title" placeholder="Title" />

        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={140}
        />

        <AppFormPicker
          items={categories}
          name="categoryId"
          placeholder="Category"
          width="50%"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />

        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 30
  },
});
