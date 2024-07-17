import React, { useState, useEffect } from "react";
import { Image, View, Text } from "react-native";
// import DocumentScanner from "react-native-document-scanner-plugin";

export default () => {
  return <Text>DocumentScanner</Text>;
  // const [scannedImage, setScannedImage] = useState<string>();

  // const scanDocument = async () => {
  //   // start the document scanner
  //   const { scannedImages } = await DocumentScanner.scanDocument();

  //   // get back an array with scanned image file paths
  //   if (scannedImages && scannedImages.length > 0) {
  //     // set the img src, so we can view the first scanned image
  //     scannedImages[0] && setScannedImage(scannedImages[0]);
  //   }
  // };

  // useEffect(() => {
  //   // call scanDocument on load
  //   scanDocument();
  // }, []);

  // return (
  //   <Image
  //     resizeMode="contain"
  //     style={{ width: "100%", height: "100%" }}
  //     source={{ uri: scannedImage || "" }}
  //   />
  // );
};
