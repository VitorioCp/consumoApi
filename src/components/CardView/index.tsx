
import React, { useEffect, useState } from "react"
import { View, Text, Image, Button } from "react-native"
import { styles } from "./style"
import Logo from "../../../assets/logo.png";
import Divider from "../Divider";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";
import { CAR_API_BASE_URL, CAR_ASSETS_BASE_URL } from "../../constants/car";

export default function CardView() {

    const [carData, setCardata] = useState<CarModel | null>(null);

    useEffect(() => {
        (async () => {
            await loadCarData(1, setCardata);
        })();
    }, [])

    const renderPriceControls = () => (
        <View style={styles.priceLabelContainer}>
            <Button title="<" color={"#01a6b3"} onPress={() => { handlePreviousItem(carData, setCardata) }} />
            <Text style={styles.priceLabel}>
                {carData?.price}
            </Text>
            <Button title=">" color={"#01a6b3"} onPress={() => { handleNextItem(carData, setCardata) }} />

        </View>
    )


    const renderLogoBox = () => (
        <View style={styles.logoContainer}>
            <Image style={styles.imageLogo} source={Logo} />
        </View>
    )


    const renderCarDetails = () => (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.carBrand}>Lamborghini</Text>
            <Text style={styles.carName}>{carData?.carName}</Text>
        </View>
    )


    const renderCarImage = () => (
        <Image style={styles.image} source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }} />
    )

    return (
        <View style={styles.imageContainer}>
            {renderLogoBox()}

            <Divider />
            {renderCarDetails()}
            {renderCarImage()}
            <Divider />
            <BuyButton />
            {renderPriceControls()}


        </View>
    )

}