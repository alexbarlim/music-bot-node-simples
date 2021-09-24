const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ Nenhuma música tocando no momento ${message.author}... tentar novamente? ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        embed.setDescription(`Volume **${queue.volume}**%\nDuração **${track.duration}**\nModo loop **${methods[queue.repeatMode]}**\nSolicitado por ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('A música está em primeiro lugar - Feito com amor por Zerio ❤️', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
