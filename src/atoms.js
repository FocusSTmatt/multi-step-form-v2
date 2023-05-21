import { atom } from "recoil";

export const toggleChecked = atom({
    key: "isSwitchToggled",
    default: false,
})

export const getCart = atom({
    key: "cartItems",
    default: {
        serviceName: "",
        serviceTerms: "",
        servicePrice: "",
        OnlineServiceName: "",
        OnlineServiceTerms: "",
        OnlineServicePrice: "",
        LargerStorageName: "",
        LargerStorageTerms: "",
        LargerStoragePrice: "",
        CustomizeableProfileName: "",
        CustomizeableProfileTerms: "",
        CustomizeableProfilePrice: "",
    }
})