import React from 'react';
import { renderToString } from 'react-dom/server';
import type {ResolvedMegamenuConfig} from "../domain/megamenu.types.ts";
import {MegamenuWidgetView} from "../MegamenuWidgetView.tsx";

export const renderHtml = (config: ResolvedMegamenuConfig): string => {
    return renderToString(
        <div className="reactedge-megamenu">
            <MegamenuWidgetView rawConfig={config} />
        </div>
    );
};