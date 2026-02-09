import {useWidgetConfig} from "../hooks/useWidgetConfig.ts";
import {loadingStyle, spinnerStyle} from "./Megamenu/Loading.ts";

export function Loading() {
    const config = useWidgetConfig();

    return (
        <div style={loadingStyle}>
            <div style={{
                ...spinnerStyle,
                borderTopColor: config.primaryColor
            }} />
        </div>
    );
}
