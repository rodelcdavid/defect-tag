import * as yup from "yup";

const maxMsg = () => "Too many characters.";

export const barcodedSchema = yup.object({
  Hinban: yup.string().required("This field is required.").trim(),
  InspectorCode: yup.string().required("This field is required.").trim(),
  Shift: yup.string().required("This field is required.").trim(),
  LineCode: yup.string().required("This field is required.").trim(),
  LotNo: yup.string().required("This field is required.").trim(),
  DefectCode: yup.string().required("This field is required.").trim(),
  ProcessDefect: yup.string().required("This field is required.").trim(),
  PickingTools: yup.string().required("This field is required.").trim(),
  ConnectorName: yup.string().required("This field is required.").trim(),
  WireColor: yup.string().required("This field is required.").trim(),
  CircuitNo: yup.string().required("This field is required.").trim(),
  OperatorCode: yup.string().required("This field is required.").trim(),
  DefectClass: yup.string().required("This field is required.").trim(),
  TerminalType: yup.string().required("This field is required.").trim(),
});

// export const barcodedSchema = yup.object({
//     companyCode: yup
//       .string()
//       .max(10, maxMsg)
//       .trim()
//       .required("This field is required."),
//     dateEstablished: yup.string().required("Must be a valid date."),
//     companyName: yup.max(100, maxMsg).trim(),
//     companyAddress: yup.string().max(500, maxMsg),
//     addressLine1: yup.string().max(250, maxMsg),
//     addressLine2: yup.string().max(250, maxMsg),
//     addressLine3: yup.string().max(250, maxMsg),
//     companyLogo: yup
//       .mixed()
//       .nullable()
//       .test("fileType", "Only image files are allowed.", (value) => {
//         console.log("here", value);
//         if (!value.length) return true;
//         const acceptedFormats = ["image/jpeg", "image/png", "image/gif"];
//         return acceptedFormats.includes(value[0]?.type);
//       }),
//   });
