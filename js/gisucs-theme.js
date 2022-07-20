function changeGiscusTheme () {
    const theme = localStorage.getItem("pref-theme") === "dark" ?  'light' : 'dark_dimmed'

    function sendMessage(message) {
        const iframe = document.querySelector('iframe.giscus-frame');
        if (!iframe) return;
        iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
        setConfig: {
            theme: theme
        }
    });
}