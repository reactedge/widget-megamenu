import React from 'react';
import type { ResolvedMegamenuConfig } from "./domain/megamenu.types.ts";
import { readWidgetConfig } from "./services/configLoader.ts";
import { MegamenuContent } from "./components/MegamenuContent.tsx";

type Props = {
    rawConfig: ResolvedMegamenuConfig;
};

export const MegamenuWidgetView = ({ rawConfig }: Props) => {
    const config = readWidgetConfig(rawConfig);

    if (!config) return null;

    return <MegamenuContent items={config?.data.items} theme={config.settings?.theme} />
};

