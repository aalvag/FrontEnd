import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import React from "react";

const FormReportScreen = () => {
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          findName: "",
          reporterName: "",
          providerId: "",
          image: "",
          email: "",
        }}
        onSubmit={(values) => console.log(values)}
        style={{ backgroundColor: "red" }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <Text>Find Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={handleChange("findName")}
                onBlur={handleBlur("findName")}
                keyboardType="default"
                value={values.findName}
              />
            </View>
            <Text> Reporter Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={handleChange("reporterName")}
                onBlur={handleBlur("reporterName")}
                keyboardType="default"
                value={values.reporterName}
              />
            </View>
            <Text>Email</Text>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="default"
                value={values.email}
              />
            </View>
            <Button onPress={handleSubmit} title="Submit" />
          </>
        )}
      </Formik>
    </View>
  );
};

export default FormReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
