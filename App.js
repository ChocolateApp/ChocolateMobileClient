import React from "react";
import Login from "./Login";
import OpenLink from "./OpenLink";
import { Alert } from "react-native";

export default function Chocolate() {
    const [url, setURL] = React.useState()
    const [work, setWork] = React.useState(false)

    console.log(url)

    function loadChocolate() {

        const regexExpurl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        const regexExpIP = /([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})\:?([0-9]{1,5})?/

        let regexWork = false;
        let isChocolate = false;
        let tempURL = url
        if (tempURL.startsWith("http://") || tempURL.startsWith("https://")) {
          tempURL = tempURL.replace("https://", "").replace("http://", "")
        }    
        checkURL = `http://${tempURL}/isChocolate`
        if (regexExpurl.test(tempURL) || regexExpIP.test(tempURL)) {
            regexWork = true;
            console.log("fetch -1")
            fetch(checkURL).then(response => { console.log("response"+response); return response.json(); }).then(data => {
              if (data.isChocolate) {
                  isChocolate = true;
              } else {
                  Alert.alert("Chocolate", "This is not a Chocolate Server")
                  isChocolate = false;
              }}).then(() => {
                if (regexWork && isChocolate) {
                    setWork(true)
                }}).catch((error) => {
                    Alert.alert("Chocolate Server Error", "This is not a Chocolate Server")
                })
        } else {
            Alert.alert("Chocolate URL Error", "This is not a valid URL")
        }
    }

    return (
        <>
            {!work ? <Login setURL={setURL} loadChocolate={loadChocolate} /> : <OpenLink url={url} />}
        </>
    );
}