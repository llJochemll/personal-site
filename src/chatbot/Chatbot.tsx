import ReactWebChat, { createDirectLine } from "botframework-webchat";
import React, { useMemo } from "react";

export const Home: React.FC = () => {
    const directLine = useMemo(() => createDirectLine({ token: "YOUR_DIRECT_LINE_TOKEN" }), []);

    return (
        <ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />
    );
};

