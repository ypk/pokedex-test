const UpdateUrlQueryParams = (url, key, value) => {
    var targetUrl = new URL(url);
    var searchParams = new URLSearchParams(targetUrl.search);
    searchParams.set(key, value);
    targetUrl.search = searchParams.toString();
    return targetUrl;
}

export default UpdateUrlQueryParams;