import { WebContainer } from "@webcontainer/api";

export const startContainer = async () => {
    const webContainerInstance = await WebContainer.boot()

    await webContainerInstance.mount({
        'index.html': {
            file :{
                contents : `<html><body><script type="module" src="main.js"></script></body></html>`
            }
        },
        'main.js':{
            file :{
                contents :`document.body.innerHTML = '<h1>Hello from WebContainers!!</h1>'`
            }
        },
        'package.json':{
            file:{
                contents: JSON.stringify({
                    name: 'webcontainer-sample',
                    type: 'module',
                    scripts: {
                        start: 'vite',
                    },
                    dependencies: {
                        vite: '^6.3.1'
                    }
                }, null , 2)
            }
        }
    });


    const installProcess = await webContainerInstance.spawn('npm' , ['install']);
    installProcess.output.pipeTo(new WritableStream({
        write(data) {
            console.log('[install]' , data)
        }
    }));

    await installProcess.exit;

    const server = await webContainerInstance.spawn('npm' , ['run' ,'start']);
    server.output.pipeTo(new WritableStream({
        write(data){
            console.log('[server]' , data)
        }
    }));

    return webContainerInstance;
}