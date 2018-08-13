exports.run = (bot, message, args) => {
    if (message.channel.type === 'dm') return;
    let say = args.join(' ');
    message.delete();
    message.channel.send(say);
}