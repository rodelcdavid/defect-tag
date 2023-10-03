import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
  name: "dialog",
  initialState: {
    dialogs: {
      logout: {
        isOpen: false,
      },
      overRequest: {
        isOpen: false,
      },
      deleteRequest: {
        isOpen: false,
        indexToDelete: 0,
      },
      viewNotes: {
        isOpen: false,
      },
      attachments: {
        isOpen: false,
        requestType: null,
        sampleAttachments: null,
      },

      attachmentEntry: {
        isOpen: false,
        order: null,
        attachmentName: null,
      },
      approve: {
        isOpen: false,
        message: "",
        currentStatus: "",
        itemId: null,
      },
      return: {
        isOpen: false,
        message: "",
        itemId: null,
      },
      disapprove: {
        isOpen: false,
        message: "",
        itemId: null,
      },
      assign: {
        isOpen: false,
      },
      approveAll: {
        isOpen: false,
        requestList: [],
      },
      returnAll: {
        isOpen: false,
      },
      disapproveAll: {
        isOpen: false,
      },
      accomplish: {
        isOpen: false,
      },
      userAcceptance: {
        isOpen: false,
      },

      confirmation: {
        isOpen: false,
      },
      searchFacility: {
        isOpen: false,
      },
      resultMessage: {
        isOpen: false,
      },
      changePassword: {
        isOpen: false,
        userInfo: null,
        handeCloseChangePassExtra: null,
        handleAfterChangePassExtra: null,
      },
      messageModal: {
        isOpen: false,
        messageHeader: "",
        messageBody: "",
        actionName: "",
        messageIcon: null,
        handleConfirm: null,
      },
      messageConfirmDialog: {
        isOpen: false,
        messageHeader: "",
        messageBody: "",
        actionName: "",
        messageIcon: null,
        handleConfirm: null,
      },
      searchFacilityDialog: {
        isOpen: false,
        table: null,
        setSelected: null,
        defaultSearchKey: null,
        columnsToHide: null,
      },
    },
  },
  reducers: {
    openSearchFacilityDialog: (state, { payload }) => {
      const { table, setSelected, defaultSearchKey, columnsToHide } = payload;
      state.dialogs.searchFacilityDialog.isOpen = true;
      state.dialogs.searchFacilityDialog.table = table;
      state.dialogs.searchFacilityDialog.setSelected = setSelected;
      //   state.dialogs.searchFacilityDialog.defaultSearchKey = defaultSearchKey;
      state.dialogs.searchFacilityDialog.columnsToHide = columnsToHide;
    },
    closeSearchFacilityDialog: (state, { payload }) => {
      state.dialogs.searchFacilityDialog.isOpen = false;
      state.dialogs.searchFacilityDialog.table = null;
      state.dialogs.searchFacilityDialog.setSelected = null;
      //   state.dialogs.searchFacilityDialog.defaultSearchKey = null;
      state.dialogs.searchFacilityDialog.columnsToHide = null;
    },
    openDialog: (state, { payload }) => {
      const { dialogType } = payload;
      state.dialogs[dialogType].isOpen = true;
    },
    closeDialog: (state, { payload }) => {
      const { dialogType } = payload;
      state.dialogs[dialogType].isOpen = false;
    },
    openMessageModal: (state, { payload }) => {
      const {
        dialogType,
        messageHeader,
        messageBody,
        messageIcon,
        actionName,
        handleConfirmExtra,
      } = payload;

      state.dialogs[dialogType].isOpen = true;
      state.dialogs[dialogType].messageHeader = messageHeader;
      state.dialogs[dialogType].messageBody = messageBody;
      state.dialogs[dialogType].messageIcon = messageIcon;
      state.dialogs[dialogType].handleConfirmExtra = handleConfirmExtra
        ? handleConfirmExtra
        : null;
    },
    closeMessageModal: (state, { payload }) => {
      const { dialogType } = payload;
      state.dialogs[dialogType].isOpen = false;
      state.dialogs[dialogType].messageHeader = "";
      state.dialogs[dialogType].messageBody = "";
      state.dialogs[dialogType].messageIcon = null;
      state.dialogs[dialogType].handleConfirmExtra = null;
    },

    openMessageConfirmDialog: (state, { payload }) => {
      const {
        messageHeader,
        messageBody,
        // messageAction,
        action,
        actionColor,
        handleConfirm,
      } = payload;

      state.dialogs.messageConfirmDialog.isOpen = true;
      state.dialogs.messageConfirmDialog.messageHeader = messageHeader;
      state.dialogs.messageConfirmDialog.messageBody = messageBody;
      state.dialogs.messageConfirmDialog.action = action ? action : null;
      state.dialogs.messageConfirmDialog.actionColor = actionColor
        ? actionColor
        : null;
      state.dialogs.messageConfirmDialog.handleConfirm = handleConfirm;
    },
    closeMessageConfirmDialog: (state, { payload }) => {
      state.dialogs.messageConfirmDialog.isOpen = false;
      state.dialogs.messageConfirmDialog.messageHeader = "";
      state.dialogs.messageConfirmDialog.messageBody = "";
      state.dialogs.messageConfirmDialog.action = null;
      state.dialogs.messageConfirmDialog.actionColor = null;
      state.dialogs.messageConfirmDialog.handleConfirm = null;
    },

    //change password dialog

    openChangePasswordDialog: (state, { payload }) => {
      const {
        handeCloseChangePassExtra,
        handleAfterChangePassExtra,
        userInfo,
      } = payload;
      console.log("openchangepass", userInfo);
      state.dialogs.changePassword.isOpen = true;
      state.dialogs.changePassword.userInfo = userInfo;
      state.dialogs.changePassword.handeCloseChangePassExtra =
        handeCloseChangePassExtra;
      state.dialogs.changePassword.handleAfterChangePassExtra =
        handleAfterChangePassExtra;
    },

    closeChangePasswordDialog: (state, { payload }) => {
      state.dialogs.changePassword.isOpen = false;
      state.dialogs.changePassword.userInfo = null;
      state.dialogs.changePassword.handeCloseChangePassExtra = null;
      state.dialogs.changePassword.handleAfterChangePassExtra = null;
    },

    openAttachmentsModal: (state, { payload }) => {
      const { requestType, reqTypeAttachments } = payload;
      state.dialogs.attachments.isOpen = true;
      state.dialogs.attachments.requestType = requestType;
      state.dialogs.attachments.reqTypeAttachments = reqTypeAttachments;
    },

    closeAttachmentsModal: (state, { payload }) => {
      state.dialogs.attachments.isOpen = false;
      state.dialogs.attachments.requestType = null;
      state.dialogs.attachments.sampleAttachments = null;
    },

    openAttachmentEntryDialog: (state, { payload }) => {
      const {
        order,
        attachmentName,
        downloadableName,
        downloadableData,
        exampleName,
        exampleData,
      } = payload;
      state.dialogs.attachmentEntry.isOpen = true;
      state.dialogs.attachmentEntry.order = order;
      state.dialogs.attachmentEntry.attachmentName = attachmentName;
    },

    closeAttachmentEntryDialog: (state, { payload }) => {
      state.dialogs.attachmentEntry.isOpen = false;
      state.dialogs.attachmentEntry.order = null;
      state.dialogs.attachmentEntry.attachmentName = null;
    },
    updateApproveCurrentStatus: (state, { payload }) => {
      const { currentStatus } = payload;
      state.dialogs.approve.currentStatus = currentStatus;
    },
    updateDeleteRequestIndex: (state, { payload }) => {
      const { indexToDelete } = payload;
      state.dialogs.approve.indexToDelete = indexToDelete;
    },
    updateApproveAllRequestList: (state, { payload }) => {
      const { requestList } = payload;
      state.dialogs.approveAll.requestList = requestList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  openDialog,
  closeDialog,
  openMessageModal,
  closeMessageModal,
  openMessageConfirmDialog,
  closeMessageConfirmDialog,
  openChangePasswordDialog,
  closeChangePasswordDialog,
  updateApproveCurrentStatus,
  updateDeleteRequestIndex,
  updateApproveAllRequestList,
  openAttachmentsModal,
  closeAttachmentsModal,
  openAttachmentEntryDialog,
  closeAttachmentEntryDialog,
  openSearchFacilityDialog,
  closeSearchFacilityDialog,
} = dialogSlice.actions;

export default dialogSlice.reducer;
