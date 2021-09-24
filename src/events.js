player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    queue.metadata.send(`Tocando **${track.title}** em **${queue.connection.channel.name}** 🎧`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`Música ${track.title} adicionada a fila ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Fui desconectado manualmente do canal de voz! Limpando a fila... ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Ninguém está no canal de voz! Saíndo do canal de voz... ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Terminei de ler a fila inteira ✅');
});
