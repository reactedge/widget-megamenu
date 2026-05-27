import {WIDGET_ID} from "../services/configLoader.ts";

const CDN_URL = 'https://widgets-cdn.co.uk:8459'
export async function getCdnManifest() {
    const manifest = await fetch(`${CDN_URL}/${WIDGET_ID}/contracts/index.json`).then(r => r.json());

    const configs = await Promise.all(
        manifest.contracts.map(async (contract: string) => {
            const data = await fetch(`${CDN_URL}/${WIDGET_ID}/contracts/${contract}`).then(r => r.json());
            return {
                url: contract,
                id: contract.split('/').pop(),
                version: data.version || 'v1',
                data
            };
        })
    );

    return configs
}