import { WebView } from 'react-native-webview';
import { Platform, View } from 'react-native';

export default function OpenLink({url}) {
    return (
        <View style={{flex: 1}}>
        { Platform.OS === 'web' ? (
            <iframe width="100%" height="100%" src={url} frameborder="0"></iframe>)
                :
            (
                <WebView
                    style={{flex: 1}}
                    originWhitelist={['*']}
                    javaScriptEnabled={true}
                    allowsFullscreenVideo
                    source={{ uri: url }} />
        )}
        </View>
    );
}