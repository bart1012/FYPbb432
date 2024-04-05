import { World } from "/src/World/world.js";

async function main(){
    const container = document.querySelector('canvas.webgl');
    const init = new World(container);
    await init.load_assets();
    init.start();
}

main().catch((err) => {
    console.error(err);
  });
