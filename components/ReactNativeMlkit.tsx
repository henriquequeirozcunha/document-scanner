import { View, Text, Button } from "react-native";
import React from "react";
import {
  launchDocumentScannerAsync,
  ResultFormatOptions,
  ScannerModeOptions,
} from "@infinitered/react-native-mlkit-document-scanner";

export default function ReactNativeMlkit() {
  return (
    <View>
      <Button
        onPress={async () => {
          // result will contain an object with the result information
          const result = await launchDocumentScannerAsync({
            pageLimit: 1,
            galleryImportAllowed: false,
            resultFormats: ResultFormatOptions.ALL,
            scannerMode: ScannerModeOptions.FULL,
          });
        }}
        title="Scan Document"
      />
    </View>
  );
}
