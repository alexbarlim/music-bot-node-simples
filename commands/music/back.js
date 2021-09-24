module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ Nenhuma música em reprodução ${message.author}... tentar novamente? ❌`);

        if (!queue.previousTracks[1]) return message.channel.send(`❌ Não havia música tocada antes ${message.author}... tentar novamente? ❌`);

        await queue.back();

        message.channel.send(`✅ Reproduzindo a música **anterior** ✅`);
    },
};
