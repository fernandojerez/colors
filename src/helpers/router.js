
export function info_url(color){
    return path(`/info/${encodeURIComponent(color)}`);
}

export function home(color){
    return path(`/`);
}

export function path(path){
    return process.env.PUBLIC_URL + path;
}