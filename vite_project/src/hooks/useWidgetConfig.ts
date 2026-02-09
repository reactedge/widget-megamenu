import {useEffect, useState} from "react";
import type {MegaMenuConfig} from "../components/Types.ts";

const defaultConfig = {}

export function useWidgetConfig() {
    const [config, setConfig] = useState<MegaMenuConfig>(defaultConfig);

    useEffect(() => {
        let cancelled = false;

        const init = async () => {
            const el = document.querySelector("megamenu-widget");
            const raw = el?.getAttribute("data-widget");

            let json: any = {};
            if (raw) {
                try {
                    json = JSON.parse(raw);
                } catch (e) {
                    console.error("Invalid data-widget JSON", e);
                }
            }

            const merged: MegaMenuConfig = {
                dataLocale: json.locale,
                fontColor: json.fontColor,
                primaryColor: json.primaryColor,
                secondaryColour: json.secondaryColour,
                urlSuffix: json.urlSuffix,
                dropdownLayouts: json.dropdownLayouts
            };

            if (!cancelled) {
                setConfig(merged);
            }
        };

        void init();

        return () => {
            cancelled = true;
        };
    }, []);

    return config;
}
