import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BoxContainer from "../components/BoxContainer";
import { FaArrowLeft } from "react-icons/fa";
import { AiOutlineClear } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import ActionBar from "../components/ActionBar";
import { Controller, useForm } from "react-hook-form";
import {
  defectClassList,
  processDefectList,
  shiftList,
} from "../utils/barcodedSelect";
import {
  useLazyGetHinbanDataQuery,
  useSaveDefectDataBarcodedMutation,
} from "../app/defectTagAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  closeMessageConfirmDialog,
  openMessageConfirmDialog,
} from "../slices/dialogSlice";
import { barcodedSchema } from "../utils/validationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

function Barcoded() {
  /* Utils */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* Redux Slice */
  const { user } = useSelector((state) => state.authState);

  /* React Hook Form */

  const defaultValues = {
    InspectorCode: user.username,
    Hinban: "",
    Shift: "",
    LineCode: "",
    LotNo: "",
    DefectCode: "",
    ProcessDefect: "",
    PickingTools: "",
    ConnectorName: "",
    WireColor: "",
    CircuitNo: "",
    OperatorCode: "",
    DefectClass: "",
    TerminalType: "",
  };
  const {
    control,
    register,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(barcodedSchema),
  });

  /* RTK Query */

  const [getHinbanData, { isFetching: isHinbanFetching, isError, isSuccess }] =
    useLazyGetHinbanDataQuery();

  const [saveDefectData] = useSaveDefectDataBarcodedMutation();

  /* Handlers */
  const onClear = () => {
    dispatch(
      openMessageConfirmDialog({
        messageHeader: "Confirm Clear",
        messageBody: "Are you sure you want to clear this form?",
        action: "Clear",
        actionColor: "yellow",
        handleConfirm: handleClear,
      })
    );
  };

  const handleClear = () => {
    reset();
    dispatch(closeMessageConfirmDialog());
  };
  const onSubmit = (data) => {
    dispatch(
      openMessageConfirmDialog({
        messageHeader: "Confirm Submit",
        messageBody: "Are you sure you want to submit this data?",
        action: "Submit",
        actionColor: "blue",
        handleConfirm: () => handleSubmitData(data),
      })
    );
  };

  const handleSubmitData = async (data) => {
    //save data
    const saveDefectDataResult = await saveDefectData({
      formData: data,
    });

    //if success
    if (saveDefectDataResult.isSuccess) {
      navigate("/printing");
      dispatch(closeMessageConfirmDialog());
    }
  };

  //reset autocompleted values
  const resetHinbanDataValues = () => {
    setValue("LineCode", "");
    setValue("DefectCode", "");
    setValue("DefectClass", "");
    setValue("Shift", "");
    setValue("LotNo", "");
    setValue("ProcessDefect", "");
  };

  //onchange of hinban
  const onHinbanChange = (e) => {
    //set timeout because the default behavior of scanning is one character at a time
    setTimeout(async () => {
      if (e.target.value?.length >= 11) {
        //fetch hinbandata
        const getHinbanDataResult = await getHinbanData(e.target.value);
        console.log(getHinbanDataResult);

        //   If hinban data is in database
        if (getHinbanDataResult.isSuccess) {
          const {
            InspectorCode1: OperatorCode,
            Line_C: LineCode,
            DefectCode,
            DefectClass,
            ProcessDefect,
            LotNo,
            Shift,
          } = getHinbanDataResult?.data;

          setValue("LineCode", LineCode);
          setValue("Shift", Shift);
          setValue("OperatorCode", OperatorCode);
          setValue("DefectCode", DefectCode);
          setValue("DefectClass", DefectClass);
          setValue("LotNo", LotNo);
          setValue("ProcessDefect", ProcessDefect);
        } else {
          // if hinban data is not in database, reset values that autocompleted
          resetHinbanDataValues();
        }
      } else {
        // if length is less than 11, reset values that autocompleted
        resetHinbanDataValues();
      }
    }, 500);
  };

  /* UseEffects */

  return (
    <>
      <ActionBar bgColor="blue.500" title="Barcoded" />
      <BoxContainer>
        {/* Clear Button */}
        <Button
          onClick={onClear}
          leftIcon={<AiOutlineClear />}
          w="4rem"
          ml="auto"
          size="xs"
          colorScheme="yellow"
        >
          Clear
        </Button>
        {/* Hinban */}
        <FormControl isRequired>
          <FormLabel>Hinban</FormLabel>
          <Input
            type="text"
            {...register("Hinban")}
            maxLength={12}
            onChange={onHinbanChange}
          />
          {errors?.Hinban?.message && (
            <Text color="red" fontSize="xs">
              {errors.Hinban.message}
            </Text>
          )}
        </FormControl>
        {/* Inspector Code */}
        <FormControl isRequired>
          <FormLabel>Inspector Code </FormLabel>
          <Input
            type="text"
            bgColor="gray.100"
            isReadOnly
            {...register("InspectorCode")}
          />
          {errors?.InspectorCode?.message && (
            <Text color="red" fontSize="xs">
              {errors.InspectorCode.message}
            </Text>
          )}
        </FormControl>
        {/* Shift */}
        <FormControl isRequired>
          <FormLabel>Shift</FormLabel>
          <Controller
            name="Shift"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                {shiftList.map((item, index) => (
                  <option value={item} key={index}>
                    {item}
                  </option>
                ))}
              </Select>
            )}
          />
          {errors?.Shift?.message && (
            <Text color="red" fontSize="xs">
              {errors.Shift.message}
            </Text>
          )}
        </FormControl>
        {/* Line Code */}
        <FormControl isRequired>
          <FormLabel>Line Code</FormLabel>
          <Input
            type="text"
            bgColor="gray.100"
            isReadOnly
            {...register("LineCode")}
          />
          {errors?.LineCode?.message && (
            <Text color="red" fontSize="xs">
              {errors.LineCode.message}
            </Text>
          )}
        </FormControl>
        {/* Lot No. */}
        <FormControl isRequired>
          <FormLabel>Lot No.</FormLabel>
          <Input type="text" {...register("LotNo")} />
          {errors?.LotNo?.message && (
            <Text color="red" fontSize="xs">
              {errors.LotNo.message}
            </Text>
          )}
        </FormControl>
        {/* Defect Code */}
        <FormControl isRequired>
          <FormLabel>Defect Code</FormLabel>
          <Input type="text" {...register("DefectCode")} />
          {errors?.DefectCode?.message && (
            <Text color="red" fontSize="xs">
              {errors.DefectCode.message}
            </Text>
          )}
        </FormControl>
        {/* Process Defect */}
        <FormControl isRequired>
          <FormLabel>Process Defect</FormLabel>
          <Controller
            name="ProcessDefect"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                {processDefectList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Select>
            )}
          />
          {errors?.ProcessDefect?.message && (
            <Text color="red" fontSize="xs">
              {errors.ProcessDefect.message}
            </Text>
          )}
        </FormControl>
        {/* Picking Tools */}
        <FormControl isRequired>
          <FormLabel>Picking Tools</FormLabel>
          <Input type="text" {...register("PickingTools")} />
          {errors?.PickingTools?.message && (
            <Text color="red" fontSize="xs">
              {errors.PickingTools.message}
            </Text>
          )}
        </FormControl>
        {/* Connector Name */}
        <FormControl isRequired>
          <FormLabel>Connector Name</FormLabel>
          <Input type="text" {...register("ConnectorName")} />
          {errors?.ConnectorName?.message && (
            <Text color="red" fontSize="xs">
              {errors.ConnectorName.message}
            </Text>
          )}
        </FormControl>
        {/* Wire Color */}
        <FormControl isRequired>
          <FormLabel>Wire Color</FormLabel>
          <Input type="text" {...register("WireColor")} />
          {errors?.WireColor?.message && (
            <Text color="red" fontSize="xs">
              {errors.WireColor.message}
            </Text>
          )}
        </FormControl>
        {/* Circuit No. */}
        <FormControl isRequired>
          <FormLabel>Circuit No.</FormLabel>
          <Input type="text" {...register("CircuitNo")} />
          {errors?.CircuitNo?.message && (
            <Text color="red" fontSize="xs">
              {errors.CircuitNo.message}
            </Text>
          )}
        </FormControl>
        {/* Operator Code */}
        <FormControl isRequired>
          <FormLabel>Operator Code</FormLabel>
          <Input type="text" {...register("OperatorCode")} />
          {errors?.OperatorCode?.message && (
            <Text color="red" fontSize="xs">
              {errors.OperatorCode.message}
            </Text>
          )}
        </FormControl>
        {/* Defect Class */}
        <FormControl isRequired>
          <FormLabel>Defect Class</FormLabel>
          <Controller
            name="DefectClass"
            control={control}
            render={({ field }) => (
              <Select {...field} placeholder="Select option">
                {defectClassList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Select>
            )}
          />
          {errors?.DefectClass?.message && (
            <Text color="red" fontSize="xs">
              {errors.DefectClass.message}
            </Text>
          )}
        </FormControl>
        {/* Terminal Type */}
        <FormControl isRequired>
          <FormLabel>Terminal Type</FormLabel>
          <Input type="text" {...register("TerminalType")} />
          {errors?.TerminalType?.message && (
            <Text color="red" fontSize="xs">
              {errors.TerminalType.message}
            </Text>
          )}
        </FormControl>

        <Box display="flex" justifyContent="center">
          <Button colorScheme="blue" onClick={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </Box>
      </BoxContainer>
    </>
  );
}

export default Barcoded;
