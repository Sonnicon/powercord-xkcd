const { Plugin } = require('powercord/entities')
const { get, post } = require('powercord/http')

module.exports = class xkcd extends Plugin{
	startPlugin(){
		powercord.api.commands.registerCommand({
			command: 'xkcd',
			description: 'Send XKCD webcomic.',
			usage: '[number]',
			
			executor: async (args) => {
				var num = ""
				if(args.length > 0 && args[0].length > 0){
					num = args[0] + "/"
				}
				const url = "https://xkcd.com/" + num + "info.0.json"

				try{
					const body = (await get(url).execute()).body
					return{
						send: true,
						result: "__**XKCD** " + body.num + ": **" + body.title + "**__\n*" + body.alt + "*\n" + body.img
					}
				}catch (e){
					return {
						send: false,
						result: `Failed to get JSON.`
					}
				}
			}
		})
	}

	pluginWillUnload(){
		powercord.api.commands.unregisterCommand('xkcd')
	}
}

