//Menu: Share Script
//Description: Share the selected script
let { scriptValue } = await import("../utils.js");
let command = await arg(`Which script do you want to share?`, scriptValue("command"));
let how = await arg("How would you like to share?", [
    {
        name: "Copy script to clipboard",
        value: "share-copy",
    },
    {
        name: "Post as a gist",
        value: "share-script",
    },
    {
        name: "Create install link",
        value: "share-script-as-link",
    },
    {
        name: "Prep for discussion",
        value: "share-script-as-discussion",
    },
]);
await cli(how, command);
export {};
