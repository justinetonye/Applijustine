import React, { useState } from "react";
// import RNPickerSelect from "react-native-picker-select";

export default function PickerServers() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Text>Hello</Text>
    // <RNPickerSelect
    //   onValueChange={(value) => console.log(value)}
    //   items={[
    //     { label: "Football", value: "football" },
    //     { label: "Baseball", value: "baseball" },
    //     { label: "Hockey", value: "hockey" },
    //   ]}
    // />
  );
}
