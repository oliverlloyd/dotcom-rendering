import { execSync } from 'child_process';

const processUsingPort = (port: number): number | null => {
    try {
        const pidBuffer = execSync(`lsof -t -i:${port}`)

        return parseInt(pidBuffer.toString().trim(), 10)
    } catch(e) {
        return null
    }
}

const isProd = (): boolean =>
    process.env.NODE_ENV === 'production'

const sanitizePath = (path?: string): string => {
    if (!path) {
        return ''
    }

    return path.startsWith('/') ? path : `/${path}`
}

export const contributionsServiceUrl = (path?: string) => {
    const sdcLocalPort = 3131

    let rootUrl: string;
    if (isProd()) {
        rootUrl = 'https://contributions.guardianapis.com';
    } else {
        rootUrl = processUsingPort(sdcLocalPort)
            ? `http://localhost:${sdcLocalPort}`
            : 'https://contributions.code.dev-guardianapis.com';
    }

    return `${rootUrl}${sanitizePath(path)}`;
}
