import type { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
    nav: {
        display: "flex",
        alignItems: "center",
        gap: "24px",
        padding: "12px 16px",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        position: "relative"
    },

    itemWrapper: {
        position: "relative",
    },

    item: {
        position: "relative",
        cursor: "pointer",
        color: "#111",
        padding: "8px 0"
    },

    itemLink: {
        color: "black"
    },

    itemLabel: {
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: "#333",
        paddingBottom: "4px",
        borderBottom: "2px solid transparent",
        transition: "border-color 0.2s ease"
    },

    itemLabelHover: {
        borderBottom: "2px solid #1979c3",
        /*borderBottomColor: "var(--secondary-color)"*/
    },

    buttonLink:{
        display: "block",
        padding: "10px",
        color: "#fff",
        textDecoration: "none",
        alignItems: "center",
        gap: "6px"
    },

    buttonLinkHover: {
        borderBottomColor: "var(--secondary-color)",
        border: "1px solid black"
    },

    buttonIcon: {
        marginLeft: "5px"
    },

    link: {
        display: "block",
        padding: "10px",
        fontSize: "14px",
        color: "#333",
        textDecoration: "none",
        alignItems: "center",
        gap: "6px",
    },

    linkHover: {
        color: "#111",
        borderBottomColor: "var(--secondary-color)",
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
    },

    dropdown: {
        position: "absolute",
        top: "100%",
        left: 0,
        border: "1px solid #e5e5e5",
        padding: "16px 20px",
        display: "flex",
        gap: "32px",
        zIndex: 1000
    },

    column: {
        minWidth: "180px"
    },

    columnTitle: {
        fontSize: "13px",
        fontWeight: 500,           // not bold
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        marginBottom: "10px",
        color: "#333",
        paddingLeft: "10px"
    },

    tilesGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "12px"
    },

    tile: {
        width: 160,
        height: 160,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderRadius: 6,
        backgroundColor: "#fff",
        textDecoration: "none",
        color: "#333",
        transition: "transform 0.15s ease, box-shadow 0.15s ease"
    },

    tileHover: {
        transform: "translateY(-2px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.12)"
    },

    tileImage: {
        width: 100,
        height: 100,
        objectFit: "cover",
        borderRadius: 4
    },

    tileLabel: {
        fontSize: 14,
        fontWeight: 600,
        textAlign: "center"
    },

    tileLabelHover: {

    }
};
