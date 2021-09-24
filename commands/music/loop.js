const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ Nenhuma música tocando no momento ${message.author}... tentar novamente? ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`❌ Você deve primeiro desativar a música atual do modo loop (${client.config.app.px}loop) ${message.author}... tentar novamente? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `🔁 Modo de repetição **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** toda a fila será repetida indefinidamente 🔁` : `❌ Algo deu errado ${message.author}... tentar novamente? ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`❌ Você deve primeiro desabilitar a fila atual do loop (${client.config.app.px}loop queue) ${message.author}... tentar novamente? ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `🔂 Modo de repetição **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** a música atual será repetida indefinidamente (você pode repetir a fila com a opção <queue>) 🔂` : `❌ Algo deu errado ${message.author}... tentar novamente? ❌`);
        };
    },
};
