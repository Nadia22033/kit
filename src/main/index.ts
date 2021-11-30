// Name: Main
// Description: Script Kit
// Placeholder: Run script
// UI: arg
// preview: true

export interface Main {
  edit: Promise<typeof import("./edit")>
  help: Promise<typeof import("./help")>
  hot: Promise<typeof import("./hot")>
  index: Promise<typeof import("./index")>
  kenv: Promise<typeof import("./kenv")>
  kit: Promise<typeof import("./kit")>
  new: Promise<typeof import("./new")>
  showandtell: Promise<typeof import("./showandtell")>
}

interface MainModuleLoader {
  (
    packageName: keyof Main,
    ...moduleArgs: string[]
  ): Promise<any>
}

declare global {
  var main: MainModuleLoader
}

global.onTabs = []

onTab("Run", async () => {
  await cli("app-run")
})

onTab("New", async () => {
  await main("new")
})

onTab("Kit", async () => {
  await main("kit")
})

onTab("Docs", async () => {
  await main("help")
})

onTab("Hot 🔥", async () => {
  await main("hot")
})

export {}
