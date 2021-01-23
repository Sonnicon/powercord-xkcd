# powercord-xkcd
A plugin for the [Powercord](https://github.com/powercord-org/powercord) discord client modification, adding a command to fetch and post [XKCD](https://xkcd.com/) webcomics by number.

## Installation
Clone or download/extract the repository into a directory in Powercord's `plugins` directory (located in `powercord/src/Powercord/plugins`, or accessed through settings menu in client).

## Usage
`xkcd {number}` will send the title, number, image, and alt-text of the comic with the specified number. Omitting the number will result in the latest comic. The image will be in the form of a link (Discord defaults to displaying it as an embed) to increase speed.

Requires access to make requests to `www.xkcd.com` for fetching comics.

## License
This project is licensed under the [MIT License](LICENSE).