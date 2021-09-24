module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ Nenhuma música tocando no momento ${message.author}... tentar novamente? ❌`);

        if (!queue.tracks[0]) return message.channel.send(`❌ Não há música na fila depois da atual ${message.author}... tentar novamente? ❌`);

        await queue.clear();

        message.channel.send(`🗑️ A fila acabou de ser limpa! 🗑️`);
    },
};
